const eventRepository = require('../repositories/event.repository')
const hotelFacilityRepository = require('../repositories/hotel.facility.repository')
const url = require('../config/url.config')

const { getPaginatePayload, getPaginateData } = require("../utils/pagination.util")
const { eventListResource, eventParticipantDetailResource } = require("../resources/event.resource")

const register = async (req, res) => {
    const eventParticipant = await eventRepository.register(req.body)
    const response = await eventRepository.getParticipantDetail({
        id: eventParticipant.id,
    })

    if (req.body?.event_participant_hotel_facility?.hotel_facility_id) {
        await hotelFacilityRepository.decrementRoomAvailabilityById(
            req.body.event_participant_hotel_facility.hotel_facility_id
        )
    }

    res.status(200).json({
        status: 200,
        message: 'Success to register event',
        data: eventParticipantDetailResource(response),
    })
}

const getParticipantByCity = async (req, res) => {
    const eventParticipantByCity = await eventRepository.getParticipantByCity(req.query)

    let datas = eventParticipantByCity.reduce((acc, data) => {
        const { city_id, count, event_participant: { city } } = data;
        if (!acc[city_id]) {
            acc[city_id] = { count: 0, city };
        }
        acc[city_id].count += parseInt(count);
        return acc;
    }, {});

    datas = Object.values(datas);

    res.status(200).json({
        status: 200,
        message: 'Success to get event participant by city',
        data: datas,
    })
}

const getParticipants = async (req, res) => {
    const paginatePayload = getPaginatePayload(req.query)
    const participants = await eventRepository.getParticipants(req.query, paginatePayload)
    let response = paginatePayload.paginate ? getPaginateData(participants, paginatePayload) : participants.rows

    if (paginatePayload.paginate) {
        response.data = eventListResource(response.data)
    } else {
        response = eventListResource(response)
    }

    res.status(200).json({
        status: 200,
        message: 'Success to get participants',
        data: response,
    })
}

const getParticipantDetail = async (req, res) => {
    const participantDetail = await eventRepository.getParticipantDetail({
        id: req.params.participantId,
    })

    res.status(200).json({
        status: 200,
        message: 'Success to get participant detail',
        data: eventParticipantDetailResource(participantDetail),
    })
}

const getParticipantDetailAdmin = async (req, res) => {
    const participant = await eventRepository.getParticipantDetail({
        id: req.params.participantId,
    })

    res.status(200).json({
        status: 200,
        message: 'Success to get participant detail',
        data: {
            id: participant.id,
            name: participant.name,
            email: participant.email,
            phone_number: participant.phone_number,
            transfer_receipt_image: participant?.transfer_receipt_image,
            transfer_receipt_url: `${url.public.upload}/${participant?.transfer_receipt_image}`,
            event_participant_details: participant.event_participant_details.map((eventParticipantDetail) => ({
                id: eventParticipantDetail.id,
                event_type: {
                    id: eventParticipantDetail.event_type.id,
                    name: eventParticipantDetail.event_type.name,
                }
            })),
        },
    })
}

const setVerified = async (req, res) => {
    const participant = await eventRepository.getParticipantDetail({
        id: req.params.participantId,
    })

    if (!participant) {
        return res.status(422).json({
            status: 422,
            message: 'Participant does not exist',
            data: null,
        })
    }

    if (participant.is_verified) {
        return res.status(422).json({
            status: 422,
            message: 'Participant already verified',
            data: null,
        })
    }

    await eventRepository.setVerified(req.params.participantId)

    res.status(200).json({
        status: 200,
        message: 'Success to set participant verified',
        data: null,
    })
}

const setUnverified = async (req, res) => {
    await eventRepository.setUnVerified(req.params.participantId)

    res.status(200).json({
        status: 200,
        message: 'Success to set participant unverified',
        data: null,
    })
}

const sumTotalTransaction = async (req, res) => {
    const totalTransaction = await eventRepository.sumTotalTransaction()

    res.status(200).json({
        status: 200,
        message: 'Success to get total transaction',
        data: {
            'total_transaction': totalTransaction,
        },
    })
}

module.exports = {
    register,

    getParticipantByCity,
    getParticipants,
    getParticipantDetail,
    getParticipantDetailAdmin,

    setVerified,
    setUnverified,

    sumTotalTransaction,
}
