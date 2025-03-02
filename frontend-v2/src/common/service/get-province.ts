import { webRequest } from "@/lib/http"
import type { PaginatedResponseType } from "@/lib/http.type"
import type { AxiosResponse } from "axios"
import qs from "query-string"

type GetProvinceListParams = {
	paginate: boolean
}

export type Province = {
	id: string
	name: string
}

export async function getProvinceList<P extends GetProvinceListParams>(
	params: P,
): Promise<AxiosResponse<PaginatedResponseType<Province, P>>> {
	return await webRequest.get(`/region/provinces?${qs.stringify(params)}`)
}
