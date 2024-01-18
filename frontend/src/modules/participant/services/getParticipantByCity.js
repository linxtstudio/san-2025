import { apiClientAuth } from '@/common/helper/axios';

export const getParticipantByCity = (payload) => {
  return apiClientAuth({
    method: 'get',
    url: '/admin/event/participants/by-city',
    ...payload,
  });
};
