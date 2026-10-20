const API_BASE = 'http://localhost:8080/api';

function getToken() {
  if (import.meta.client) {
    return localStorage.getItem('token');
  }
  return null;
}

function getRefreshToken() {
  if (import.meta.client) {
    return localStorage.getItem('refreshToken');
  }
  return null;
}

function setTokens(token, refreshToken) {
  if (import.meta.client) {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  }
}

function clearTokens() {
  if (import.meta.client) {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  }
}

function logout() {
  clearTokens();
  navigateTo('/auth/login');
}

async function request(method, path, body, options = {}) {
  const url = `${API_BASE}${path}`;
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const response = await $fetch(url, {
      method,
      headers,
      body,
      ...options,
    });
    return response;
  } catch (error) {
    if (error?.status === 401 || error?.statusCode === 401) {
      const refreshToken = getRefreshToken();
      if (refreshToken) {
        try {
          const { data } = await $fetch(`${API_BASE}/auth/refresh`, {
            method: 'POST',
            body: { refreshToken },
          });
          setTokens(data.token, refreshToken);
          headers.Authorization = `Bearer ${data.token}`;
          return await $fetch(url, { method, headers, body, ...options });
        } catch {
          logout();
        }
      } else {
        logout();
      }
    }
    throw error;
  }
}

const api = {
  get: (path, params) => request('GET', path, null, { params }),
  post: (path, body) => request('POST', path, body),
  put: (path, body) => request('PUT', path, body),
  patch: (path, body) => request('PATCH', path, body),
  delete: (path) => request('DELETE', path),
};

export default api;
