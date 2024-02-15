const calculateTotalTransaction = (data) => {
    let total = 0

    data.event_participant_details.forEach((eventParticipantDetail) => {
        total += eventParticipantDetail.event_type.fee_nominal
    })

    if (data?.event_participant_hotel_facility?.hotel_facility?.id) {
        total += data.event_participant_hotel_facility.hotel_facility.price
    }

    return total
}

module.exports = {
    calculateTotalTransaction,
}
