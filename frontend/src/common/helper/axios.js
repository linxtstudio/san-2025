import axios from 'axios';

export const apiClientAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'Application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

apiClientAuth.interceptors.request.use(
  async (request) => {
    if (localStorage.getItem('access-token')) {
      request.headers.Authorization = `Bearer ${localStorage.getItem('access-token') ? localStorage.getItem('access-token').replaceAll('"', '') : ''}`;
    } else {
      delete request.headers.Authorization;
    }

    return request;
  },
  (error) => {
    console.error(`API Error: `, error);
    throw error;
  }
);
