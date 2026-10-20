import { defineStore } from 'pinia';
import { fileAPI } from '@/services/modules';

const VIEW_TITLES = {
  'my-space': '我的空间',
  all: '所有文件',
  folders: '文件夹',
  shared: '共享',
  starred: '星标',
  trash: '回收站',
  images: '图片',
  videos: '视频',
  audio: '音频',
  docs: '文档',
};

const VIEW_FOLDERS = {
  images: '/图片',
  videos: '/视频',
  audio: '/音频',
  docs: '/文档',
};

export const useFileStore = defineStore('file', {
  state: () => ({
    files: [],
    allFiles: [],
    folders: [],
    viewMode: 'my-space',
    currentFolder: '/',
    searchKeyword: '',
    selectedFile: null,
    loading: false,
    error: null,
  }),
  getters: {
    viewTitle: (state) => (
      state.viewMode === 'folder' ? (state.currentFolder || '文件夹') : (VIEW_TITLES[state.viewMode] || '我的空间')
    ),
    currentFolderName: (state) => {
      if (state.viewMode === 'folders') return '所有文件夹';
      return state.currentFolder || '/';
    },
  },
  actions: {
    async fetchFiles(params) {
      this.loading = true;
      this.error = null;
      try {
        const res = await fileAPI.getFiles(params);
        this.files = res.data;
        if (params?.folder) {
          this.currentFolder = params.folder;
        }
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchStarred() {
      this.loading = true;
      this.error = null;
      try {
        const res = await fileAPI.getStarred();
        this.files = res.data;
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchTrash() {
      this.loading = true;
      this.error = null;
      try {
        const res = await fileAPI.getTrash();
        this.files = res.data;
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchFolders() {
      this.loading = true;
      this.error = null;
      try {
        const [folderRes, fileRes] = await Promise.all([
          fileAPI.getFolders(),
          fileAPI.getFiles({}),
        ]);
        this.folders = (folderRes.data || []).filter(Boolean);
        this.files = fileRes.data;
        this.allFiles = fileRes.data;
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
      } finally {
        this.loading = false;
      }
    },

    /** 打开某个文件夹，列出其中文件 */
    async openFolder(folder) {
      this.viewMode = 'folder';
      this.currentFolder = folder;
      this.searchKeyword = '';
      await this.fetchFiles({ folder });
    },

    /** 切换侧栏视图（我的空间/所有文件/文件夹/共享/星标/回收站/图片/视频/音频/文档） */
    async loadView(mode) {
      this.viewMode = mode;
      this.searchKeyword = '';
      if (mode === 'starred') {
        await this.fetchStarred();
      } else if (mode === 'trash') {
        await this.fetchTrash();
      } else if (mode === 'folders') {
        await this.fetchFolders();
      } else if (mode === 'shared') {
        this.files = [];
        this.folders = [];
      } else if (mode === 'my-space' || mode === 'all') {
        await this.fetchFiles({});
        this.allFiles = this.files;
      } else {
        await this.fetchFiles({ folder: VIEW_FOLDERS[mode] });
      }
    },

    async search(keyword) {
      this.searchKeyword = keyword || '';
      if (keyword && keyword.trim()) {
        await this.fetchFiles({ keyword: keyword.trim() });
      } else {
        await this.loadView(this.viewMode);
      }
    },

    selectFile(file) {
      this.selectedFile = file;
    },

    async uploadFile(formData, folder) {
      this.loading = true;
      this.error = null;
      try {
        if (folder && !formData.get('folder')) {
          formData.append('folder', folder);
        }
        await fileAPI.upload(formData);
        // 依据当前视图刷新列表，保证新上传文件出现在正确视图
        await this.loadView(this.viewMode);
        return true;
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async starFile(id) {
      this.loading = true;
      this.error = null;
      try {
        const res = await fileAPI.star(id);
        const index = this.files.findIndex((f) => f.id === id);
        if (index !== -1) {
          this.files[index] = res.data;
        }
        if (this.selectedFile?.id === id) {
          this.selectedFile = res.data;
        }
        return res.data;
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async trashFile(id) {
      this.loading = true;
      this.error = null;
      try {
        await fileAPI.trash(id);
        this.files = this.files.filter((f) => f.id !== id);
        if (this.selectedFile?.id === id) {
          this.selectedFile = null;
        }
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async restoreFile(id) {
      this.loading = true;
      this.error = null;
      try {
        await fileAPI.restore(id);
        this.files = this.files.filter((f) => f.id !== id);
        if (this.selectedFile?.id === id) {
          this.selectedFile = null;
        }
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async deleteFile(id) {
      this.loading = true;
      this.error = null;
      try {
        await fileAPI.delete(id);
        this.files = this.files.filter((f) => f.id !== id);
        if (this.selectedFile?.id === id) {
          this.selectedFile = null;
        }
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async moveFile(id, folder) {
      const res = await fileAPI.move(id, folder);
      const index = this.files.findIndex((f) => f.id === id);
      if (index !== -1) {
        this.files[index] = res.data;
      }
      if (this.selectedFile?.id === id) {
        this.selectedFile = res.data;
      }
      return res.data;
    },

    async renameFile(id, name) {
      const res = await fileAPI.rename(id, name);
      const index = this.files.findIndex((f) => f.id === id);
      if (index !== -1) {
        this.files[index] = res.data;
      }
      if (this.selectedFile?.id === id) {
        this.selectedFile = res.data;
      }
      return res.data;
    },

    /** 创建副本：下载原文件二进制后重新上传 */
    async duplicateFile(file) {
      try {
        if (file && file.onDisk === false) {
          this.error = '该文件仅为种子记录，磁盘上无实体，无法创建副本';
          throw new Error(this.error);
        }
        const blob = await fileAPI.download(file.id);
        const filename = this.displayName(file) || '副本';
        const dot = filename.lastIndexOf('.');
        const base = dot > 0 ? filename.slice(0, dot) : filename;
        const ext = dot > 0 ? filename.slice(dot) : '';
        const copyFile = new File([blob], `${base}-副本${ext}`, { type: blob.type || file.type });
        const fd = new FormData();
        fd.append('file', copyFile);
        fd.append('folder', file.folder || '/');
        await fileAPI.upload(fd);
        await this.loadView(this.viewMode);
        return true;
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        throw err;
      }
    },

    /** 触发浏览器下载 */
    async downloadFile(file) {
      try {
        if (file && file.onDisk === false) {
          this.error = '该文件仅为种子记录，磁盘上无实体，无法下载';
          throw new Error(this.error);
        }
        const blob = await fileAPI.download(file.id);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = this.displayName(file) || '下载';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 4000);
        return true;
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        throw err;
      }
    },

    /** 获取文件二进制流（用于预览） */
    async fetchBlob(id) {
      try {
        const f = this.files.find((x) => x.id === id) || this.selectedFile;
        if (f && f.onDisk === false) {
          this.error = '该文件仅为种子记录，磁盘上无实体，无法预览';
          throw new Error(this.error);
        }
        return await fileAPI.download(id);
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        throw err;
      }
    },

    // ---- 展示辅助 ----
    displayName(file) {
      if (!file) return '';
      return file.originalName || file.name || '';
    },

    formatSize(size) {
      if (size == null) return '-';
      if (size < 1024) return `${size} B`;
      if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
      if (size < 1024 * 1024 * 1024) return `${(size / 1024 / 1024).toFixed(1)} MB`;
      return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`;
    },

    formatTime(time) {
      if (!time) return '-';
      const d = new Date(time);
      if (Number.isNaN(d.getTime())) return String(time);
      const pad = (n) => String(n).padStart(2, '0');
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    },

    isTrashView(state) {
      return state.viewMode === 'trash';
    },
  },
});