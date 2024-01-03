import { apiClientAuth } from '@/common/helper/axios';

export const getEvents = (payload) => {
  return apiClientAuth({
    method: 'get',
    url: '/event/types',
    data: payload,
  });
};
