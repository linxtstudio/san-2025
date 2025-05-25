import { webRequest } from "@/lib/http"
import type {
	APIResponse,
	NamedRecord,
	PaginatedResponseType,
} from "@/lib/http.type"
import type { AxiosResponse } from "axios"
import qs from "query-string"

type GetParticipantListParams = {
	paginate: boolean
	search?: string
	event_type_id?: string
	city_id?: string
	is_verified?: boolean
	page?: number
}

export type Participant = {
	id: string
	name: string
	email: string
	phone_number: string
	is_verified: boolean
	total_transaction: number
	transfer_receipt_image: string
	transfer_receipt_url: string
	event_participant_details: EventParticipantDetail[]
	city: NamedRecord & {
		province: NamedRecord
	}
}

type EventParticipantDetail = {
	id: string
	event_type: {
		id: string
		name: string
	}
}

export type ParticipantList = {
	id: string
	event_participant: Omit<Participant, "event_participant_details">
}

export type TotalParticipantByCity = {
	count: number
	city: NamedRecord & {
		province_id: number
	}
}

export async function getParticipantById(
	id: string,
): Promise<AxiosResponse<APIResponse<Participant>>> {
	return await webRequest.get(`/admin/event/participants/${id}`)
}

export async function getParticipantList<P extends GetParticipantListParams>(
	params: P,
): Promise<AxiosResponse<PaginatedResponseType<ParticipantList, P>>> {
	return await webRequest.get(
		`/admin/event/participants?${qs.stringify(params)}`,
	)
}

export async function getTotalParticipantByCity(
	params: Pick<GetParticipantListParams, "event_type_id">,
) {
	return await webRequest.get<APIResponse<TotalParticipantByCity[]>>(
		`/admin/event/participants/by-city?${qs.stringify(params)}`,
	)
}
