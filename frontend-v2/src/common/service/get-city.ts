import { webRequest } from "@/lib/http"
import type { PaginatedResponseType } from "@/lib/http.type"
import type { AxiosResponse } from "axios"
import qs from "query-string"

type GetCityListParams = {
	province_id: string
	paginate?: boolean
}

export type City = {
	id: string
	name: string
}

export async function getCityList<T extends GetCityListParams>(
	params: GetCityListParams,
): Promise<AxiosResponse<PaginatedResponseType<City, T>>> {
	return await webRequest.get(`/region/cities?${qs.stringify(params)}`)
}
