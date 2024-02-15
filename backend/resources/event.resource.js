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
            total_transaction: data?.total_transaction,
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

const eventParticipantDetailResource = (data) => ({
    id: data.id,
    name: data.name,
    email: data.email,
    phone_number: data.phone_number,
    event_participant_details: data.event_participant_details.map((eventParticipantDetail) => ({
        id: eventParticipantDetail.id,
        event_type: {
            id: eventParticipantDetail.event_type.id,
            name: eventParticipantDetail.event_type.name,
        }
    })),
    event_participant_hotel_facility: data.event_participant_hotel_facility ? {
        id: data.event_participant_hotel_facility?.id,
        stay_duration: data.event_participant_hotel_facility?.stay_duration,
        booking_note: data.event_participant_hotel_facility?.booking_note,
        hotel_facility: {
            id: data.event_participant_hotel_facility?.hotel_facility?.id,
            name: data.event_participant_hotel_facility?.hotel_facility?.name,
        },
    } : null,
})

module.exports = {
    eventListResource,
    eventParticipantDetailResource,
}
