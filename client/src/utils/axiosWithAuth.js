import Axios from 'axios';
import { AUTH_TOKEN } from './constants';

export const axiosWithAuth = () => {
  const token = localStorage.getItem(AUTH_TOKEN);
  console.log('AUTH_TOKEN: ', localStorage.getItem(AUTH_TOKEN));

  return Axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  });
};
