import { defineStore } from 'pinia';
import { fileAPI } from '~/services/modules';

export const useFileStore = defineStore('file', {
  state: () => ({
    files: [],
    folders: [],
    viewMode: 'list',
    currentFolder: '/',
    searchKeyword: '',
    selectedFile: null,
    loading: false,
    error: null,
  }),

  getters: {
    filteredFiles: (state) => {
      let list = [...state.files];
      if (state.searchKeyword) {
        const q = state.searchKeyword.toLowerCase();
        list = list.filter(f => f.name?.toLowerCase().includes(q) || f.originalName?.toLowerCase().includes(q));
      }
      return list;
    },
  },

  actions: {
    async fetchFiles(params) {
      this.loading = true;
      this.error = null;
      try {
        const res = await fileAPI.getFiles(params);
        this.files = res.data || [];
      } catch (e) {
        this.error = e?.data?.message || '加载文件失败';
      } finally {
        this.loading = false;
      }
    },

    async fetchFolders() {
      try {
        const res = await fileAPI.getFolders();
        this.folders = res.data || [];
      } catch (e) {
        this.error = e?.data?.message || '加载文件夹失败';
      }
    },

    async upload(formData) {
      this.loading = true;
      try {
        const res = await fileAPI.upload(formData);
        this.files.unshift(res.data);
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '上传文件失败';
        throw e;
      } finally {
        this.loading = false;
      }
    },

    async star(id) {
      try {
        const res = await fileAPI.star(id);
        const idx = this.files.findIndex(f => f.id === id);
        if (idx >= 0) this.files[idx] = res.data;
      } catch (e) {
        this.error = e?.data?.message || '操作失败';
      }
    },

    async trash(id) {
      try {
        await fileAPI.trash(id);
        this.files = this.files.filter(f => f.id !== id);
      } catch (e) {
        this.error = e?.data?.message || '移入回收站失败';
      }
    },

    async restore(id) {
      try {
        await fileAPI.restore(id);
      } catch (e) {
        this.error = e?.data?.message || '恢复文件失败';
      }
    },

    async deleteFile(id) {
      try {
        await fileAPI.delete(id);
        this.files = this.files.filter(f => f.id !== id);
      } catch (e) {
        this.error = e?.data?.message || '删除文件失败';
      }
    },

    async rename(id, name) {
      try {
        const res = await fileAPI.rename(id, name);
        const idx = this.files.findIndex(f => f.id === id);
        if (idx >= 0) this.files[idx] = res.data;
      } catch (e) {
        this.error = e?.data?.message || '重命名失败';
      }
    },

    async move(id, folder) {
      try {
        const res = await fileAPI.move(id, folder);
        const idx = this.files.findIndex(f => f.id === id);
        if (idx >= 0) this.files[idx] = res.data;
      } catch (e) {
        this.error = e?.data?.message || '移动文件失败';
      }
    },
  },
});
