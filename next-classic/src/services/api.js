// 后端地址可通过环境变量覆盖：NEXT_PUBLIC_API_BASE=http://localhost:8080/api
const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8080/api';

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

// 会话失效时只跳转一次，避免「登录页 -> 接口 401 -> 再跳登录页」的死循环
let redirectingToLogin = false;

function redirectToLogin() {
  if (typeof window === 'undefined') return;
  if (redirectingToLogin) return;
  if (window.location.pathname.startsWith('/auth/')) return;
  redirectingToLogin = true;
  window.location.href = '/auth/login';
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
    // 网络错误（后端未启动）：返回空数据，避免整站不可用
    if (!error?.status && error instanceof TypeError) {
      return { data: [], message: '服务暂不可用' };
    }
    if (error?.status !== 401) throw error;

    // 从未登录过：只是「未授权」，不是「会话过期」。
    // 返回空数据，让页面正常渲染，避免整站不可用。
    if (!token) {
      return { data: [], message: '未登录' };
    }

    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      clearTokens();
      redirectToLogin();
      throw error;
    }

    try {
      const refreshRes = await fetch(`${API_BASE}/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken }),
      });
      const refreshData = await refreshRes.json();
      const newToken = refreshData?.data?.token;
      if (!refreshRes.ok || !newToken) throw new Error('refresh failed');

      setTokens(newToken, refreshToken);
      headers.Authorization = `Bearer ${newToken}`;
      config.headers = headers;
      const retryResponse = await fetch(url, config);
      if (!retryResponse.ok) {
        const retryData = await retryResponse.json().catch(() => ({}));
        throw { status: retryResponse.status, data: retryData };
      }
      return await retryResponse.json();
    } catch (refreshError) {
      clearTokens();
      redirectToLogin();
      throw error;
    }
  }
}

// 统一查询参数：
// 1) 裸对象 —— api.get(path, { page: 1, size: 20 })，整个对象都是查询参数；
// 2) 包装形式 —— api.put(path, body, { params: { read } })，只有 params 子对象是查询参数，
//    其余键（headers / signal 等）透传给 fetch。
// 自动跳过 undefined / null / 空串，避免拼出 ?params=[object Object]。
function buildQuery(source) {
  if (!source || typeof source !== 'object') return '';
  const usp = new URLSearchParams();
  Object.keys(source).forEach((key) => {
    const value = source[key];
    if (value === undefined || value === null || value === '') return;
    if (Array.isArray(value)) {
      value.forEach((v) => v !== undefined && v !== null && usp.append(key, String(v)));
    } else {
      usp.append(key, String(value));
    }
  });
  const qs = usp.toString();
  return qs ? '?' + qs : '';
}

// 把查询参数并入 URL；仅在包装形式下，其余键才作为 fetch 配置
function withQuery(path, options) {
  const opts = options && typeof options === 'object' ? options : null;
  const wrapped = opts && opts.params && typeof opts.params === 'object' && !Array.isArray(opts.params);
  const query = buildQuery(wrapped ? opts.params : opts);
  const fetchOpts = wrapped ? { ...opts } : undefined;
  if (fetchOpts) delete fetchOpts.params;

  if (!query) return { path, options: fetchOpts };
  const url = path.includes('?') ? `${path}&${query.slice(1)}` : `${path}${query}`;
  return { path: url, options: fetchOpts };
}

const api = {
  get: (path, params) => {
    const { path: p, options } = withQuery(path, params);
    return request('GET', p, null, options);
  },
  post: (path, body, options) => {
    const { path: p, options: o } = withQuery(path, options);
    return request('POST', p, body, o);
  },
  put: (path, body, options) => {
    const { path: p, options: o } = withQuery(path, options);
    return request('PUT', p, body, o);
  },
  patch: (path, body, options) => {
    const { path: p, options: o } = withQuery(path, options);
    return request('PATCH', p, body, o);
  },
  delete: (path, options) => {
    const { path: p, options: o } = withQuery(path, options);
    return request('DELETE', p, null, o);
  },
};

export default api;
