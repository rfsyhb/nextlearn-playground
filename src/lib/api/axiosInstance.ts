import axios from 'axios';
import axiosRetry from 'axios-retry';

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosRetry(axiosInstance, {
  retries: 5,
  retryCondition: (error) => {
    return (
      axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      error.code === 'ECONNABORTED' ||
      (error.response?.data as { message?: string })?.message ===
        'FUNCTION_INVOCATION_TIMEOUT'
    );
  },
  retryDelay: axiosRetry.exponentialDelay,
});

export default axiosInstance;