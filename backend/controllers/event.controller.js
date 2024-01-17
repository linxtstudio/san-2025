const eventRepository = require('../repositories/event.repository')
const url = require('../config/url.config')
const { getPaginatePayload } = require("../utils/pagination.util")

const register = async (req, res) => {
    const eventParticipant = await eventRepository.register(req.body)

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

    res.status(200).json({
        status: 200,
        message: 'Success to get participants',
        data: participants.map((participant) => ({
            id: participant?.id,
            event_participant: {
                id: participant?.event_participant?.id,
                name: participant?.event_participant?.name,
                email: participant?.event_participant?.email,
                phone_number: participant?.event_participant?.phone_number,
                is_verified: participant?.event_participant?.is_verified,
                transfer_receipt_image: participant?.event_participant?.transfer_receipt_image,
                transfer_receipt_url: `${url.public.upload}/${participant?.event_participant?.transfer_receipt_image}`,
                city: {
                    id: participant?.event_participant?.city?.id,
                    name: participant?.event_participant?.city?.name,
                    province: {
                        id: participant?.event_participant?.city?.province?.id,
                        name: participant?.event_participant?.city?.province?.name,
                    }
                }
            }
        })),
    })
}

const getParticipantDetail = async (req, res) => {
    const participantDetail = await eventRepository.getParticipantDetail(req.params.participantId)

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
        },
    })
}

const getParticipantDetailAdmin = async (req, res) => {
    const participant = await eventRepository.getParticipantDetail(req.params.participantId)

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
