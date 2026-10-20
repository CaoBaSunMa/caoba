import { writable, derived } from 'svelte/store';
import { chatAPI } from '../services/modules';

function createChatStore() {
  const { subscribe, set, update } = writable({
    conversations: [],
    messages: [],
    currentConvId: null,
    loading: false,
    error: null,
  });

  return {
    subscribe,

    async fetchConversations() {
      update(s => ({ ...s, loading: true, error: null }));
      try {
        const res = await chatAPI.getConversations();
        update(s => ({ ...s, conversations: res.data || [], loading: false }));
      } catch (e) {
        update(s => ({ ...s, loading: false, error: e?.data?.message || '加载会话失败' }));
      }
    },

    async fetchMessages(conversationId) {
      update(s => ({ ...s, loading: true, error: null }));
      try {
        const res = await chatAPI.getMessages(conversationId);
        update(s => ({ ...s, messages: res.data || [], currentConvId: conversationId, loading: false }));
        await chatAPI.markRead(conversationId);
      } catch (e) {
        update(s => ({ ...s, loading: false, error: e?.data?.message || '加载消息失败' }));
      }
    },

    async sendMessage(conversationId, content) {
      const res = await chatAPI.sendMessage(conversationId, { content, type: 'TEXT' });
      update(s => ({ ...s, messages: [...s.messages, res.data] }));
      return res.data;
    },

    selectConversation(conv) {
      update(s => ({ ...s, currentConvId: conv?.id }));
      if (conv) this.fetchMessages(conv.id);
    },
  };
}

export const chatStore = createChatStore();
