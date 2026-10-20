import { defineStore } from 'pinia';
import { invoiceAPI } from '@/services/modules';

const FILTER_LABELS = {
  all: '全部发票',
  sent: '已发送',
  archived: '已归档',
  pending: '待处理',
  deleted: '已删除',
};

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
    filterLabel: (state) => FILTER_LABELS[state.filter] || '全部发票',
    filteredInvoices(state) {
      return state.invoices;
    },
  },
  actions: {
    errorMessage(err) {
      return err.response?.data?.message || err.message || '请求失败';
    },

    setFilter(f) {
      this.filter = f || 'all';
      this.fetchInvoices();
    },

    async fetchInvoices() {
      this.loading = true;
      this.error = null;
      try {
        const params = { filter: this.filter };
        const res = await invoiceAPI.getInvoices(params);
        this.invoices = res.data || [];
      } catch (err) {
        this.error = this.errorMessage(err);
      } finally {
        this.loading = false;
      }
    },

    async fetchInvoice(id) {
      this.loading = true;
      this.error = null;
      try {
        const res = await invoiceAPI.getInvoice(id);
        this.currentInvoice = res.data;
        return res.data;
      } catch (err) {
        this.error = this.errorMessage(err);
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async fetchItems(id) {
      try {
        const res = await invoiceAPI.getInvoiceItems(id);
        this.items = res.data || [];
        return this.items;
      } catch (err) {
        this.error = this.errorMessage(err);
        return [];
      }
    },

    async createInvoice(data) {
      this.loading = true;
      this.error = null;
      try {
        const res = await invoiceAPI.createInvoice(data);
        const created = res.data;
        if (this.filter === 'all' || this.filter === 'pending') {
          this.invoices.unshift(created);
        }
        return created;
      } catch (err) {
        this.error = this.errorMessage(err);
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async updateInvoice(id, data) {
      this.loading = true;
      this.error = null;
      try {
        const res = await invoiceAPI.updateInvoice(id, data);
        const updated = res.data;
        const index = this.invoices.findIndex((inv) => inv.id === id);
        if (index !== -1) this.invoices[index] = updated;
        if (this.currentInvoice?.id === id) this.currentInvoice = updated;
        return updated;
      } catch (err) {
        this.error = this.errorMessage(err);
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async deleteInvoice(id) {
      this.loading = true;
      this.error = null;
      try {
        await invoiceAPI.deleteInvoice(id);
        if (this.filter !== 'deleted') {
          this.invoices = this.invoices.filter((inv) => inv.id !== id);
        }
      } catch (err) {
        this.error = this.errorMessage(err);
        throw err;
      } finally {
        this.loading = false;
      }
    },

    /* 行内状态/归档相关动作 */
    async updateStatus(id, status) {
      const res = await invoiceAPI.updateStatus(id, status);
      this.applyLocal(res.data);
      return res.data;
    },

    async toggleArchive(row) {
      const res = row.archived
        ? await invoiceAPI.restoreInvoice(row.id)
        : await invoiceAPI.archiveInvoice(row.id);
      this.applyLocal(res.data);
      if (this.filter === 'archived' || this.filter === 'all') {
        if (this.filter === 'archived') {
          // 在归档视图里取消归档后移出列表
          this.invoices = this.invoices.filter((inv) => inv.id !== row.id);
        } else {
          this.applyLocal(res.data);
        }
      }
      return res.data;
    },

    async softDelete(row) {
      const res = await invoiceAPI.trashInvoice(row.id);
      if (this.filter !== 'deleted') {
        this.invoices = this.invoices.filter((inv) => inv.id !== row.id);
      }
      return res.data;
    },

    async restoreFromTrash(row) {
      const res = await invoiceAPI.restoreTrash(row.id);
      if (this.filter === 'deleted') {
        this.invoices = this.invoices.filter((inv) => inv.id !== row.id);
      }
      return res.data;
    },

    async permanentDelete(row) {
      await invoiceAPI.deleteInvoice(row.id);
      this.invoices = this.invoices.filter((inv) => inv.id !== row.id);
    },

    applyLocal(updated) {
      const index = this.invoices.findIndex((inv) => inv.id === updated.id);
      if (index !== -1) this.invoices.splice(index, 1, updated);
      if (this.currentInvoice?.id === updated.id) this.currentInvoice = updated;
    },

    /* 保存发票（含项目同步），供创建/编辑页调用 */
    async saveInvoice(draft) {
      const payload = {
        invoiceNumber: draft.invoiceNumber,
        clientName: draft.client.company,
        clientEmail: draft.client.email,
        clientCode: draft.clientCode,
        clientAddress: [draft.client.address1, draft.client.address2].filter(Boolean).join(', '),
        currency: draft.settings.currency,
        dueDate: draft.dueDate && draft.dueDate !== '签收即付' ? draft.dueDate : null,
        issueDate: draft.issueDate || null,
        notes: draft.notes,
        memo: draft.memo,
        tags: JSON.stringify(draft.tags || []),
        terms: (draft.terms || []).map((t) => t.conditon).filter(Boolean).join('\n'),
        template: draft.template,
        kind: draft.kind === 'estimate' ? 'ESTIMATE' : 'INVOICE',
        status: draft.status || 'DRAFT',
        subtotal: Number(draft.subtotal) || 0,
        discount: Number(draft.discount) || 0,
        tax: Number(draft.tax) || 0,
      };

      let invoice;
      if (draft.id) {
        invoice = await this.updateInvoice(draft.id, payload);
        // 同步项目：清空重写
        const existingItems = await this.fetchItems(draft.id);
        for (const it of existingItems) {
          await invoiceAPI.deleteItem(draft.id, it.id);
        }
      } else {
        invoice = await this.createInvoice(payload);
      }

      const items = draft.items.filter((it) => it.title || it.description);
      for (const it of items) {
        await invoiceAPI.addItem(invoice.id, {
          title: it.title,
          description: it.description,
          quantity: Number(it.quantity) || 0,
          unitPrice: Number(it.price) || 0,
          discount: Number(it.discount) || 0,
          discountType: it.discountType === 'cur' ? 'cur' : 'per',
        });
      }
      // 保存后重载发票与其最新金额
      await this.fetchInvoice(invoice.id);
      await this.fetchItems(invoice.id);
      return invoice;
    },

    /* 周期性发票：以首条发票为模板批量生成草稿 */
    async createRecurring(frequency, months) {
      const source = this.invoices[0];
      if (!source) throw new Error('暂无发票数据');
      const intervals = { 每周: 7, 每月: 30, 每季度: 91 };
      const days = intervals[frequency] || 30;
      const created = [];
      let number = source.invoiceNumber;
      for (let i = 1; i <= months; i++) {
        number = number.replace(/-\d+$/, '') + '-' + (parseInt(number.split('-').pop() || '0', 10) + i);
        const base = new Date();
        base.setDate(base.getDate() + days * i);
        const due = new Date(base);
        due.setDate(due.getDate() + 30);
        const res = await invoiceAPI.createInvoice({
          invoiceNumber: number + '-R' + i,
          clientName: source.clientName,
          clientEmail: source.clientEmail,
          clientCode: source.clientCode,
          status: 'DRAFT',
          subtotal: source.subtotal,
          discount: source.discount,
          tax: source.tax,
          total: source.total,
          currency: source.currency || 'CNY',
          issueDate: base.toISOString().slice(0, 10),
          dueDate: due.toISOString().slice(0, 10),
          notes: '周期性发票（' + frequency + '）第 ' + i + ' 期',
          template: source.template,
          kind: source.kind === 'ESTIMATE' ? 'ESTIMATE' : 'INVOICE',
        });
        created.push(res.data);
      }
      return created;
    },
  },
});