import { Config } from "@/lib/config"
import axios, {
	type AxiosInstance,
	type InternalAxiosRequestConfig,
	type AxiosResponse,
} from "axios"
import { toast } from "sonner"

interface ApiError {
	response: {
		status: number
		data?: {
			message: string
		}
	}
	message: string
}

class HttpClient {
	private instance: AxiosInstance
	private accessToken: string | null = null
	private readonly TOKEN_KEY = "accessToken"

	constructor() {
		this.instance = axios.create({
			baseURL: Config.API_URL,
		})
		this.setupInterceptors()
	}

	public setAccessToken(token?: string): void {
		if (token) {
			this.accessToken = JSON.parse(token)
		} else {
			this.accessToken = null
		}
	}

	public getInstance(): AxiosInstance {
		return this.instance
	}

	private setupInterceptors(): void {
		this.instance.interceptors.request.use(
			async (request: InternalAxiosRequestConfig) => {
				if (!this.accessToken) {
					this.accessToken = JSON.parse(
						localStorage.getItem(this.TOKEN_KEY) || "null",
					)
				}

				if (this.accessToken) {
					request.headers.set("Authorization", `Bearer ${this.accessToken}`)
				} else {
					request.headers.delete("Authorization")
				}
				return request
			},
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			(error: any) => {
				console.error("API Request Error:", error)
				return Promise.reject(error)
			},
		)

		this.instance.interceptors.response.use(
			(response: AxiosResponse) => response,
			(error: ApiError) => {
				if (error.response?.status === 401) {
					toast.error("You are not authorized to access this resource", {
						id: "api-error",
					})
					localStorage.removeItem(this.TOKEN_KEY)
					window.location.href = "/login"
				}

				if (error.response?.data) {
					error.message = error.response.data.message
				}
				return Promise.reject(error)
			},
		)
	}
}

const httpClient = new HttpClient()
export const webRequest = httpClient.getInstance()
export const setAccessTokenHeader = httpClient.setAccessToken.bind(httpClient)
