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

export type PaginatedResponseType<
	T,
	P extends { paginate?: boolean },
> = P["paginate"] extends true ? APIListResponse<T> : APIResponse<T[]>
