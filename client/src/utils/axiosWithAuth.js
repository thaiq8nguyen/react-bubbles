import Axios from 'axios';
import { AUTH_TOKEN } from './constants';

export const axiosWithAuth = () => {
  const token = localStorage.getItem(AUTH_TOKEN);
  //  defaults / interceptors
  //  create axios service (singleton pattern) to create a axios instance.
  return Axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  });
};
