const API_BASE = 'http://localhost:8080/api';

function getToken() {
  return localStorage.getItem('token');
}

function getRefreshToken() {
  return localStorage.getItem('refreshToken');
}

function setTokens(token, refreshToken) {
  localStorage.setItem('token', token);
  localStorage.setItem('refreshToken', refreshToken);
}

function clearTokens() {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
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
          if (!refreshRes.ok) throw new Error('refresh failed');
          const refreshData = await refreshRes.json();
          const newToken = refreshData.data?.token;
          if (!newToken) throw new Error('no token in refresh response');
          setTokens(newToken, refreshToken);
          headers.Authorization = `Bearer ${newToken}`;
          config.headers = headers;
          const retryResponse = await fetch(url, config);
          if (!retryResponse.ok) {
            const errData = await retryResponse.json().catch(() => ({}));
            throw { status: retryResponse.status, data: errData };
          }
          return await retryResponse.json();
        } catch (e) {
          clearTokens();
          window.location.href = '/auth/login';
          throw e; // Throw so caller knows auth failed
        }
      } else {
        clearTokens();
        window.location.href = '/auth/login';
        return; // Don't throw after redirect
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
