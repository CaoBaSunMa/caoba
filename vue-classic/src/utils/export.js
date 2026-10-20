// 联系人导出/导入/打印等工具函数
export function parseLabels(labels) {
  if (!labels) return [];
  try {
    const arr = typeof labels === 'string' ? JSON.parse(labels) : labels;
    return Array.isArray(arr) ? arr : [];
  } catch (e) {
    return [];
  }
}

export function fullName(c) {
  return [c.firstName, c.lastName].filter(Boolean).join(' ');
}

// 将联系人导出为 CSV 并触发下载
export function exportContactsCSV(contacts, filename = '联系人列表.csv') {
  const header = ['姓名', '邮箱', '电话', '公司', '职位', '标签', '创建时间'];
  const rows = contacts.map((c) => [
    fullName(c),
    c.email || '',
    c.phone || '',
    c.company || '',
    c.position || '',
    parseLabels(c.labels).join('、'),
    c.createdAt ? new Date(c.createdAt).toLocaleDateString('zh-CN') : '',
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

export function mailtoContacts(contacts) {
  const emails = contacts.map((c) => c.email).filter(Boolean);
  if (!emails.length) return;
  window.location.href = `mailto:${emails.join(';')}?subject=来自%20caoba%20的联系`;
}

// 解析简易 CSV（跳过表头行，仅按逗号切分），返回可导入的联系人数组
export function parseContactCSV(text) {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
    .slice(0, 200);
  const result = [];
  lines.forEach((line, idx) => {
    if (idx === 0 && /姓名|邮箱|email|name/i.test(line)) return; // 跳过表头
    const cols = line.split(',').map((v) => v.replace(/^"|"$/g, '').trim());
    const [name = '', email = '', phone = '', company = ''] = cols;
    if (!name && !email) return;
    result.push({ firstName: name, lastName: '', email, phone, company, labels: '[]' });
  });
  return result;
}
