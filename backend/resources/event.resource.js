const url = require("../config/url.config");

const eventListResource = (datas) => {
    return datas.map((data) => ({
        id: null,
        event_participant: {
            id: data?.id,
            name: data?.name,
            email: data?.email,
            phone_number: data?.phone_number,
            is_verified: data?.is_verified,
            transfer_receipt_image: data?.transfer_receipt_image,
            transfer_receipt_url: `${url.public.upload}/${data?.transfer_receipt_image}`,
            city: {
                id: data?.city?.id,
                name: data?.city?.name,
                province: {
                    id: data?.city?.province?.id,
                    name: data?.city?.province?.name,
                }
            }
        }
    }))
}

module.exports = {
    eventListResource,
}
