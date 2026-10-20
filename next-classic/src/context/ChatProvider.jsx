'use client';
import { createContext, useContext, useState, useCallback } from 'react';
import { chatAPI } from '@/services/modules';

const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentConvId, setCurrentConvId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchConversations = useCallback(async () => {
    setLoading(true);
    try {
      const res = await chatAPI.getConversations();
      setConversations(res.data || []);
    } catch (e) {
      setError(e?.data?.message || '加载会话失败');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchMessages = useCallback(async (conversationId) => {
    setLoading(true);
    try {
      const res = await chatAPI.getMessages(conversationId);
      setMessages(res.data || []);
      setCurrentConvId(conversationId);
      await chatAPI.markRead(conversationId);
    } catch (e) {
      setError(e?.data?.message || '加载消息失败');
    } finally {
      setLoading(false);
    }
  }, []);

  const sendMessage = useCallback(async (conversationId, content) => {
    const res = await chatAPI.sendMessage(conversationId, { content, type: 'TEXT' });
    setMessages(prev => [...prev, res.data]);
    return res.data;
  }, []);

  return (
    <ChatContext.Provider value={{
      conversations, messages, currentConvId, loading, error,
      fetchConversations, fetchMessages, sendMessage,
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
