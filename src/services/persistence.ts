// Conversation persistence service for maintaining chat history across sessions

export interface PersistedMessage {
  id: string;
  type: 'user' | 'bot' | 'action';
  content: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}

export interface PersistedConversation {
  sessionId: string;
  userId?: string;
  messages: PersistedMessage[];
  userContext: Record<string, any>;
  leadScore: number;
  lastActivity: Date;
  isActive: boolean;
}

class PersistenceService {
  private static instance: PersistenceService;
  private readonly STORAGE_KEY = 'exotiq_chatbot_conversations';
  private readonly MAX_CONVERSATIONS = 10;
  private readonly CONVERSATION_EXPIRY_DAYS = 30;

  static getInstance(): PersistenceService {
    if (!PersistenceService.instance) {
      PersistenceService.instance = new PersistenceService();
    }
    return PersistenceService.instance;
  }

  // Save conversation to localStorage
  saveConversation(conversation: PersistedConversation): void {
    try {
      const conversations = this.getAllConversations();
      const existingIndex = conversations.findIndex(c => c.sessionId === conversation.sessionId);
      
      if (existingIndex >= 0) {
        conversations[existingIndex] = conversation;
      } else {
        conversations.push(conversation);
      }

      // Clean up old conversations
      this.cleanupOldConversations(conversations);
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(conversations));
    } catch (error) {
      console.warn('Failed to save conversation:', error);
    }
  }

  // Load conversation from localStorage
  loadConversation(sessionId: string): PersistedConversation | null {
    try {
      const conversations = this.getAllConversations();
      const conversation = conversations.find(c => c.sessionId === sessionId);
      
      if (conversation && this.isConversationValid(conversation)) {
        return {
          ...conversation,
          messages: conversation.messages.map(msg => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          })),
          lastActivity: new Date(conversation.lastActivity)
        };
      }
      
      return null;
    } catch (error) {
      console.warn('Failed to load conversation:', error);
      return null;
    }
  }

  // Add message to conversation
  addMessage(sessionId: string, message: PersistedMessage): void {
    const conversation = this.loadConversation(sessionId) || this.createNewConversation(sessionId);
    
    conversation.messages.push(message);
    conversation.lastActivity = new Date();
    conversation.isActive = true;
    
    this.saveConversation(conversation);
  }

  // Update user context
  updateUserContext(sessionId: string, context: Record<string, any>): void {
    const conversation = this.loadConversation(sessionId) || this.createNewConversation(sessionId);
    
    conversation.userContext = { ...conversation.userContext, ...context };
    conversation.lastActivity = new Date();
    
    this.saveConversation(conversation);
  }

  // Update lead score
  updateLeadScore(sessionId: string, score: number): void {
    const conversation = this.loadConversation(sessionId) || this.createNewConversation(sessionId);
    
    conversation.leadScore = score;
    conversation.lastActivity = new Date();
    
    this.saveConversation(conversation);
  }

  // Mark conversation as inactive
  endConversation(sessionId: string): void {
    const conversation = this.loadConversation(sessionId);
    if (conversation) {
      conversation.isActive = false;
      conversation.lastActivity = new Date();
      this.saveConversation(conversation);
    }
  }

  // Get all active conversations
  getActiveConversations(): PersistedConversation[] {
    return this.getAllConversations().filter(c => c.isActive && this.isConversationValid(c));
  }

  // Clear all conversations
  clearAllConversations(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  // Clear specific conversation
  clearConversation(sessionId: string): void {
    const conversations = this.getAllConversations().filter(c => c.sessionId !== sessionId);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(conversations));
  }

  // Get conversation summary for analytics
  getConversationSummary(sessionId: string): {
    messageCount: number;
    userMessages: number;
    botMessages: number;
    duration: number;
    leadScore: number;
  } | null {
    const conversation = this.loadConversation(sessionId);
    if (!conversation) return null;

    const userMessages = conversation.messages.filter(m => m.type === 'user').length;
    const botMessages = conversation.messages.filter(m => m.type === 'bot').length;
    
    const firstMessage = conversation.messages[0];
    const lastMessage = conversation.messages[conversation.messages.length - 1];
    const duration = firstMessage && lastMessage 
      ? lastMessage.timestamp.getTime() - firstMessage.timestamp.getTime()
      : 0;

    return {
      messageCount: conversation.messages.length,
      userMessages,
      botMessages,
      duration,
      leadScore: conversation.leadScore
    };
  }

  // Private methods
  private getAllConversations(): PersistedConversation[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.warn('Failed to load conversations:', error);
      return [];
    }
  }

  private createNewConversation(sessionId: string): PersistedConversation {
    return {
      sessionId,
      messages: [],
      userContext: {},
      leadScore: 0,
      lastActivity: new Date(),
      isActive: true
    };
  }

  private isConversationValid(conversation: PersistedConversation): boolean {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() - this.CONVERSATION_EXPIRY_DAYS);
    
    const lastActivity = new Date(conversation.lastActivity);
    return lastActivity > expiryDate;
  }

  private cleanupOldConversations(conversations: PersistedConversation[]): void {
    // Remove expired conversations
    const validConversations = conversations.filter(c => this.isConversationValid(c));
    
    // Keep only the most recent conversations
    validConversations.sort((a, b) => 
      new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime()
    );
    
    if (validConversations.length > this.MAX_CONVERSATIONS) {
      validConversations.splice(this.MAX_CONVERSATIONS);
    }
    
    // Update the array reference
    conversations.length = 0;
    conversations.push(...validConversations);
  }
}

export const persistenceService = PersistenceService.getInstance();