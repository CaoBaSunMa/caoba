import { defineStore } from 'pinia';
import { contactAPI } from '@/services/modules';

// 默认标签池（可随时新增）
const LABEL_POOL = ['协作者', '设计师', 'React 开发', '促销', '广告'];

// 解析后端 labels 字段（JSON 数组字符串）
function parseLabels(labels) {
  if (!labels) return [];
  try {
    const arr = typeof labels === 'string' ? JSON.parse(labels) : labels;
    return Array.isArray(arr) ? arr : [];
  } catch (e) {
    return [];
  }
}

export const useContactStore = defineStore('contact', {
  state: () => ({
    contacts: [],
    archivedContacts: [],
    customLabels: [...LABEL_POOL],
    loading: false,
    error: null,
    searchQuery: '',
    filter: 'all', // all | starred | archived | label
    activeLabel: null,
    current: null, // 编辑页当前联系人
  }),
  getters: {
    // 全部已知标签（默认池 ∪ 所有联系人标签）
    allLabels(state) {
      const set = new Set(state.customLabels);
      state.contacts.forEach((c) => parseLabels(c.labels).forEach((l) => set.add(l)));
      state.archivedContacts.forEach((c) => parseLabels(c.labels).forEach((l) => set.add(l)));
      return [...set].sort();
    },
    // 标签 -> 数量（仅统计非归档联系人）
    labelCounts(state) {
      const map = {};
      state.contacts.forEach((c) =>
        parseLabels(c.labels).forEach((l) => {
          map[l] = (map[l] || 0) + 1;
        })
      );
      return map;
    },
    // 当前筛选视图下的联系人列表
    filteredContacts(state) {
      if (state.filter === 'starred') {
        return state.contacts.filter((c) => c.starred);
      }
      if (state.filter === 'label' && state.activeLabel) {
        return state.contacts.filter((c) => parseLabels(c.labels).includes(state.activeLabel));
      }
      if (state.filter === 'archived') {
        return [...state.archivedContacts];
      }
      return [...state.contacts];
    },
    starredCount(state) {
      return state.contacts.filter((c) => c.starred).length;
    },
    totalCount(state) {
      return state.contacts.length;
    },
  },
  actions: {
    errorMessage(err) {
      return err.response?.data?.message || err.message || '请求失败';
    },

    async fetchContacts() {
      this.loading = true;
      this.error = null;
      try {
        const res = await contactAPI.getContacts();
        this.contacts = res.data || [];
      } catch (err) {
        this.error = this.errorMessage(err);
      } finally {
        this.loading = false;
      }
    },

    async fetchArchived() {
      this.loading = true;
      this.error = null;
      try {
        const res = await contactAPI.getArchived();
        this.archivedContacts = res.data || [];
      } catch (err) {
        this.error = this.errorMessage(err);
      } finally {
        this.loading = false;
      }
    },

    refresh() {
      if (this.filter === 'archived') return this.fetchArchived();
      return this.fetchContacts();
    },

    setFilter(f) {
      this.filter = f;
      if (f !== 'label') this.activeLabel = null;
      if (f === 'archived' && !this.archivedContacts.length) {
        this.fetchArchived();
      }
    },

    setActiveLabel(label) {
      this.activeLabel = label;
      this.filter = 'label';
    },

    async fetchById(id) {
      this.loading = true;
      this.error = null;
      try {
        const res = await contactAPI.getContact(id);
        this.current = res.data;
        return res.data;
      } catch (err) {
        this.error = this.errorMessage(err);
        throw err;
      } finally {
        this.loading = false;
      }
    },

    // 将更新后的联系人同步到本地列表
    applyUpdate(updated) {
      const i = this.contacts.findIndex((c) => c.id === updated.id);
      if (i !== -1) this.contacts.splice(i, 1, updated);
      else if (this.filter !== 'archived' && !updated.archived && !this.contacts.find((c) => c.id === updated.id)) {
        this.contacts.unshift(updated);
      }
      const a = this.archivedContacts.findIndex((c) => c.id === updated.id);
      if (a !== -1) this.archivedContacts.splice(a, 1, updated);
      if (this.current && this.current.id === updated.id) this.current = updated;
    },

    async createContact(data) {
      this.loading = true;
      this.error = null;
      try {
        const res = await contactAPI.createContact(data);
        this.contacts.unshift(res.data);
        return res.data;
      } catch (err) {
        this.error = this.errorMessage(err);
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async updateContact(id, data) {
      this.loading = true;
      this.error = null;
      try {
        const res = await contactAPI.updateContact(id, data);
        this.applyUpdate(res.data);
        return res.data;
      } catch (err) {
        this.error = this.errorMessage(err);
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async toggleStar(id) {
      const res = await contactAPI.toggleStar(id);
      this.applyUpdate(res.data);
      return res.data;
    },

    async archiveContact(id) {
      const res = await contactAPI.archiveContact(id);
      this.contacts = this.contacts.filter((c) => c.id !== id);
      if (!this.archivedContacts.find((c) => c.id === id)) this.archivedContacts.unshift(res.data);
      if (this.current && this.current.id === id) this.current = res.data;
      return res.data;
    },

    async restoreContact(id) {
      const res = await contactAPI.restoreContact(id);
      this.archivedContacts = this.archivedContacts.filter((c) => c.id !== id);
      if (!this.contacts.find((c) => c.id === id)) this.contacts.unshift(res.data);
      if (this.current && this.current.id === id) this.current = res.data;
      return res.data;
    },

    async blockContact(id) {
      const res = await contactAPI.blockContact(id);
      this.applyUpdate(res.data);
      return res.data;
    },

    async unblockContact(id) {
      const res = await contactAPI.unblockContact(id);
      this.applyUpdate(res.data);
      return res.data;
    },

    async deleteContact(id) {
      await contactAPI.deleteContact(id);
      this.contacts = this.contacts.filter((c) => c.id !== id);
      this.archivedContacts = this.archivedContacts.filter((c) => c.id !== id);
      if (this.current && this.current.id === id) this.current = null;
    },

    async addLabel(id, label) {
      const res = await contactAPI.addLabel(id, label);
      this.applyUpdate(res.data);
      if (!this.customLabels.includes(label)) this.customLabels.push(label);
      return res.data;
    },

    async removeLabel(id, label) {
      const res = await contactAPI.removeLabel(id, label);
      this.applyUpdate(res.data);
      return res.data;
    },

    addLabelName(name) {
      const n = (name || '').trim();
      if (!n) return;
      if (!this.customLabels.includes(n)) this.customLabels.push(n);
    },
  },
});