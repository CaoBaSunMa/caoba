import { defineStore } from 'pinia';
import { dashboardAPI } from '~/services/modules';

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    stats: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchStats() {
      this.loading = true;
      this.error = null;
      try {
        const res = await dashboardAPI.getStats();
        this.stats = res.data;
      } catch (e) {
        this.error = e?.data?.message || '加载统计数据失败';
      } finally {
        this.loading = false;
      }
    },
  },
});
