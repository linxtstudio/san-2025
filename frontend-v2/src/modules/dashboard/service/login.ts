import { webRequest } from "@/lib/http"
import type { APIResponse } from "@/lib/http.type"
import type { User } from "@/modules/dashboard/hooks/use-auth-context"

export type LoginResponse = {
	access_token: string
	user: User
}

type LoginPayload = {
	username: string
	password: string
}

export async function login(payload: LoginPayload) {
	return await webRequest.post<APIResponse<LoginResponse>>(
		"/auth/login",
		payload,
	)
}
