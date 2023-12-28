import { apiClientAuth } from "@/common/helper/axios";

export const register =  (payload) => {
    return apiClientAuth({
        method: 'post',
        url: '/event/register',
        data: payload
    })
    
}