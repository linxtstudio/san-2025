import { apiClientAuth } from '@/common/helper/axios';

export const getCities = (payload) => {
  return apiClientAuth({
    method: 'get',
    url: '/region/cities',
    ...payload,
  });
};
