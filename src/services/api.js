import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhot:3333',
});

export default api;
