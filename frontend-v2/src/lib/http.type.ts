export type APIResponse<T> = {
	message: string
	status: number
	data: T
}

export type APIListResponse<T> = APIResponse<{
	total: number
	data: T[]
	total_pages: number
	current_page: number
}>
