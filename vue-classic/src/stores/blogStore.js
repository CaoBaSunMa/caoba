import { defineStore } from 'pinia';
import { blogAPI } from '@/services/modules';

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [],
    currentPost: null,
    loading: false,
    error: null,
    activeTab: 'all',      // all | published | draft | archived
    activeCategory: null,  // 分类过滤
    activeTag: null,       // 标签过滤
    localCategories: [],   // 前端新建的分类（无后端实体）
    localTags: [],         // 前端新建的标签（无后端实体）
  }),
  getters: {
    allCategories(state) {
      const base = this.categories;
      const names = new Set(base.map((c) => c.name));
      const locals = (state.localCategories || [])
        .filter((n) => !names.has(n))
        .map((n) => ({ name: n, count: 0 }));
      return [...base, ...locals];
    },
    allTags(state) {
      return [...new Set([...this.tags, ...(state.localTags || [])])];
    },
    categories(state) {
      const map = new Map();
      for (const p of state.posts) {
        const c = p.category || '未分类';
        map.set(c, (map.get(c) || 0) + 1);
      }
      return [...map.entries()].map(([name, count]) => ({ name, count }));
    },
    tags(state) {
      const set = new Set();
      for (const p of state.posts) {
        try {
          const arr = typeof p.tags === 'string' ? JSON.parse(p.tags) : p.tags;
          if (Array.isArray(arr)) arr.forEach((t) => set.add(t));
        } catch (e) {
          /* ignore */
        }
      }
      return [...set];
    },
    filteredPosts(state) {
      let list = state.posts;
      if (state.activeTab === 'published') list = list.filter((p) => p.status === 'PUBLISHED');
      else if (state.activeTab === 'draft') list = list.filter((p) => p.status === 'DRAFT');
      else if (state.activeTab === 'archived') list = list.filter((p) => p.status === 'ARCHIVED');
      if (state.activeCategory) list = list.filter((p) => (p.category || '未分类') === state.activeCategory);
      if (state.activeTag) {
        list = list.filter((p) => {
          try {
            const arr = typeof p.tags === 'string' ? JSON.parse(p.tags) : p.tags;
            return Array.isArray(arr) && arr.includes(state.activeTag);
          } catch (e) {
            return false;
          }
        });
      }
      return list;
    },
  },
  actions: {
    async fetchPosts(params) {
      this.loading = true;
      this.error = null;
      try {
        const res = await blogAPI.getPosts(params);
        this.posts = res.data;
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchPost(idOrSlug) {
      this.loading = true;
      this.error = null;
      try {
        const res = /^\d+$/.test(String(idOrSlug))
          ? await blogAPI.getPostById(Number(idOrSlug))
          : await blogAPI.getPost(idOrSlug);
        this.currentPost = res.data;
        return res.data;
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async createPost(data) {
      this.loading = true;
      this.error = null;
      try {
        const res = await blogAPI.createPost(data);
        this.posts.unshift(res.data);
        return res.data;
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async updatePost(id, data) {
      this.loading = true;
      this.error = null;
      try {
        const res = await blogAPI.updatePost(id, data);
        const index = this.posts.findIndex((p) => p.id === id);
        if (index !== -1) {
          this.posts[index] = res.data;
        }
        if (this.currentPost?.id === id) {
          this.currentPost = res.data;
        }
        return res.data;
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async deletePost(id) {
      this.loading = true;
      this.error = null;
      try {
        await blogAPI.deletePost(id);
        this.posts = this.posts.filter((p) => p.id !== id);
        if (this.currentPost?.id === id) {
          this.currentPost = null;
        }
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async publish(id) {
      this.loading = true;
      this.error = null;
      try {
        const res = await blogAPI.publish(id);
        const index = this.posts.findIndex((p) => p.id === id);
        if (index !== -1) {
          this.posts[index] = res.data;
        }
        if (this.currentPost?.id === id) {
          this.currentPost = res.data;
        }
        return res.data;
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async archive(id) {
      this.loading = true;
      this.error = null;
      try {
        const res = await blogAPI.archive(id);
        const index = this.posts.findIndex((p) => p.id === id);
        if (index !== -1) {
          this.posts[index] = res.data;
        }
        if (this.currentPost?.id === id) {
          this.currentPost = res.data;
        }
        return res.data;
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        throw err;
      } finally {
        this.loading = false;
      }
    },
  },
});
