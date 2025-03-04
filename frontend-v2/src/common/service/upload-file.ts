import { webRequest } from "@/lib/http"
import type { APIResponse } from "@/lib/http.type"

type FileUpload = {
	filename: string
}

export async function uploadFile(payload: FormData) {
	return await webRequest.post<APIResponse<FileUpload>>(
		"/files/upload",
		payload,
	)
}
