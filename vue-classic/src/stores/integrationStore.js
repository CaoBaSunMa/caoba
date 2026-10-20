import { defineStore } from 'pinia';
import { integrationAPI } from '@/services/modules';

export const useIntegrationStore = defineStore('integration', {
  state: () => ({
    integrations: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchIntegrations() {
      this.loading = true;
      this.error = null;
      try {
        const res = await integrationAPI.getIntegrations();
        this.integrations = res.data;
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
      } finally {
        this.loading = false;
      }
    },

    async connect(id) {
      this.loading = true;
      this.error = null;
      try {
        const res = await integrationAPI.connect(id);
        const index = this.integrations.findIndex((i) => i.id === id);
        if (index !== -1) {
          this.integrations[index] = res.data;
        }
        return res.data;
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async disconnect(id) {
      this.loading = true;
      this.error = null;
      try {
        const res = await integrationAPI.disconnect(id);
        const index = this.integrations.findIndex((i) => i.id === id);
        if (index !== -1) {
          this.integrations[index] = res.data;
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
