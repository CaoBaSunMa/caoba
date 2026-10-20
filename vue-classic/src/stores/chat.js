import { defineStore } from 'pinia';
import { chatAPI } from '@/services/modules';
import avatar1 from '@/assets/img/avatar1.jpg';
import avatar8 from '@/assets/img/avatar8.jpg';

const VARIANTS = ['primary', 'soft-danger', 'soft-info', 'soft-success', 'soft-warning', 'soft-primary'];

function fmtTime(t) {
  if (!t) return '';
  const d = new Date(t);
  if (isNaN(d.getTime())) return String(t);
  const now = new Date();
  const sameDay = d.toDateString() === now.toDateString();
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  if (sameDay) return `${hh}:${mm}`;
  const diffDays = Math.floor((now - d) / 86400000);
  if (diffDays === 1) return '昨天';
  if (diffDays < 7) return `${diffDays}天前`;
  return `${d.getMonth() + 1}月${d.getDate()}日`;
}

export const useChatStore = defineStore('chat', {
    state: () => ({
        // API data
        conversations: [],
        messages: [],
        loading: false,
        error: null,
        currentConvId: null,
        // Existing UI state
        startChat: false,
        avatar: { type: "img", src: avatar8 },
        userId: 2,
        userName: "乌玛·瑟曼",
        msg: [],
        contactMsg: [],
        rplyMsg: [],
        status: "Typing",
        //Group states
        grpId: 12,
        grpAvatar: { type: "img", src: avatar1 },
        groupName: "开发者舞台",
        grpStatus: "5分钟前活跃",
        grpMsg: [],
    }),
    getters: {
        contactList(state) {
            return state.conversations.filter(c => c.type === 'DIRECT').map(c => this.mapConversation(c, false));
        },
        groupList(state) {
            return state.conversations.filter(c => c.type === 'GROUP').map(c => this.mapConversation(c, true));
        },
    },
    actions: {
        // ---- API actions ----
        async fetchConversations() {
            this.loading = true;
            this.error = null;
            try {
                const res = await chatAPI.getConversations();
                this.conversations = res.data ?? res;
            } catch (err) {
                this.error = err.message || '获取会话列表失败';
                console.error('[chat] fetchConversations failed:', err);
            } finally {
                this.loading = false;
            }
        },

        /** 将后端会话规范化为前端 ContactList 使用的展示结构 */
        mapConversation(conv, isGroup) {
            const title = conv.name ? conv.name.charAt(0) : (isGroup ? '群' : '友');
            const variant = VARIANTS[(conv.id || 0) % VARIANTS.length];
            const base = {
                id: conv.id,
                name: conv.name || '聊天',
                avatar: null,
                initAvatar: { type: 'init', title, variant },
                lastChat: conv.lastMessage || '暂无消息',
                time: fmtTime(conv.updatedAt || conv.createdAt),
                status: 'online',
                unread: conv.unread || 0,
            };
            if (isGroup) base.group = conv.name || '群组';
            return base;
        },

        async fetchMessages(conversationId) {
            this.loading = true;
            this.error = null;
            try {
                const res = await chatAPI.getMessages(conversationId, { page: 0, size: 50 });
                this.messages = (res.data ?? res) || [];
                return this.messages;
            } catch (err) {
                this.error = err.message || '获取消息失败';
                console.error('[chat] fetchMessages failed:', err);
                return [];
            } finally {
                this.loading = false;
            }
        },

        /** 打开某个会话：拉取消息填充对应消息数组 */
        async selectConversation(conv, isGroup) {
            if (!conv) return;
            this.currentConvId = conv.id;
            const peer = this.mapConversation(conv, isGroup);
            if (isGroup) {
                this.grpId = conv.id;
                this.grpAvatar = { type: 'init', title: peer.initAvatar.title, variant: peer.initAvatar.variant };
                this.groupName = conv.name;
                this.grpStatus = '在线';
            } else {
                this.userId = conv.peerId || conv.id;
                this.avatar = { type: 'init', title: peer.initAvatar.title, variant: peer.initAvatar.variant };
                this.userName = conv.name;
                this.status = '在线';
            }
            const msgs = await this.fetchMessages(conv.id);
            const list = msgs.map(m => ({
                text: m.content,
                time: fmtTime(m.createdAt),
                types: m.senderId && m.senderId === 1 ? 'sent' : 'received',
                avatar: this.avatar,
            }));
            if (isGroup) {
                this.grpMsg.splice(0, this.grpMsg.length, ...list);
            } else {
                this.msg.splice(0, this.msg.length, ...list);
                this.contactMsg.splice(0, this.contactMsg.length, ...list);
            }
            try { await chatAPI.markRead(conv.id); } catch (e) { /* 忽略 */ }
        },

        selectConversationById(convId, isGroup) {
            const conv = this.conversations.find(c => c.id === convId);
            if (conv) return this.selectConversation(conv, isGroup);
        },

        async sendMessageAPI(text) {
            const content = text || '';
            if (!content.trim() || !this.currentConvId) return null;
            const isGroup = this.conversations.find(c => c.id === this.currentConvId)?.type === 'GROUP';
            try {
                const res = await chatAPI.sendMessage(this.currentConvId, { content, type: 'TEXT' });
                const sent = res.data ?? res;
                const item = { text: content, time: fmtTime(new Date()), types: 'sent' };
                if (isGroup) this.grpMsg.push(item); else { this.msg.push(item); this.contactMsg.push(item); }
                return sent;
            } catch (err) {
                this.error = err.message || '发送消息失败';
                console.error('[chat] sendMessageAPI failed:', err);
                return null;
            }
        },

        // ---- Existing UI logic (kept as-is) ----
        toggleStartChat() {
            this.startChat = !this.startChat;
        },
        sendMsg(newMsg) {
            this.msg.push(newMsg);
        },
        setUser(userId, avatar, userName, status) {
            this.userId = userId;
            this.avatar = avatar;
            this.userName = userName;
            this.status = status;
        },
        sendContactMsg(newContactMsg) {
            this.contactMsg.push(newContactMsg);
        },
        addReplyMsg(newRplyMsg) {
            this.rplyMsg.push(newRplyMsg);
        },
        // Group actions
        sendGrpMsg(newGrpMsg) {
            this.grpMsg.push(newGrpMsg);
        },
        selectGroup(grpId, grpAvatar, groupName, grpStatus) {
            this.grpId = grpId;
            this.grpAvatar = grpAvatar;
            this.groupName = groupName;
            this.grpStatus = grpStatus;
        },
    },
});