import axios, { AxiosRequestConfig } from 'axios';
import axiosInstance from './axiosInstance';

export type ApiResponse<T> = {
  status: 'success' | 'error';
  data?: T;
};

interface ApiRequestConfig extends AxiosRequestConfig {
  // Custom configuration options
  requireAuth?: boolean;
}

const apiRequest = async <T>(config: ApiRequestConfig): Promise<T> => {
  try {
    if (config.requireAuth) {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Unauthorized: Token not found');
      }
      // Add Authorization header
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    const response = await axiosInstance.request<T>(config);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(`Error: ${error.message}`);
      const message =
        (error.response?.data as { message?: string })?.message ||
        'An error occurred';
      throw new Error(message);
    } else {
      console.error('Unexpected error', error);
      throw new Error('An unexpected error occurred');
    }
  }
};

export default apiRequest;
