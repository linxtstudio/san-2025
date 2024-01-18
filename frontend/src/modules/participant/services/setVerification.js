import { apiClientAuth } from '@/common/helper/axios';

export const setVerification = (type, id) => {
  return apiClientAuth({
    method: 'put',
    url: `/admin/event/participants/${id}/${type}`,
  });
};
