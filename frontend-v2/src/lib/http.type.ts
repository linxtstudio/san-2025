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

export type PaginatedResponseType<T, P> = P extends { paginate: boolean }
	? P["paginate"] extends true
		? APIListResponse<T>
		: APIResponse<T[]>
	: never

export type NamedRecord<T = number> = {
	id: T
	name: string
}
