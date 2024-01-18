import { apiClientAuth } from '@/common/helper/axios';

export const getParticipants = (payload) => {
  return apiClientAuth({
    method: 'get',
    url: '/admin/event/participants',
    ...payload,
  });
};
