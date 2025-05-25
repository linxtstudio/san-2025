import { webRequest } from "@/lib/http"
import type { APIResponse } from "@/lib/http.type"
import type { EventParticipantDetail } from "@/modules/dashboard/service/get-participant"

export type RegisterEventResponse = {
	id: string
	name: string
	email: string
	phone_number: string
	event_participant_details: EventParticipantDetail[]
	event_participant_hotel_facility: null
}

type RegisterEventPayload = {
	name: string
	email: string
	phone_number: string
	city_id: string
	transfer_receipt_image: string
	event_type_ids: string[]
	event_participant_hotel_facility: null
}

export async function registerEvent(payload: RegisterEventPayload) {
	return await webRequest.post<APIResponse<RegisterEventResponse>>(
		"/event/register",
		payload,
	)
}
