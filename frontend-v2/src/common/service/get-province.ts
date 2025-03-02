import { webRequest } from "@/lib/http"
import type { PaginatedResponseType } from "@/lib/http.type"
import type { AxiosResponse } from "axios"
import qs from "query-string"

type GetProvinceListParams = {
	paginate?: boolean
}

export type Province = {
	id: string
	name: string
}

export async function getProvinceList<T extends GetProvinceListParams>(
	params: GetProvinceListParams = {} as T,
): Promise<AxiosResponse<PaginatedResponseType<Province, T>>> {
	return await webRequest.get(`/region/provinces?${qs.stringify(params)}`)
}
