const API_BASE = 'http://localhost:8080/api';

function getToken() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
}

function getRefreshToken() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('refreshToken');
  }
  return null;
}

function setTokens(token, refreshToken) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  }
}

function clearTokens() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  }
}

async function request(method, path, body, options = {}) {
  const url = `${API_BASE}${path}`;
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  const config = { method, headers, ...options };
  if (body && method !== 'GET') config.body = JSON.stringify(body);

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw { status: response.status, data: errorData };
    }
    return await response.json();
  } catch (error) {
    if (error?.status === 401) {
      const refreshToken = getRefreshToken();
      if (refreshToken) {
        try {
          const refreshRes = await fetch(`${API_BASE}/auth/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken }),
          });
          const refreshData = await refreshRes.json();
          setTokens(refreshData.data.token, refreshToken);
          headers.Authorization = `Bearer ${refreshData.data.token}`;
          config.headers = headers;
          const retryResponse = await fetch(url, config);
          return await retryResponse.json();
        } catch {
          clearTokens();
          if (typeof window !== 'undefined') window.location.href = '/auth/login';
        }
      } else {
        clearTokens();
        if (typeof window !== 'undefined') window.location.href = '/auth/login';
      }
    }
    throw error;
  }
}

const api = {
  get: (path, params) => {
    const queryString = params ? '?' + new URLSearchParams(params).toString() : '';
    return request('GET', path + queryString);
  },
  post: (path, body) => request('POST', path, body),
  put: (path, body) => request('PUT', path, body),
  patch: (path, body) => request('PATCH', path, body),
  delete: (path) => request('DELETE', path),
};

export default api;
