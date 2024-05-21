import { apiClientAuth } from '@/common/helper/axios';

export const getParticipant = (id) => {
  return apiClientAuth({
    method: 'get',
    url: '/admin/event/participants/' + id,
  });
};
