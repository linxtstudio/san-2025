import { apiClientAuth } from '@/common/helper/axios';

export const updateAllHotel = (payload) => {
  return apiClientAuth({
    method: 'put',
    url: '/admin/hotel-facilities/update-all',
    ...payload,
  });
};
