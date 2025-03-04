"use client"

import { LoadingSpinner } from "@/common/components/ui/loading-spinner"
import { setAccessTokenHeader } from "@/lib/http"
import {
	AuthContext,
	type User,
} from "@/modules/dashboard/hooks/use-auth-context"
import { usePathname, useRouter } from "next/navigation"
import {
	type PropsWithChildren,
	type ReactElement,
	useEffect,
	useState,
} from "react"

type AuthWrapperProps = PropsWithChildren<{
	fallback?: ReactElement | null
}>

export function AuthContextProvider({ children }: AuthWrapperProps) {
	const router = useRouter()
	const pathname = usePathname()

	const [user, setUser] = useState<User | null>(null)
	const [isAuthLoading, setAuthLoading] = useState(true)

	const isLoginPage = pathname.includes("/login")

	async function initialized() {
		if (!isAuthLoading) return

		const localStorageToken = localStorage.getItem("accessToken")
		if (localStorageToken) {
			if (isLoginPage) {
				router.replace("/dashboard")
				return
			}
			setAccessTokenHeader(localStorageToken)
			const localStorageUser = localStorage.getItem("user")
			if (localStorageUser) setUser(JSON.parse(localStorageUser))
			setAuthLoading(false)
			return
		}

		if (!localStorageToken && !isLoginPage) {
			localStorage.removeItem("accessToken")
			localStorage.removeItem("user")
			router.replace("/login")
			return
		}
		setAuthLoading(false)
	}

	async function login({
		accessToken,
		loginUser,
	}: { accessToken: string; loginUser: User }) {
		localStorage.setItem("accessToken", JSON.stringify(accessToken))
		localStorage.setItem("user", JSON.stringify(loginUser))
		setUser(loginUser)

		router.push("/dashboard")
	}

	async function logout() {
		localStorage.removeItem("accessToken")
		localStorage.removeItem("user")
		router.replace("/login")
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		initialized()
	}, [pathname])

	if (!isAuthLoading)
		return (
			<AuthContext.Provider
				value={{ user, isAuthLoading, setAuthLoading, login, logout }}
			>
				{children}
			</AuthContext.Provider>
		)

	return (
		<div className="relative flex h-screen w-full items-center justify-center">
			<LoadingSpinner />
		</div>
	)
}
