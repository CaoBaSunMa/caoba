import { defineStore } from 'pinia';

const KEY = 'caoba.invoice-draft.v1';

export function formatDate(d) {
  const dt = d ? new Date(d) : new Date();
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, '0');
  const day = String(dt.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function currencySymbol(code) {
  return { CNY: '¥', USD: '$', INR: '₹' }[code] || '¥';
}

function newItem() {
  return {
    id: 'i' + Date.now() + Math.random().toString(36).slice(2, 7),
    title: '',
    description: '',
    quantity: 1,
    price: 0,
    discount: 0,
    discountType: 'per',
    totalPrice: 0,
  };
}

function defaultDraft() {
  const today = formatDate(new Date());
  return {
    id: null, // 后端发票 id（编辑已有发票时非空）
    kind: 'invoice', // invoice | estimate
    status: 'DRAFT',
    invoiceNumber: 'INV-' + today.replace(/-/g, ''),
    issueDate: today,
    dueDate: '签收即付',
    clientCode: '',
    client: {
      company: '超级新星咨询',
      email: 'thompson_peter@super.co',
      address1: 'Sycamore Street',
      address2: 'San Antonio Valley, CA 34668',
    },
    merchant: {
      company: 'caoba',
      email: 'caoba_01@caoba.com',
      address1: '4747, Pearl Street',
      address2: 'Rainy Day Drive, Washington DC 42156',
    },
    shipto: {
      company: '',
      address: '',
      city: '',
      zip: '',
      state: '',
      country: '',
      gstin: '',
    },
    items: [
      {
        id: 'i' + Date.now(),
        title: '重新设计 agencyclick.com',
        description: '这是我的项目描述。如果行内放不下一整句话，文字区域会自动增大以便完整显示。',
        quantity: 1,
        price: 150,
        discount: 2,
        discountType: 'per',
        totalPrice: 147,
      },
    ],
    terms: [
      { id: 't' + Date.now(), conditon: '请在发票开具之日起 15 天内付款，逾期未付将按 14% 的年利率收取逾期利息。' },
      { id: 't' + (Date.now() + 1), conditon: '汇款时请注明发票编号。' },
    ],
    extraDiscount: { value: 0, type: 'cur' },
    notes: '',
    memo: '',
    tags: ['凯瑟琳·泽塔·琼斯', 'caoba 联合创始人'],
    extraFields: [],
    signature: '',
    template: '标准',
    settings: {
      currency: 'CNY',
      symbol: '¥',
      font: 'Arial',
      fontSize: '16px',
      align: 'left',
      accentColor: '#007D88',
      headingColor: '#1F2327',
      textColor: '#646A71',
      scheduleSend: '',
    },
  };
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultDraft();
    const parsed = JSON.parse(raw);
    const d = defaultDraft();
    return { ...d, ...parsed, client: { ...d.client, ...(parsed.client || {}) }, merchant: { ...d.merchant, ...(parsed.merchant || {}) }, settings: { ...d.settings, ...(parsed.settings || {}) }, shipto: { ...d.shipto, ...(parsed.shipto || {}) }, extraDiscount: { ...d.extraDiscount, ...(parsed.extraDiscount || {}) } };
  } catch (e) {
    return defaultDraft();
  }
}

export const useInvoiceDraftStore = defineStore('invoiceDraft', {
  state: () => ({
    draft: load(),
  }),
  getters: {
    isEstimate: (state) => state.draft.kind === 'estimate',
    title: (state) => (state.draft.kind === 'estimate' ? '估算单' : '发票'),
    symbol: (state) => currencySymbol(state.draft.settings.currency),
    subtotal(state) {
      return state.draft.items.reduce((sum, it) => sum + (Number(it.totalPrice) || 0), 0);
    },
    itemDiscountTotal(state) {
      return state.draft.items.reduce((sum, it) => {
        if (it.discountType === 'cur') return sum + (Number(it.discount) || 0);
        const gross = (Number(it.price) || 0) * (Number(it.quantity) || 0);
        return sum + (gross * (Number(it.discount) || 0)) / 100;
      }, 0);
    },
    grossTotal(state) {
      return state.draft.items.reduce((sum, it) => sum + (Number(it.totalPrice) || 0), 0);
    },
    extraDiscountAmount(state) {
      const d = state.draft.extraDiscount || { value: 0, type: 'cur' };
      if (d.type === 'per') {
        const gross = state.draft.items.reduce((sum, it) => sum + (Number(it.totalPrice) || 0), 0);
        return (gross * (Number(d.value) || 0)) / 100;
      }
      return Number(d.value) || 0;
    },
    grandTotal(state) {
      const subtotal = state.draft.items.reduce((sum, it) => sum + (Number(it.totalPrice) || 0), 0);
      const d = state.draft.extraDiscount || { value: 0, type: 'cur' };
      let extra = 0;
      if (d.type === 'per') {
        extra = (subtotal * (Number(d.value) || 0)) / 100;
      } else {
        extra = Number(d.value) || 0;
      }
      return Math.max(0, subtotal - extra);
    },
  },
  actions: {
    persist() {
      localStorage.setItem(KEY, JSON.stringify(this.draft));
    },
    reset() {
      this.draft = defaultDraft();
      this.persist();
    },
    patch(partial) {
      this.draft = { ...this.draft, ...partial };
      this.persist();
    },
    setKind(kind) {
      this.draft.kind = kind;
      if (kind === 'estimate') {
        this.draft.invoiceNumber = 'EST-' + this.draft.invoiceNumber.replace(/^INV-/, '');
      } else {
        this.draft.invoiceNumber = 'INV-' + this.draft.invoiceNumber.replace(/^EST-/, '');
      }
      this.persist();
    },
    addItem() {
      this.draft.items.push(newItem());
      this.persist();
    },
    removeItem(id) {
      this.draft.items = this.draft.items.filter((it) => it.id !== id);
      this.persist();
    },
    addTerm() {
      this.draft.terms.push({ id: 't' + Date.now() + Math.random().toString(36).slice(2, 5), conditon: '' });
      this.persist();
    },
    removeTerm(id) {
      this.draft.terms = this.draft.terms.filter((t) => t.id !== id);
      this.persist();
    },
    addExtraField() {
      this.draft.extraFields.push({ id: 'e' + Date.now(), label: '', value: '' });
      this.persist();
    },
    removeExtraField(id) {
      this.draft.extraFields = this.draft.extraFields.filter((f) => f.id !== id);
      this.persist();
    },
    addTag(tag) {
      if (tag && !this.draft.tags.includes(tag)) {
        this.draft.tags.push(tag);
        this.persist();
      }
    },
    removeTag(tag) {
      this.draft.tags = this.draft.tags.filter((t) => t !== tag);
      this.persist();
    },
    recalcItem(index) {
      const it = this.draft.items[index];
      if (!it) return;
      const qty = Number(it.quantity) || 0;
      const price = Number(it.price) || 0;
      const disc = Number(it.discount) || 0;
      const gross = qty * price;
      if (it.discountType === 'cur') {
        it.totalPrice = Math.max(0, gross - disc);
      } else {
        it.totalPrice = Math.max(0, gross - (gross * disc) / 100);
      }
      this.persist();
    },
    setSettings(patch) {
      this.draft.settings = { ...this.draft.settings, ...patch };
      if (patch.currency) {
        this.draft.settings.symbol = currencySymbol(patch.currency);
      }
      this.persist();
    },
  },
});
