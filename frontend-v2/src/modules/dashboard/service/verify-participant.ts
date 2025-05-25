import { webRequest } from "@/lib/http"
import type { APIResponse } from "@/lib/http.type"
import type { Participant } from "@/modules/dashboard/service/get-participant"

type VerifyParticipantPayload = {
	id: string
}

export async function verifyParticipant(payload: VerifyParticipantPayload) {
	return await webRequest.put<APIResponse<Participant>>(
		`/admin/event/participants/${payload.id}/verified`,
		payload,
	)
}

export async function unverifyParticipant(payload: VerifyParticipantPayload) {
	return await webRequest.put<APIResponse<Participant>>(
		`/admin/event/participants/${payload.id}/unverified`,
		payload,
	)
}

export async function resetAllParticipantVerification() {
	return await webRequest.put<APIResponse<Participant>>(
		"/admin/event/participants/unverified/all",
	)
}
