import { webRequest } from "@/lib/http"
import type { PaginatedResponseType } from "@/lib/http.type"
import type { AxiosResponse } from "axios"
import qs from "query-string"

type GetEventTypeListParams = {
	paginate: boolean
}

export type EventType = {
	id: string
	name: string
	description: null | string
	fee_type: string
	fee_nominal: number
}

export async function getEventTypeList<P extends GetEventTypeListParams>(
	params: P,
): Promise<AxiosResponse<PaginatedResponseType<EventType, P>>> {
	return await webRequest.get(`/event/types?${qs.stringify(params)}`)
}
