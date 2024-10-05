import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_SITE_DOMAIN || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.data.error && error.response.data.error.message === 'jwt expired') {
      localStorage.removeItem('userId')
      localStorage.removeItem('userToken')
      window.location.reload();

      return Promise.reject(error);
    }  
  }
)

export default api;