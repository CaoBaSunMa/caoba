import { defineStore } from 'pinia';
import { invoiceAPI } from '~/services/modules';

export const useInvoiceStore = defineStore('invoice', {
  state: () => ({
    invoices: [],
    currentInvoice: null,
    items: [],
    filter: 'all',
    loading: false,
    error: null,
  }),

  getters: {
    filteredInvoices: (state) => {
      let list = [...state.invoices];
      if (state.filter === 'paid') list = list.filter(i => i.status === 'PAID');
      if (state.filter === 'pending') list = list.filter(i => i.status === 'SENT');
      if (state.filter === 'overdue') list = list.filter(i => i.status === 'OVERDUE');
      if (state.filter === 'draft') list = list.filter(i => i.status === 'DRAFT');
      return list;
    },
    totalAmount: (state) => state.invoices.reduce((sum, i) => sum + (parseFloat(i.total) || 0), 0),
  },

  actions: {
    async fetchInvoices(params) {
      this.loading = true;
      this.error = null;
      try {
        const res = await invoiceAPI.getInvoices(params);
        this.invoices = res.data || [];
      } catch (e) {
        this.error = e?.data?.message || '加载发票失败';
      } finally {
        this.loading = false;
      }
    },

    async getInvoice(id) {
      this.loading = true;
      try {
        const res = await invoiceAPI.getInvoice(id);
        this.currentInvoice = res.data;
        const itemsRes = await invoiceAPI.getInvoiceItems(id);
        this.items = itemsRes.data || [];
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '获取发票详情失败';
      } finally {
        this.loading = false;
      }
    },

    async createInvoice(data) {
      this.loading = true;
      try {
        const res = await invoiceAPI.createInvoice(data);
        this.invoices.unshift(res.data);
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '创建发票失败';
        throw e;
      } finally {
        this.loading = false;
      }
    },

    async updateInvoice(id, data) {
      this.loading = true;
      try {
        const res = await invoiceAPI.updateInvoice(id, data);
        const idx = this.invoices.findIndex(i => i.id === id);
        if (idx >= 0) this.invoices[idx] = res.data;
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '更新发票失败';
        throw e;
      } finally {
        this.loading = false;
      }
    },

    async deleteInvoice(id) {
      try {
        await invoiceAPI.deleteInvoice(id);
        this.invoices = this.invoices.filter(i => i.id !== id);
      } catch (e) {
        this.error = e?.data?.message || '删除发票失败';
      }
    },

    async updateStatus(id, status) {
      try {
        const res = await invoiceAPI.updateStatus(id, status);
        const idx = this.invoices.findIndex(i => i.id === id);
        if (idx >= 0) this.invoices[idx] = res.data;
      } catch (e) {
        this.error = e?.data?.message || '更新状态失败';
      }
    },

    async addItem(invoiceId, data) {
      try {
        const res = await invoiceAPI.addItem(invoiceId, data);
        this.items.push(res.data);
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '添加项目失败';
        throw e;
      }
    },

    async updateItem(invoiceId, itemId, data) {
      try {
        const res = await invoiceAPI.updateItem(invoiceId, itemId, data);
        const idx = this.items.findIndex(i => i.id === itemId);
        if (idx >= 0) this.items[idx] = res.data;
      } catch (e) {
        this.error = e?.data?.message || '更新项目失败';
      }
    },

    async deleteItem(invoiceId, itemId) {
      try {
        await invoiceAPI.deleteItem(invoiceId, itemId);
        this.items = this.items.filter(i => i.id !== itemId);
      } catch (e) {
        this.error = e?.data?.message || '删除项目失败';
      }
    },
  },
});
