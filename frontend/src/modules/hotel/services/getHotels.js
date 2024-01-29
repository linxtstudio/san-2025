import { apiClientAuth } from '@/common/helper/axios';

export const getHotels = (payload) => {
  return apiClientAuth({
    method: 'get',
    url: '/hotel-facilities',
    ...payload,
  });
};
