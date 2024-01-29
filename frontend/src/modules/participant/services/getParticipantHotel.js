import { apiClientAuth } from '@/common/helper/axios';

export const getParticipantHotels = (payload) => {
  return apiClientAuth({
    method: 'get',
    url: '/admin/hotel-facilities/event-participants',
    ...payload,
  });
};
