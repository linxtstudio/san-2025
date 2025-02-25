import { webRequest } from "@/lib/http"
import type { APIListResponse } from "@/lib/http.type"

type GetEventTypeListParams = {
	paginate?: boolean
}

export type EventType = {
	id: string
	name: string
	description: null | string
	fee_type: string
	fee_nominal: number
}

export async function getEventTypeList(params?: GetEventTypeListParams) {
	return await webRequest.get<APIListResponse<EventType>>("/event/types", {
		params,
	})
}
