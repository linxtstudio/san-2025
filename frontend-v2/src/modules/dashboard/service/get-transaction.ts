import { webRequest } from "@/lib/http"
import type { APIResponse } from "@/lib/http.type"

type TotalTransction = {
	total_transaction: number
}

export async function getTotalTransction() {
	return await webRequest.get<APIResponse<TotalTransction>>(
		"/admin/event/total-transaction",
	)
}
