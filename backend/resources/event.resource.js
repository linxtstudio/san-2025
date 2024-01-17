const url = require("../config/url.config");

const eventListResource = (datas) => {
    return datas.map((data) => ({
        id: data?.id,
        event_participant: {
            id: data?.event_participant?.id,
            name: data?.event_participant?.name,
            email: data?.event_participant?.email,
            phone_number: data?.event_participant?.phone_number,
            is_verified: data?.event_participant?.is_verified,
            transfer_receipt_image: data?.event_participant?.transfer_receipt_image,
            transfer_receipt_url: `${url.public.upload}/${data?.event_participant?.transfer_receipt_image}`,
            city: {
                id: data?.event_participant?.city?.id,
                name: data?.event_participant?.city?.name,
                province: {
                    id: data?.event_participant?.city?.province?.id,
                    name: data?.event_participant?.city?.province?.name,
                }
            }
        }
    }))
}

module.exports = {
    eventListResource,
}
