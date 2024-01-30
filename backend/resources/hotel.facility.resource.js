const url = require('../config/url.config')

const hotelFacilityResource = async (datas) => {
    return datas.map((data) => ({
        id: data?.id,
        name: data?.name,
        code: data?.code,
        room_availability: data?.room_availability,
        price: data?.price,
        max_pax: data?.max_pax,
        image: data?.image,
        image_url: `${url.public.upload}/${data?.image}`,
    }))
}

const hotelEventParticipantResource = async (datas) => {
    return datas.map((data) => ({
        id: data?.id,
        stay_duration: data?.stay_duration,
        booking_note: data?.booking_note,
        event_participant: {
            id: data?.event_participant?.id,
            name: data?.event_participant?.name,
            transfer_receipt_image: data?.event_participant?.transfer_receipt_image,
            transfer_receipt_url: `${url.public.upload}/${data?.event_participant?.transfer_receipt_image}`,
        },
        hotel_facility: {
            id: data?.hotel_facility?.id,
            name: data?.hotel_facility?.name,
        },
    }))
}

module.exports = {
    hotelFacilityResource,
    hotelEventParticipantResource,
}
