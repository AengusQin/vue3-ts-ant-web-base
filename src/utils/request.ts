import axios, { type AxiosError, type AxiosRequestConfig } from 'axios';
import { message } from 'ant-design-vue';

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15000,
});

service.interceptors.request.use((config) => {
  // 需要鉴权时在这里统一加 token，例如：config.headers.Authorization = `Bearer ${token}`
  return config;
});

service.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (!axios.isCancel(error)) {
      let msg = '网络异常，请检查后端服务是否启动';
      if (error.response) {
        msg = `请求失败：${error.response.status} ${error.config?.url ?? ''}`;
      } else if (error.code === 'ECONNABORTED') {
        msg = '请求超时';
      }
      message.error(msg);
    }
    return Promise.reject(error);
  },
);

/** 发起请求并直接返回响应体，T 为响应体类型 */
export function request<T = unknown>(config: AxiosRequestConfig): Promise<T> {
  return service.request<T>(config).then((res) => res.data);
}

export default service;
