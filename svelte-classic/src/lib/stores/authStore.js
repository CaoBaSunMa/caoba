import { writable } from 'svelte/store';
import { authAPI } from '../services/modules';

function createAuthStore() {
  const { subscribe, set, update } = writable({
    user: null,
    token: null,
    loading: false,
    error: null,
  });

  return {
    subscribe,

    async login(username, password) {
      update(s => ({ ...s, loading: true, error: null }));
      try {
        const res = await authAPI.login({ username, password });
        const data = res.data;
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', data.token);
          localStorage.setItem('refreshToken', data.refreshToken);
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        set({ user: data.user, token: data.token, loading: false, error: null });
        return data;
      } catch (e) {
        const error = e?.data?.message || '登录失败';
        update(s => ({ ...s, loading: false, error }));
        throw e;
      }
    },

    async register(userData) {
      update(s => ({ ...s, loading: true, error: null }));
      try {
        const res = await authAPI.register(userData);
        const data = res.data;
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', data.token);
          localStorage.setItem('refreshToken', data.refreshToken);
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        set({ user: data.user, token: data.token, loading: false, error: null });
        return data;
      } catch (e) {
        const error = e?.data?.message || '注册失败';
        update(s => ({ ...s, loading: false, error }));
        throw e;
      }
    },

    async fetchMe() {
      update(s => ({ ...s, loading: true }));
      try {
        const res = await authAPI.getMe();
        update(s => ({ ...s, user: res.data, loading: false }));
        if (typeof window !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(res.data));
        }
      } catch (e) {
        update(s => ({ ...s, loading: false, error: e?.data?.message }));
      }
    },

    restoreSession() {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        let parsedUser = null;
        try { parsedUser = user ? JSON.parse(user) : null; } catch {}
        set({ token, user: parsedUser, loading: false, error: null });
      }
    },

    logout() {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
      }
      set({ user: null, token: null, loading: false, error: null });
      if (typeof window !== 'undefined') window.location.href = '/auth/login';
    },
  };
}

export const authStore = createAuthStore();
