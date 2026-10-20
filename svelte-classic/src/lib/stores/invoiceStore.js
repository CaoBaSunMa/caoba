import { writable } from 'svelte/store';
import { invoiceAPI } from '../services/modules';

function createInvoiceStore() {
  const { subscribe, set, update } = writable({
    invoices: [],
    loading: false,
    error: null,
    filter: 'all',
  });

  return {
    subscribe,

    async fetchInvoices(params) {
      update(s => ({ ...s, loading: true, error: null }));
      try {
        const res = await invoiceAPI.getInvoices(params);
        update(s => ({ ...s, invoices: res.data || [], loading: false }));
      } catch (e) {
        update(s => ({ ...s, loading: false, error: e?.data?.message || '加载发票失败' }));
      }
    },

    async createInvoice(data) {
      const res = await invoiceAPI.createInvoice(data);
      update(s => ({ ...s, invoices: [res.data, ...s.invoices] }));
      return res.data;
    },

    async updateInvoice(id, data) {
      const res = await invoiceAPI.updateInvoice(id, data);
      update(s => ({ ...s, invoices: s.invoices.map(i => i.id === id ? res.data : i) }));
      return res.data;
    },

    async deleteInvoice(id) {
      await invoiceAPI.deleteInvoice(id);
      update(s => ({ ...s, invoices: s.invoices.filter(i => i.id !== id) }));
    },

    async updateStatus(id, status) {
      const res = await invoiceAPI.updateStatus(id, status);
      update(s => ({ ...s, invoices: s.invoices.map(i => i.id === id ? res.data : i) }));
    },
  };
}

export const invoiceStore = createInvoiceStore();
