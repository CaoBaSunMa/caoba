import { defineStore } from 'pinia';
import { contactAPI } from '~/services/modules';

export const useContactStore = defineStore('contact', {
  state: () => ({
    contacts: [],
    archivedContacts: [],
    customLabels: ['VIP', '合伙人', '广告', '促销', '设计师', 'React 开发', '协作'],
    loading: false,
    error: null,
    searchQuery: '',
    filter: 'all',
    activeLabel: '',
    current: null,
  }),

  getters: {
    filteredContacts: (state) => {
      let list = [...state.contacts];
      if (state.filter === 'starred') list = list.filter(c => c.starred);
      if (state.filter === 'archived') list = state.archivedContacts;
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        list = list.filter(c =>
          c.firstName?.toLowerCase().includes(q) ||
          c.lastName?.toLowerCase().includes(q) ||
          c.email?.toLowerCase().includes(q) ||
          c.company?.toLowerCase().includes(q)
        );
      }
      if (state.activeLabel) {
        list = list.filter(c => {
          try {
            const labels = JSON.parse(c.labels || '[]');
            return labels.includes(state.activeLabel);
          } catch { return false; }
        });
      }
      return list;
    },
  },

  actions: {
    async refresh() {
      this.loading = true;
      this.error = null;
      try {
        const res = await contactAPI.getAll();
        this.contacts = res.data || [];
      } catch (e) {
        this.error = e?.data?.message || '加载联系人失败';
      } finally {
        this.loading = false;
      }
    },

    async fetchArchived() {
      try {
        const res = await contactAPI.getArchived();
        this.archivedContacts = res.data || [];
      } catch (e) {
        this.error = e?.data?.message || '加载归档联系人失败';
      }
    },

    async search(q) {
      this.searchQuery = q;
      if (!q) return this.refresh();
      this.loading = true;
      try {
        const res = await contactAPI.searchContacts(q);
        this.contacts = res.data || [];
      } catch (e) {
        this.error = e?.data?.message || '搜索失败';
      } finally {
        this.loading = false;
      }
    },

    async getContact(id) {
      this.loading = true;
      try {
        const res = await contactAPI.getContact(id);
        this.current = res.data;
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '获取联系人失败';
      } finally {
        this.loading = false;
      }
    },

    async createContact(data) {
      this.loading = true;
      try {
        const res = await contactAPI.createContact(data);
        this.contacts.unshift(res.data);
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '创建联系人失败';
        throw e;
      } finally {
        this.loading = false;
      }
    },

    async updateContact(id, data) {
      this.loading = true;
      try {
        const res = await contactAPI.updateContact(id, data);
        const idx = this.contacts.findIndex(c => c.id === id);
        if (idx >= 0) this.contacts[idx] = res.data;
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '更新联系人失败';
        throw e;
      } finally {
        this.loading = false;
      }
    },

    async deleteContact(id) {
      try {
        await contactAPI.deleteContact(id);
        this.contacts = this.contacts.filter(c => c.id !== id);
      } catch (e) {
        this.error = e?.data?.message || '删除联系人失败';
        throw e;
      }
    },

    async toggleStar(id) {
      try {
        const res = await contactAPI.toggleStar(id);
        const idx = this.contacts.findIndex(c => c.id === id);
        if (idx >= 0) this.contacts[idx] = res.data;
      } catch (e) {
        this.error = e?.data?.message || '操作失败';
      }
    },

    async archiveContact(id) {
      try {
        await contactAPI.archiveContact(id);
        this.contacts = this.contacts.filter(c => c.id !== id);
      } catch (e) {
        this.error = e?.data?.message || '归档失败';
      }
    },

    async restoreContact(id) {
      try {
        await contactAPI.restoreContact(id);
        this.archivedContacts = this.archivedContacts.filter(c => c.id !== id);
      } catch (e) {
        this.error = e?.data?.message || '恢复失败';
      }
    },
  },
});
