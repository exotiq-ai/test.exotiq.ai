// Analytics service for tracking chatbot interactions and conversions

export interface AnalyticsEvent {
  event: string;
  properties: Record<string, any>;
  timestamp: Date;
  sessionId: string;
  userId?: string;
}

export interface ConversationMetrics {
  sessionId: string;
  startTime: Date;
  endTime?: Date;
  messageCount: number;
  userMessages: number;
  botMessages: number;
  leadScore: number;
  outcome: 'abandoned' | 'completed' | 'converted' | 'ongoing';
  conversionType?: 'calendar_booking' | 'beta_signup' | 'contact_form';
  userContext?: Record<string, any>;
}

class AnalyticsService {
  private static instance: AnalyticsService;
  private events: AnalyticsEvent[] = [];
  private conversations: Map<string, ConversationMetrics> = new Map();
  private isEnabled: boolean;
  private cookiePreferences: any = null;

  constructor() {
    this.isEnabled = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';
    this.loadCookiePreferences();
  }

  static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  private loadCookiePreferences() {
    try {
      const saved = localStorage.getItem('exotiq_cookie_preferences');
      if (saved) {
        this.cookiePreferences = JSON.parse(saved);
      }
    } catch (error) {
      console.warn('Failed to load cookie preferences:', error);
    }
  }

  private canTrackAnalytics(): boolean {
    this.loadCookiePreferences(); // Refresh preferences
    return this.cookiePreferences?.analytics === true;
  }

  private canTrackMarketing(): boolean {
    this.loadCookiePreferences(); // Refresh preferences
    return this.cookiePreferences?.marketing === true;
  }
  // Track chatbot events
  track(event: string, properties: Record<string, any> = {}, sessionId: string, userId?: string): void {
    if (!this.isEnabled || !this.canTrackAnalytics()) return;

    const analyticsEvent: AnalyticsEvent = {
      event,
      properties: {
        ...properties,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        viewport: `${window.innerWidth}x${window.innerHeight}`
      },
      timestamp: new Date(),
      sessionId,
      userId
    };

    this.events.push(analyticsEvent);
    
    // Send to external analytics services
    this.sendToExternalServices(analyticsEvent);
    
    // Store in localStorage for persistence
    this.persistEvent(analyticsEvent);
    
    console.log('Analytics Event:', analyticsEvent);
  }

  // Conversation-specific tracking
  startConversation(sessionId: string, userContext?: Record<string, any>): void {
    const conversation: ConversationMetrics = {
      sessionId,
      startTime: new Date(),
      messageCount: 0,
      userMessages: 0,
      botMessages: 0,
      leadScore: 0,
      outcome: 'ongoing',
      userContext
    };

    this.conversations.set(sessionId, conversation);
    
    this.track('conversation_started', {
      sessionId,
      userContext
    }, sessionId);
  }

  trackMessage(sessionId: string, type: 'user' | 'bot', content: string, leadScore?: number): void {
    const conversation = this.conversations.get(sessionId);
    if (!conversation) return;

    conversation.messageCount++;
    if (type === 'user') {
      conversation.userMessages++;
    } else {
      conversation.botMessages++;
    }

    if (leadScore !== undefined) {
      conversation.leadScore = leadScore;
    }

    this.conversations.set(sessionId, conversation);

    this.track('message_sent', {
      type,
      messageLength: content.length,
      messageCount: conversation.messageCount,
      leadScore: conversation.leadScore
    }, sessionId);
  }

  trackAction(sessionId: string, action: string, properties: Record<string, any> = {}): void {
    this.track('chatbot_action', {
      action,
      ...properties
    }, sessionId);

    // Update conversation metrics based on action
    const conversation = this.conversations.get(sessionId);
    if (conversation) {
      if (action === 'calendar_booking' || action === 'beta_signup' || action === 'contact_form') {
        conversation.outcome = 'converted';
        conversation.conversionType = action as any;
        conversation.endTime = new Date();
      }
      this.conversations.set(sessionId, conversation);
    }
  }

  endConversation(sessionId: string, outcome: ConversationMetrics['outcome'] = 'completed'): void {
    const conversation = this.conversations.get(sessionId);
    if (!conversation) return;

    conversation.endTime = new Date();
    conversation.outcome = outcome;

    this.conversations.set(sessionId, conversation);

    const duration = conversation.endTime.getTime() - conversation.startTime.getTime();

    this.track('conversation_ended', {
      outcome,
      duration: Math.round(duration / 1000), // seconds
      messageCount: conversation.messageCount,
      leadScore: conversation.leadScore,
      conversionType: conversation.conversionType
    }, sessionId);
  }

  // A/B Testing support
  getVariant(testName: string, sessionId: string): string {
    // Simple hash-based A/B testing
    const hash = this.hashCode(sessionId + testName);
    const variant = hash % 2 === 0 ? 'A' : 'B';
    
    this.track('ab_test_assignment', {
      testName,
      variant
    }, sessionId);
    
    return variant;
  }

  // Get analytics data for reporting
  getConversationMetrics(): ConversationMetrics[] {
    return Array.from(this.conversations.values());
  }

  getEvents(filter?: Partial<AnalyticsEvent>): AnalyticsEvent[] {
    if (!filter) return this.events;
    
    return this.events.filter(event => {
      return Object.entries(filter).every(([key, value]) => {
        return event[key as keyof AnalyticsEvent] === value;
      });
    });
  }

  // Export data for analysis
  exportData(): { events: AnalyticsEvent[]; conversations: ConversationMetrics[] } {
    return {
      events: this.events,
      conversations: Array.from(this.conversations.values())
    };
  }

  // Private methods
  private sendToExternalServices(event: AnalyticsEvent): void {
    // Only send to analytics services if user has consented
    if (!this.canTrackAnalytics()) return;

    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.event, {
        custom_parameter_1: event.sessionId,
        ...event.properties
      });
    }

    // Mixpanel (if configured)
    if (typeof window !== 'undefined' && (window as any).mixpanel && import.meta.env.VITE_MIXPANEL_TOKEN && this.canTrackAnalytics()) {
      (window as any).mixpanel.track(event.event, {
        session_id: event.sessionId,
        ...event.properties
      });
    }

    // Marketing tracking (only if marketing cookies are enabled)
    if (this.canTrackMarketing()) {
      // Facebook Pixel, LinkedIn Insight Tag, etc.
      console.log('Marketing tracking enabled for event:', event.event);
    }
  }

  private persistEvent(event: AnalyticsEvent): void {
    try {
      const stored = localStorage.getItem('exotiq_analytics_events');
      const events = stored ? JSON.parse(stored) : [];
      events.push(event);
      
      // Keep only last 1000 events to prevent localStorage bloat
      if (events.length > 1000) {
        events.splice(0, events.length - 1000);
      }
      
      localStorage.setItem('exotiq_analytics_events', JSON.stringify(events));
    } catch (error) {
      console.warn('Failed to persist analytics event:', error);
    }
  }

  private hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }
}

export const analyticsService = AnalyticsService.getInstance();

// Convenience functions for common tracking
export const trackChatbotOpen = (sessionId: string) => {
  analyticsService.track('chatbot_opened', {}, sessionId);
};

export const trackChatbotClose = (sessionId: string) => {
  analyticsService.track('chatbot_closed', {}, sessionId);
};

export const trackCalendarClick = (sessionId: string, type: '15min' | '30min') => {
  analyticsService.trackAction(sessionId, 'calendar_booking', { type });
};

export const trackBetaSignup = (sessionId: string, email: string) => {
  analyticsService.trackAction(sessionId, 'beta_signup', { email });
};