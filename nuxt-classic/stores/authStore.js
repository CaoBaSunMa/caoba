import { defineStore } from 'pinia';
import { authAPI } from '~/services/modules';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    loading: false,
    error: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    fullName: (state) => state.user?.fullName || state.user?.username || '',
  },

  actions: {
    async login(username, password) {
      this.loading = true;
      this.error = null;
      try {
        const res = await authAPI.login({ username, password });
        const data = res.data;
        this.token = data.token;
        this.user = data.user;
        if (import.meta.client) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('refreshToken', data.refreshToken);
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        return data;
      } catch (e) {
        this.error = e?.data?.message || '登录失败';
        throw e;
      } finally {
        this.loading = false;
      }
    },

    async register(userData) {
      this.loading = true;
      this.error = null;
      try {
        const res = await authAPI.register(userData);
        const data = res.data;
        this.token = data.token;
        this.user = data.user;
        if (import.meta.client) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('refreshToken', data.refreshToken);
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        return data;
      } catch (e) {
        this.error = e?.data?.message || '注册失败';
        throw e;
      } finally {
        this.loading = false;
      }
    },

    async fetchMe() {
      this.loading = true;
      try {
        const res = await authAPI.getMe();
        this.user = res.data;
        if (import.meta.client) {
          localStorage.setItem('user', JSON.stringify(res.data));
        }
      } catch (e) {
        this.error = e?.data?.message || '获取用户信息失败';
      } finally {
        this.loading = false;
      }
    },

    restoreSession() {
      if (import.meta.client) {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (token) this.token = token;
        if (user) {
          try { this.user = JSON.parse(user); } catch {}
        }
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      if (import.meta.client) {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
      }
      navigateTo('/auth/login');
    },
  },
});
