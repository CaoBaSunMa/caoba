import { defineStore } from 'pinia';
import { chatAPI } from '~/services/modules';

// 视图层（chat 的 12 个组件）通过 `chatStore.$state.xxx` 读取这些展示字段。
// 之前 store 里完全没有这些字段，模板里的 `chatState.avatar.type` 在 SSR 时
// 直接抛 "Cannot read properties of undefined (reading 'type')"，三个聊天页
// 全部被渲染成空白。这里统一提供，并跟随当前会话同步。
function emptyAvatar() {
  return { type: 'init', src: '', variant: 'primary', title: '?' };
}

function buildAvatar(conv) {
  if (!conv) return emptyAvatar();
  const title = (conv.name || '?').trim().slice(0, 1);
  if (conv.avatar) {
    return { type: 'img', src: conv.avatar, variant: 'primary', title };
  }
  return { type: 'init', src: '', variant: 'primary', title };
}

export const useChatStore = defineStore('chat', {
  state: () => ({
    conversations: [],
    messages: [],
    loading: false,
    error: null,
    currentConvId: null,
    currentConv: null,
    startChat: false,

    // 派生展示字段（模板直接读，必须始终有安全默认值）
    avatar: emptyAvatar(),
    grpAvatar: emptyAvatar(),
    contAvatar: emptyAvatar(),
    userName: '',
    groupName: '',
    contUserName: '',
    contUserStatus: '离线',
    status: '离线',
    activeStatus: '离线',
    msg: [],
    grpMsg: [],
    contactMsg: [],
  }),

  getters: {
    sortedConversations: (state) => {
      return [...state.conversations].sort((a, b) => {
        const ta = new Date(a.updatedAt || a.createdAt || 0);
        const tb = new Date(b.updatedAt || b.createdAt || 0);
        return tb - ta;
      });
    },
  },

  actions: {
    // 把当前会话同步到各个视图字段
    applyConversation(conv) {
      const av = buildAvatar(conv);
      const name = conv?.name || '';
      const presence = conv?.unread > 0 ? `${conv.unread} 条未读` : '在线';
      this.avatar = { ...av };
      this.grpAvatar = { ...av };
      this.contAvatar = { ...av };
      this.userName = name;
      this.groupName = name;
      this.contUserName = name;
      this.contUserStatus = presence;
      this.status = presence;
      this.activeStatus = presence;
    },

    async fetchConversations() {
      this.loading = true;
      this.error = null;
      try {
        const res = await chatAPI.getConversations();
        this.conversations = res.data || [];
        // 还没有选中会话时，默认选最近的一条，避免页面各处拿不到展示数据
        if (!this.currentConv && this.conversations.length) {
          this.selectConversation(this.conversations[0]);
        }
      } catch (e) {
        this.error = e?.data?.message || '加载会话失败';
      } finally {
        this.loading = false;
      }
    },

    async fetchMessages(conversationId) {
      this.loading = true;
      this.error = null;
      try {
        const res = await chatAPI.getMessages(conversationId);
        this.messages = res.data || [];
        this.msg = this.messages;
        this.grpMsg = this.messages;
        this.contactMsg = this.messages;
        this.currentConvId = conversationId;
        await chatAPI.markRead(conversationId);
        if (this.currentConv && this.currentConv.unread) {
          this.currentConv.unread = 0;
        }
      } catch (e) {
        this.error = e?.data?.message || '加载消息失败';
      } finally {
        this.loading = false;
      }
    },

    async sendMessage(conversationId, content) {
      try {
        const res = await chatAPI.sendMessage(conversationId, { content, type: 'TEXT' });
        this.messages.push(res.data);
        this.msg = this.messages;
        this.grpMsg = this.messages;
        this.contactMsg = this.messages;
        const conv = this.conversations.find(c => c.id === conversationId);
        if (conv) conv.lastMessage = content;
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '发送消息失败';
        throw e;
      }
    },

    async createDirectConversation(targetUserId) {
      try {
        const res = await chatAPI.createDirectConversation({ targetUserId });
        this.conversations.push(res.data);
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '创建会话失败';
        throw e;
      }
    },

    async createGroupConversation(name, memberIds) {
      try {
        const res = await chatAPI.createGroupConversation({ name, memberIds });
        this.conversations.push(res.data);
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '创建群聊失败';
        throw e;
      }
    },

    selectConversation(conv) {
      this.currentConv = conv;
      this.applyConversation(conv);
      this.startChat = !!conv;
      if (conv) this.fetchMessages(conv.id);
    },

    toggleStartChat() {
      // Toggle mobile chat view
      this.startChat = !this.startChat;
    },
  },
});
