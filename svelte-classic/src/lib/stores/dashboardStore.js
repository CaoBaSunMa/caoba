import { writable } from 'svelte/store';
import { dashboardAPI } from '../services/modules';

function createDashboardStore() {
  const { subscribe, set, update } = writable({
    stats: null,
    loading: false,
    error: null,
  });

  return {
    subscribe,

    async fetchStats() {
      update(s => ({ ...s, loading: true, error: null }));
      try {
        const res = await dashboardAPI.getStats();
        update(s => ({ ...s, stats: res.data, loading: false }));
      } catch (e) {
        update(s => ({ ...s, loading: false, error: e?.data?.message || '加载统计数据失败' }));
      }
    },
  };
}

export const dashboardStore = createDashboardStore();
