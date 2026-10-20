import { defineStore } from 'pinia';
import { galleryAPI, fileAPI } from '@/services/modules';

function ext(name = '') {
  const m = /\.([a-zA-Z0-9]+)$/.exec(name);
  return m ? m[1].toLowerCase() : '';
}

const IMG = new Set(['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'bmp', 'ico']);
const VID = new Set(['mp4', 'mov', 'avi', 'mkv', 'webm', 'flv']);
const AUD = new Set(['mp3', 'wav', 'flac', 'ogg', 'm4a', 'aac']);

export const useGalleryStore = defineStore('gallery', {
  state: () => ({
    categories: [],
    media: [],
    categoryId: null,      // null = 全部
    activeView: 'gallery', // gallery | collections | shared | starred | trash
    typeFilter: 'all',     // all | image | video | audio
    keyword: '',
    loading: false,
    error: null,
    editingCategory: null, // AddCategory 重命名目标
    blobMap: {},           // fileId -> blobUrl（失败记 -1）
  }),
  getters: {
    visibleMedia(state) {
      let list = state.media;
      if (state.activeView === 'starred') list = list.filter(f => f.isStarred);
      if (state.activeView === 'trash') list = list.filter(f => f.isDeleted);
      if (state.typeFilter === 'image') list = list.filter(f => IMG.has(ext(this.displayName(f))));
      else if (state.typeFilter === 'video') list = list.filter(f => VID.has(ext(this.displayName(f))));
      else if (state.typeFilter === 'audio') list = list.filter(f => AUD.has(ext(this.displayName(f))));
      if (state.keyword) {
        const kw = state.keyword.toLowerCase();
        list = list.filter(f => this.displayName(f).toLowerCase().includes(kw));
      }
      return list;
    },
    mediaGroups() {
      const groupsMap = new Map();
      for (const f of this.visibleMedia) {
        const label = this.groupLabel(f.createdAt || f.updatedAt);
        if (!groupsMap.has(label)) groupsMap.set(label, []);
        groupsMap.get(label).push(f);
      }
      const order = ['最近分配', '7月', '8月', '9月', '10月', '11月', '12月', '更早'];
      const sorted = [...groupsMap.entries()].sort((a, b) => {
        const ia = order.indexOf(a[0]);
        const ib = order.indexOf(b[0]);
        return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
      });
      return sorted.map(([label, items], i) => ({
        date: label,
        collapseId: 'media_group_' + i,
        images: items,
      }));
    },
  },
  actions: {
    // ---- API ----
    async loadCategories() {
      try {
        const res = await galleryAPI.getCategories();
        this.categories = res.data ?? [];
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        console.error('[gallery] loadCategories failed:', err);
      }
    },
    async loadMedia(categoryId) {
      this.loading = true;
      this.error = null;
      try {
        const cid = categoryId !== undefined ? categoryId : this.categoryId;
        const res = await galleryAPI.getMedia(cid);
        this.media = res.data ?? [];
        if (cid !== undefined) this.categoryId = cid;
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        console.error('[gallery] loadMedia failed:', err);
      } finally {
        this.loading = false;
      }
    },
    async loadAll() {
      await this.loadCategories();
      await this.loadMedia();
    },
    async createCategory(name) {
      const res = await galleryAPI.createCategory({ name });
      await this.loadCategories();
      return res.data;
    },
    async updateCategory(id, name) {
      const res = await galleryAPI.updateCategory(id, { name });
      await this.loadCategories();
      return res.data;
    },
    async deleteCategory(id) {
      await galleryAPI.deleteCategory(id);
      if (this.categoryId === id) this.categoryId = null;
      await this.loadCategories();
    },
    async removeMedia(fileId) {
      await galleryAPI.removeMedia(fileId);
      await this.loadMedia();
    },
    async toggleStar(file) {
      await fileAPI.star(file.id);
      const target = this.media.find(f => f.id === file.id);
      if (target) target.isStarred = !target.isStarred;
    },
    /** 上传图片并关联到当前（或首个）分类 */
    async uploadMedia(file) {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('folder', '/图库');
      const res = await fileAPI.upload(fd);
      const uploaded = res.data ?? res;
      let catId = this.categoryId;
      if (!catId) {
        // 自动选择首个分类，保证图库视图可见
        await this.loadCategories();
        catId = this.categories[0]?.id ?? null;
      }
      if (catId) {
        await galleryAPI.assignMedia(catId, uploaded.id);
      } else {
        const created = await galleryAPI.createCategory({ name: '我的图片' });
        await galleryAPI.assignMedia(created.data.id, uploaded.id);
        await this.loadCategories();
      }
      await this.loadMedia();
      return uploaded;
    },
    // ---- UI ----
    selectCategory(id) {
      this.categoryId = id;
      if (id) this.activeView = 'collections';
      this.loadMedia(id);
    },
    setView(view) {
      this.activeView = view;
      this.keyword = '';
      this.loadMedia(view === 'collections' ? (this.categoryId || null) : null);
    },
    setTypeFilter(t) {
      this.typeFilter = t;
    },
    setKeyword(k) {
      this.keyword = k || '';
    },
    async getBlobUrl(file) {
      if (this.blobMap[file.id] !== undefined) return this.blobMap[file.id] === -1 ? null : this.blobMap[file.id];
      if (file.onDisk === false) {
        this.blobMap[file.id] = -1;
        return null;
      }
      try {
        const blob = await fileAPI.download(file.id);
        if (!blob || !(blob instanceof Blob) || blob.size === 0) throw new Error('empty');
        this.blobMap[file.id] = URL.createObjectURL(blob);
        return this.blobMap[file.id];
      } catch (err) {
        this.blobMap[file.id] = -1;
        return null;
      }
    },
    displayName(file) {
      return file?.originalName || file?.name || '未命名';
    },
    mediaType(file) {
      const e = ext(this.displayName(file));
      if (IMG.has(e)) return 'image';
      if (VID.has(e)) return 'video';
      if (AUD.has(e)) return 'audio';
      return 'doc';
    },
    groupLabel(dateStr) {
      if (!dateStr) return '更早';
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return '更早';
      const today = new Date();
      if (today - d < 7 * 86400000) return '最近分配';
      return ['', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'][d.getMonth()] + ' ' + d.getFullYear();
    },
  },
});