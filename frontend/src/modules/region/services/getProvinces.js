import { apiClientAuth } from "@/common/helper/axios";

export const getProvinces =  (payload) => {
    return apiClientAuth({
        method: 'get',
        url: '/region/provinces',
        ...payload
    })
    
}