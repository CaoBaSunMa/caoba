import { writable, derived } from 'svelte/store';
import { contactAPI } from '../services/modules';

function createContactStore() {
  const { subscribe, set, update } = writable({
    contacts: [],
    loading: false,
    error: null,
    searchQuery: '',
    filter: 'all',
  });

  return {
    subscribe,

    async fetchContacts(params) {
      update(s => ({ ...s, loading: true, error: null }));
      try {
        const res = await contactAPI.getContacts(params);
        update(s => ({ ...s, contacts: res.data || [], loading: false }));
      } catch (e) {
        update(s => ({ ...s, loading: false, error: e?.data?.message || '加载联系人失败' }));
      }
    },

    async search(q) {
      update(s => ({ ...s, loading: true }));
      try {
        const res = q ? await contactAPI.searchContacts(q) : await contactAPI.getAll();
        update(s => ({ ...s, contacts: res.data || [], loading: false }));
      } catch (e) {
        update(s => ({ ...s, loading: false, error: e?.data?.message }));
      }
    },

    async createContact(data) {
      const res = await contactAPI.createContact(data);
      update(s => ({ ...s, contacts: [res.data, ...s.contacts] }));
      return res.data;
    },

    async updateContact(id, data) {
      const res = await contactAPI.updateContact(id, data);
      update(s => ({ ...s, contacts: s.contacts.map(c => c.id === id ? res.data : c) }));
      return res.data;
    },

    async deleteContact(id) {
      await contactAPI.deleteContact(id);
      update(s => ({ ...s, contacts: s.contacts.filter(c => c.id !== id) }));
    },

    async toggleStar(id) {
      const res = await contactAPI.toggleStar(id);
      update(s => ({ ...s, contacts: s.contacts.map(c => c.id === id ? res.data : c) }));
    },
  };
}

export const contactStore = createContactStore();
