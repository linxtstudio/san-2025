import { apiClientAuth } from "@/common/helper/axios";

export const uploadFile =  (payload) => {
    return apiClientAuth({
        method: 'post',
        url: '/files/upload',
        data: payload
    })
    
}