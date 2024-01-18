import { apiClientAuth } from '@/common/helper/axios';

export const login = (payload) => {
  return apiClientAuth({
    method: 'post',
    url: '/auth/login',
    data: payload,
  });
};
