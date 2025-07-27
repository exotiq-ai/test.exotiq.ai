import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { persistenceService } from '../services/persistence';
import { analyticsService } from '../services/analytics';

interface ChatBotState {
  isOpen: boolean;
  hasInteracted: boolean;
  sessionId: string;
  isReturningUser: boolean;
}

export function useChatBot() {
  // Generate or retrieve session ID
  const getSessionId = () => {
    const stored = sessionStorage.getItem('exotiq_session_id');
    if (stored) return stored;
    
    const newId = uuidv4();
    sessionStorage.setItem('exotiq_session_id', newId);
    return newId;
  };

  const [state, setState] = useState<ChatBotState>({
    isOpen: false,
    hasInteracted: false,
    sessionId: getSessionId(),
    isReturningUser: false
  });

  // Check if user has previous conversation
  useEffect(() => {
    const existingConversation = persistenceService.loadConversation(state.sessionId);
    if (existingConversation && existingConversation.messages.length > 0) {
      setState(prev => ({
        ...prev,
        isReturningUser: true,
        hasInteracted: true
      }));
    }
  }, [state.sessionId]);

  const toggleChatBot = () => {
    setState(prev => ({
      ...prev,
      isOpen: !prev.isOpen,
      hasInteracted: true
    }));
    
    if (!state.isOpen) {
      analyticsService.track('chatbot_opened', {}, state.sessionId);
    } else {
      analyticsService.track('chatbot_closed', {}, state.sessionId);
    }
  };

  const openChatBot = () => {
    setState(prev => ({
      ...prev,
      isOpen: true,
      hasInteracted: true
    }));
    
    analyticsService.track('chatbot_opened', {}, state.sessionId);
  };

  const closeChatBot = () => {
    setState(prev => ({
      ...prev,
      isOpen: false
    }));
    
    analyticsService.track('chatbot_closed', {}, state.sessionId);
  };

  // Auto-open chatbot after 30 seconds if user hasn't interacted
  useEffect(() => {
    if (!state.hasInteracted) {
      const timer = setTimeout(() => {
        setState(prev => ({
          ...prev,
          isOpen: true
        }));
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, [state.hasInteracted]);

  return {
    isOpen: state.isOpen,
    hasInteracted: state.hasInteracted,
    sessionId: state.sessionId,
    isReturningUser: state.isReturningUser,
    toggleChatBot,
    openChatBot,
    closeChatBot
  };
}