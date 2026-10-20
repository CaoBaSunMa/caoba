import { defineStore } from 'pinia';
import api from '@/services/api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
    currentUser: (state) => state.user,
  },
  actions: {
    async login(username, password) {
      this.loading = true;
      this.error = null;
      try {
        const res = await api.post('/auth/login', { username, password });
        this.token = res.data.token;
        this.user = res.data.user;
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        return res.data;
      } catch (err) {
        this.error = err.response?.data?.message || '登录失败';
        throw err;
      } finally { this.loading = false; }
    },
    async register(data) {
      this.loading = true;
      this.error = null;
      try {
        const res = await api.post('/auth/register', data);
        this.token = res.data.token;
        this.user = res.data.user;
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        return res.data;
      } catch (err) {
        this.error = err.response?.data?.message || '注册失败';
        throw err;
      } finally { this.loading = false; }
    },
    async fetchMe() {
      try {
        const res = await api.get('/auth/me');
        this.user = res.data;
        localStorage.setItem('user', JSON.stringify(res.data));
      } catch { this.logout(); }
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    }
  }
});
