import { writable } from 'svelte/store';
import { taskAPI } from '../services/modules';

function createTaskStore() {
  const { subscribe, set, update } = writable({
    tasks: [],
    loading: false,
    error: null,
    filter: 'all',
  });

  return {
    subscribe,

    async fetchTasks(params) {
      update(s => ({ ...s, loading: true, error: null }));
      try {
        const res = await taskAPI.getTasks(params);
        update(s => ({ ...s, tasks: res.data || [], loading: false }));
      } catch (e) {
        update(s => ({ ...s, loading: false, error: e?.data?.message || '加载任务失败' }));
      }
    },

    async createTask(data) {
      const res = await taskAPI.createTask(data);
      update(s => ({ ...s, tasks: [res.data, ...s.tasks] }));
      return res.data;
    },

    async updateTask(id, data) {
      const res = await taskAPI.updateTask(id, data);
      update(s => ({ ...s, tasks: s.tasks.map(t => t.id === id ? res.data : t) }));
      return res.data;
    },

    async deleteTask(id) {
      await taskAPI.deleteTask(id);
      update(s => ({ ...s, tasks: s.tasks.filter(t => t.id !== id) }));
    },

    async updateStatus(id, status) {
      const res = await taskAPI.updateStatus(id, status);
      update(s => ({ ...s, tasks: s.tasks.map(t => t.id === id ? res.data : t) }));
    },
  };
}

export const taskStore = createTaskStore();
