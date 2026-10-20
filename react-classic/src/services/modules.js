import api from './api';

export const authAPI = {
  login: (data) => api.post('/auth/login', data),
  register: (data) => api.post('/auth/register', data),
  getMe: () => api.get('/auth/me'),
  refresh: (refreshToken) => api.post('/auth/refresh', { refreshToken }),
};

export const chatAPI = {
  getConversations: () => api.get('/chat/conversations'),
  getMessages: (conversationId, params) => api.get(`/chat/conversations/${conversationId}/messages`, params),
  createDirectConversation: (data) => api.post('/chat/conversations/direct', data),
  createGroupConversation: (data) => api.post('/chat/conversations/group', data),
  sendMessage: (conversationId, data) => api.post(`/chat/conversations/${conversationId}/messages`, data),
  markRead: (conversationId) => api.post(`/chat/conversations/${conversationId}/read`),
};

export const calendarAPI = {
  getEvents: (params) => api.get('/calendar/events', params),
  createEvent: (data) => api.post('/calendar/events', data),
  updateEvent: (id, data) => api.put(`/calendar/events/${id}`, data),
  deleteEvent: (id) => api.delete(`/calendar/events/${id}`),
  getReminders: () => api.get('/calendar/reminders'),
  createReminder: (data) => api.post('/calendar/reminders', data),
  deleteReminder: (id) => api.delete(`/calendar/reminders/${id}`),
};

const folderEndpoint = (folder) => {
  const map = { INBOX: 'inbox', SENT: 'sent', DRAFTS: 'drafts', TRASH: 'trash', SPAM: 'spam', ARCHIVE: 'archive' };
  return map[folder] || 'inbox';
};

export const emailAPI = {
  getEmails: (folder, params) => api.get(`/emails/${folderEndpoint(folder)}`, params),
  sendEmail: (data) => api.post('/emails', data),
  markRead: (id, read) => api.put(`/emails/${id}/read`, null, { params: { read } }),
  markStar: (id) => api.put(`/emails/${id}/star`),
  moveToFolder: (id, folder) => api.put(`/emails/${id}/move`, null, { params: { folder } }),
  deleteEmail: (id) => api.delete(`/emails/${id}`),
};

export const taskAPI = {
  getTasks: (params) => api.get('/tasks', params),
  createTask: (data) => api.post('/tasks', data),
  updateTask: (id, data) => api.put(`/tasks/${id}`, data),
  deleteTask: (id) => api.delete(`/tasks/${id}`),
  updateStatus: (id, status) => api.patch(`/tasks/${id}/status`, { status }),
  updateProgress: (id, progress) => api.patch(`/tasks/${id}/progress`, { progress }),
};

export const boardAPI = {
  getBoards: () => api.get('/boards'),
  getBoard: (id) => api.get(`/boards/${id}`),
  createBoard: (data) => api.post('/boards', data),
  updateBoard: (id, data) => api.put(`/boards/${id}`, data),
  deleteBoard: (id) => api.delete(`/boards/${id}`),
  getColumns: (boardId) => api.get(`/boards/${boardId}/columns`),
  createColumn: (boardId, data) => api.post(`/boards/${boardId}/columns`, data),
  updateColumn: (boardId, columnId, data) => api.put(`/boards/${boardId}/columns/${columnId}`, data),
  deleteColumn: (boardId, columnId) => api.delete(`/boards/${boardId}/columns/${columnId}`),
  reorderColumns: (boardId, columnIds) => api.put(`/boards/${boardId}/columns/reorder`, { columnIds }),
  getCards: (boardId) => api.get(`/boards/${boardId}/cards`),
  getColumnCards: (boardId, columnId) => api.get(`/boards/${boardId}/columns/${columnId}/cards`),
  createCard: (boardId, columnId, data) => api.post(`/boards/${boardId}/columns/${columnId}/cards`, data),
  updateCard: (id, data) => api.put(`/cards/${id}`, data),
  deleteCard: (id) => api.delete(`/cards/${id}`),
  moveCard: (cardId, data) => api.post(`/cards/${cardId}/move`, data),
  reorderCards: (boardId, columnId, cardIds) => api.put(`/boards/${boardId}/columns/${columnId}/cards/reorder`, { cardIds }),
};

export const contactAPI = {
  getContacts: (params) => api.get('/contacts', params),
  getContact: (id) => api.get(`/contacts/${id}`),
  getFavorites: () => api.get('/contacts', { params: { filter: 'starred' } }),
  getArchived: () => api.get('/contacts', { params: { filter: 'archived' } }),
  getAll: () => api.get('/contacts', { params: { filter: 'all' } }),
  searchContacts: (q) => api.get('/contacts/search', { params: { q } }),
  getByLabel: (label) => api.get(`/contacts/label/${encodeURIComponent(label)}`),
  createContact: (data) => api.post('/contacts', data),
  updateContact: (id, data) => api.put(`/contacts/${id}`, data),
  deleteContact: (id) => api.delete(`/contacts/${id}`),
  toggleStar: (id) => api.put(`/contacts/${id}/star`),
  archiveContact: (id) => api.put(`/contacts/${id}/archive`),
  restoreContact: (id) => api.put(`/contacts/${id}/restore`),
  blockContact: (id) => api.put(`/contacts/${id}/block`),
  unblockContact: (id) => api.put(`/contacts/${id}/unblock`),
  addLabel: (id, label) => api.post(`/contacts/${id}/labels`, { label }),
  removeLabel: (id, label) => api.delete(`/contacts/${id}/labels/${label}`),
};

export const fileAPI = {
  getFiles: (params) => api.get('/files', params),
  getFile: (id) => api.get(`/files/${id}`),
  getStarred: () => api.get('/files/starred'),
  getTrash: () => api.get('/files/trash'),
  getFolders: () => api.get('/files/folders'),
  upload: (formData) => api.post('/files/upload', formData),
  download: (id) => api.get(`/files/${id}/download`),
  star: (id) => api.put(`/files/${id}/star`),
  trash: (id) => api.put(`/files/${id}/trash`),
  restore: (id) => api.put(`/files/${id}/restore`),
  delete: (id) => api.delete(`/files/${id}`),
  move: (id, folder) => api.put(`/files/${id}/move`, { folder }),
  rename: (id, name) => api.put(`/files/${id}/rename`, { name }),
};

export const galleryAPI = {
  getCategories: () => api.get('/gallery/categories'),
  createCategory: (data) => api.post('/gallery/categories', data),
  updateCategory: (id, data) => api.put(`/gallery/categories/${id}`, data),
  deleteCategory: (id) => api.delete(`/gallery/categories/${id}`),
  getMedia: (categoryId) => api.get('/gallery/media', categoryId ? { categoryId } : {}),
  assignMedia: (categoryId, fileId) => api.post('/gallery/media', null, { params: { categoryId, fileId } }),
  removeMedia: (fileId) => api.delete(`/gallery/media/${fileId}`),
};

export const blogAPI = {
  getPosts: (params) => api.get('/blog/posts', params),
  getPost: (idOrSlug) => api.get(`/blog/posts/${idOrSlug}`),
  getPostById: (id) => api.get(`/blog/posts/id/${id}`),
  createPost: (data) => api.post('/blog/posts', data),
  updatePost: (id, data) => api.put(`/blog/posts/${id}`, data),
  deletePost: (id) => api.delete(`/blog/posts/${id}`),
  publish: (id) => api.put(`/blog/posts/${id}/publish`),
  archive: (id) => api.put(`/blog/posts/${id}/archive`),
};

export const invoiceAPI = {
  getInvoices: (params) => api.get('/invoices', params),
  getInvoice: (id) => api.get(`/invoices/${id}`),
  getInvoiceItems: (id) => api.get(`/invoices/${id}/items`),
  createInvoice: (data) => api.post('/invoices', data),
  updateInvoice: (id, data) => api.put(`/invoices/${id}`, data),
  deleteInvoice: (id) => api.delete(`/invoices/${id}`),
  addItem: (id, data) => api.post(`/invoices/${id}/items`, data),
  updateItem: (invoiceId, itemId, data) => api.put(`/invoices/${invoiceId}/items/${itemId}`, data),
  deleteItem: (invoiceId, itemId) => api.delete(`/invoices/${invoiceId}/items/${itemId}`),
  updateStatus: (id, status) => api.put(`/invoices/${id}/status`, null, { params: { status } }),
  archiveInvoice: (id) => api.put(`/invoices/${id}/archive`),
  restoreInvoice: (id) => api.put(`/invoices/${id}/restore`),
  trashInvoice: (id) => api.put(`/invoices/${id}/trash`),
  restoreTrash: (id) => api.put(`/invoices/${id}/restore-trash`),
};

export const integrationAPI = {
  getIntegrations: () => api.get('/integrations'),
  connect: (id) => api.put(`/integrations/${id}/connect`),
  disconnect: (id) => api.put(`/integrations/${id}/disconnect`),
};

export const dashboardAPI = {
  getStats: () => api.get('/dashboard/stats'),
};
