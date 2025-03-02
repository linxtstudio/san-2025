import { webRequest } from "@/lib/http"
import type { PaginatedResponseType } from "@/lib/http.type"
import type { AxiosResponse } from "axios"
import qs from "query-string"

type GetCityListParams = {
	paginate: boolean
	province_id: string
}

export type City = {
	id: string
	name: string
}

export async function getCityList<P extends GetCityListParams>(
	params: P,
): Promise<AxiosResponse<PaginatedResponseType<City, P>>> {
	return await webRequest.get(`/region/cities?${qs.stringify(params)}`)
}
