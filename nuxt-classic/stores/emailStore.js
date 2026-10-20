import { defineStore } from 'pinia';
import { emailAPI } from '~/services/modules';

export const useEmailStore = defineStore('email', {
  state: () => ({
    emails: [],
    selectedEmail: null,
    currentFolder: 'INBOX',
    loading: false,
    error: null,
    openEmail: false,
    composeEmail: false,
    maximize: false,
    minimize: false,
  }),

  getters: {
    unreadCount: (state) => state.emails.filter(e => !e.read).length,
  },

  actions: {
    async fetchEmails(folder) {
      if (folder) this.currentFolder = folder;
      this.loading = true;
      this.error = null;
      try {
        const res = await emailAPI.getEmails(this.currentFolder);
        this.emails = res.data || [];
      } catch (e) {
        this.error = e?.data?.message || '加载邮件失败';
      } finally {
        this.loading = false;
      }
    },

    async sendEmail(data) {
      this.loading = true;
      try {
        const res = await emailAPI.sendEmail(data);
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '发送邮件失败';
        throw e;
      } finally {
        this.loading = false;
      }
    },

    async markRead(id, read = true) {
      try {
        await emailAPI.markRead(id, read);
        const email = this.emails.find(e => e.id === id);
        if (email) email.read = read;
      } catch (e) {
        this.error = e?.data?.message || '操作失败';
      }
    },

    async toggleStar(id) {
      try {
        await emailAPI.markStar(id);
        const email = this.emails.find(e => e.id === id);
        if (email) email.starred = !email.starred;
      } catch (e) {
        this.error = e?.data?.message || '操作失败';
      }
    },

    async moveToFolder(id, folder) {
      try {
        await emailAPI.moveToFolder(id, folder);
        this.emails = this.emails.filter(e => e.id !== id);
      } catch (e) {
        this.error = e?.data?.message || '移动邮件失败';
      }
    },

    async deleteEmail(id) {
      try {
        await emailAPI.deleteEmail(id);
        this.emails = this.emails.filter(e => e.id !== id);
      } catch (e) {
        this.error = e?.data?.message || '删除邮件失败';
      }
    },

    selectEmail(email) {
      this.selectedEmail = email;
      this.openEmail = true;
      if (email && !email.read) this.markRead(email.id);
    },
  },
});
