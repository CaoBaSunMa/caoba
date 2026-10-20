import { writable } from 'svelte/store';
import { emailAPI } from '../services/modules';

function createEmailStore() {
  const { subscribe, set, update } = writable({
    emails: [],
    selectedEmail: null,
    currentFolder: 'INBOX',
    loading: false,
    error: null,
  });

  return {
    subscribe,

    async fetchEmails(folder) {
      update(s => ({ ...s, loading: true, error: null, currentFolder: folder || s.currentFolder }));
      try {
        const res = await emailAPI.getEmails(folder || 'INBOX');
        update(s => ({ ...s, emails: res.data || [], loading: false }));
      } catch (e) {
        update(s => ({ ...s, loading: false, error: e?.data?.message || '加载邮件失败' }));
      }
    },

    async sendEmail(data) {
      const res = await emailAPI.sendEmail(data);
      return res.data;
    },

    async markRead(id, read = true) {
      await emailAPI.markRead(id, read);
      update(s => ({
        ...s,
        emails: s.emails.map(e => e.id === id ? { ...e, read } : e),
      }));
    },

    async toggleStar(id) {
      await emailAPI.markStar(id);
      update(s => ({
        ...s,
        emails: s.emails.map(e => e.id === id ? { ...e, starred: !e.starred } : e),
      }));
    },

    async deleteEmail(id) {
      await emailAPI.deleteEmail(id);
      update(s => ({ ...s, emails: s.emails.filter(e => e.id !== id) }));
    },

    selectEmail(email) {
      update(s => ({ ...s, selectedEmail: email }));
      if (email && !email.read) this.markRead(email.id);
    },
  };
}

export const emailStore = createEmailStore();
