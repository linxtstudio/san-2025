import type { RegisterEventResponse } from "@/modules/registration/service/register-event"

const REGISTER_STORAGE_KEY = "register-data"

export function getRegisterStorage(): RegisterEventResponse[] | null {
	const data = localStorage.getItem(REGISTER_STORAGE_KEY)
	return data ? (JSON.parse(data) as RegisterEventResponse[]) : null
}

export function setRegisterStorage(data: RegisterEventResponse) {
	const existingData = getRegisterStorage() || []
	localStorage.setItem(
		REGISTER_STORAGE_KEY,
		JSON.stringify([...existingData, data]),
	)
}
