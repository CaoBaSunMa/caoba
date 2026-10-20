// 发票导出 / 状态映射 等工具函数

export function symbolFor(code) {
  return { CNY: '¥', USD: '$', INR: '₹' }[code] || '¥';
}

export function formatMoney(n, code = 'CNY') {
  const num = Number(n || 0);
  return symbolFor(code) + num.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// 状态徽标映射
export function statusInfo(inv) {
  const s = inv.status;
  if (inv.kind === 'ESTIMATE') {
    return { title: s === 'SENT' ? '估算已发送' : '估算', bg: 'badge-info' };
  }
  switch (s) {
    case 'PAID':
      return { title: '已支付', bg: 'badge-primary' };
    case 'SENT':
      return { title: '已发送', bg: 'badge-info' };
    case 'OVERDUE':
      return { title: '未支付', bg: 'badge-danger', text: '已逾期' };
    default:
      return { title: '草稿', bg: 'badge-light', color: 'dark' };
  }
}

export function activityText(inv) {
  if (inv.kind === 'ESTIMATE') return s(inv.status);
  switch (inv.status) {
    case 'PAID': return '已完成';
    case 'SENT': return '已发送';
    case 'OVERDUE': return '已逾期';
    default: return '-';
  }
  function s(st) {
    return st === 'SENT' ? '已发送' : st === 'PAID' ? '已完成' : '-';
  }
}

export function formatDateStr(v) {
  if (!v) return '-';
  const d = new Date(v);
  if (isNaN(d.getTime())) return v;
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export function exportInvoicesCSV(invoices, filename = '发票列表.csv') {
  const header = ['发票编号', '开票日期', '收票方', '邮箱', '状态', '活动', '金额', '币种', '创建时间'];
  const rows = invoices.map((c) => [
    c.invoiceNumber || '',
    formatDateStr(c.issueDate || c.createdAt),
    c.clientName || '',
    c.clientEmail || '',
    statusInfo(c).title,
    activityText(c),
    Number(c.total || 0),
    c.currency || 'CNY',
    c.createdAt ? formatDateStr(c.createdAt) : '',
  ]);
  const escape = (v) => {
    const s = String(v == null ? '' : v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const csv = [header, ...rows].map((r) => r.map(escape).join(',')).join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function printPage() {
  window.print();
}

export function mailtoInvoice(inv, subject) {
  if (!inv || !inv.clientEmail) return false;
  const sub = encodeURIComponent(subject || `发票 ${inv.invoiceNumber || ''}`);
  const body = encodeURIComponent(
    `您好，\n\n我们向贵司开具了发票 ${inv.invoiceNumber || ''}，金额 ${formatMoney(inv.total, inv.currency)}。\n\n请查收附件。`
  );
  window.location.href = `mailto:${inv.clientEmail}?subject=${sub}&body=${body}`;
  return true;
}