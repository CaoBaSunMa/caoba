import { defineStore } from 'pinia';
import { taskAPI } from '~/services/modules';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: [],
    loading: false,
    error: null,
    filter: 'all',
    keyword: '',
    selectedTask: null,
    viewMode: 'list',
  }),

  getters: {
    filteredTasks: (state) => {
      let list = [...state.tasks];
      if (state.filter === 'todo') list = list.filter(t => t.status === 'TODO');
      if (state.filter === 'in_progress') list = list.filter(t => t.status === 'IN_PROGRESS');
      if (state.filter === 'done') list = list.filter(t => t.status === 'DONE');
      if (state.keyword) {
        const q = state.keyword.toLowerCase();
        list = list.filter(t => t.title?.toLowerCase().includes(q));
      }
      return list;
    },

    groups: (state) => {
      const groups = { 'TODO': [], 'IN_PROGRESS': [], 'DONE': [] };
      state.tasks.forEach(t => {
        if (groups[t.status]) groups[t.status].push(t);
      });
      return groups;
    },
  },

  actions: {
    async fetchTasks(params) {
      this.loading = true;
      this.error = null;
      try {
        const res = await taskAPI.getTasks(params);
        this.tasks = res.data || [];
      } catch (e) {
        this.error = e?.data?.message || '加载任务失败';
      } finally {
        this.loading = false;
      }
    },

    async createTask(data) {
      this.loading = true;
      try {
        const res = await taskAPI.createTask(data);
        this.tasks.unshift(res.data);
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '创建任务失败';
        throw e;
      } finally {
        this.loading = false;
      }
    },

    async updateTask(id, data) {
      this.loading = true;
      try {
        const res = await taskAPI.updateTask(id, data);
        const idx = this.tasks.findIndex(t => t.id === id);
        if (idx >= 0) this.tasks[idx] = res.data;
        return res.data;
      } catch (e) {
        this.error = e?.data?.message || '更新任务失败';
        throw e;
      } finally {
        this.loading = false;
      }
    },

    async deleteTask(id) {
      try {
        await taskAPI.deleteTask(id);
        this.tasks = this.tasks.filter(t => t.id !== id);
      } catch (e) {
        this.error = e?.data?.message || '删除任务失败';
        throw e;
      }
    },

    async updateStatus(id, status) {
      try {
        const res = await taskAPI.updateStatus(id, status);
        const idx = this.tasks.findIndex(t => t.id === id);
        if (idx >= 0) this.tasks[idx] = res.data;
      } catch (e) {
        this.error = e?.data?.message || '更新状态失败';
      }
    },

    async updateProgress(id, progress) {
      try {
        const res = await taskAPI.updateProgress(id, progress);
        const idx = this.tasks.findIndex(t => t.id === id);
        if (idx >= 0) this.tasks[idx] = res.data;
      } catch (e) {
        this.error = e?.data?.message || '更新进度失败';
      }
    },
  },
});
