const configRepository = require('../repositories/config.repository')
const eventRepository = require('../repositories/event.repository')
const hotelFacilityRepository = require('../repositories/hotel.facility.repository')
const url = require('../config/url.config')

const { getPaginatePayload, getPaginateData } = require("../utils/pagination.util")
const { eventListResource } = require("../resources/event.resource");
const { setFormat, addDays } = require("../utils/datetime.util");

const register = async (req, res) => {
    const eventParticipant = await eventRepository.register(req.body)

    if (req.body?.event_participant_hotel_facility?.hotel_facility_id) {
        await hotelFacilityRepository.decrementRoomAvailabilityById(
            req.body.event_participant_hotel_facility.hotel_facility_id
        )
    }

    res.status(200).json({
        status: 200,
        message: 'Success to register event',
        data: eventParticipant,
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
    const startDateConfig = await configRepository.getByCode('san-start-date')
    const participantDetail = await eventRepository.getParticipantDetail({
        id: req.params.participantId,
    })

    res.status(200).json({
        status: 200,
        message: 'Success to get participant detail',
        data: {
            id: participantDetail.id,
            name: participantDetail.name,
            email: participantDetail.email,
            phone_number: participantDetail.phone_number,
            event_participant_details: participantDetail.event_participant_details.map((eventParticipantDetail) => ({
                id: eventParticipantDetail.id,
                event_type: {
                    id: eventParticipantDetail.event_type.id,
                    name: eventParticipantDetail.event_type.name,
                }
            })),
            event_participant_hotel_facility: participantDetail.event_participant_hotel_facility ? {
                id: participantDetail.event_participant_hotel_facility.id,
                stay_duration: participantDetail.event_participant_hotel_facility.stay_duration,
                check_in_date: setFormat(new Date(startDateConfig?.value || '2024-01-01'), 'd MMMM yyyy'),
                check_out_date: setFormat(
                    addDays(
                        new Date(startDateConfig?.value || '2024-01-01'), participantDetail.event_participant_hotel_facility.stay_duration
                    ), 'd MMMM yyyy'
                ),
                hotel_facility: {
                    id: participantDetail.event_participant_hotel_facility.hotel_facility.id,
                    name: participantDetail.event_participant_hotel_facility.hotel_facility.name,
                },
            } : null,
        },
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

module.exports = {
    register,

    getParticipantByCity,
    getParticipants,
    getParticipantDetail,
    getParticipantDetailAdmin,

    setVerified,
    setUnverified,
}
