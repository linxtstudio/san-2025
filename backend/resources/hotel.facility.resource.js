const url = require('../config/url.config')
const { getSanStartDateConfig } = require("../utils/config.util")
const { setFormat, addDays } = require("../utils/datetime.util")

const hotelEventParticipantResource = async (datas) => {
    const startDateConfig = await getSanStartDateConfig()
    return datas.map((data) => ({
        id: data?.id,
        stay_duration: data?.stay_duration,
        check_in_date: setFormat(
            new Date(startDateConfig), 'd MMMM yyyy'
        ),
        check_out_date: setFormat(
            addDays(
                new Date(startDateConfig), data?.stay_duration || 1
            ), 'd MMMM yyyy'
        ),
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
    hotelEventParticipantResource,
}
