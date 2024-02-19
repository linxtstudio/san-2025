import { apiClientAuth } from '@/common/helper/axios';

export const getTotalEventTransaction = (payload) => {
  return apiClientAuth({
    method: 'get',
    url: '/admin/event/total-transaction',
    ...payload,
  });
};
