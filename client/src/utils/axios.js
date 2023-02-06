import axios from 'axios';
import { AUTH_TOKEN } from './constants';

const token = localStorage.getItem(AUTH_TOKEN);

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${token}`,
  },
});

export default instance;
