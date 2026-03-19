// import axios from 'axios';

const BASE_URL = 'https://accesstrvlbd-apiv2.onrender.com';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add the JWT token to every request
apiClient.interceptors.request.use(
  (config) => {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally (optional)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error codes here, e.g., 401 Unauthorized -> logout
    if (error.response && error.response.status === 401) {
      // localStorage.removeItem('token');
      // window.location.href = '/sign-in.html';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
