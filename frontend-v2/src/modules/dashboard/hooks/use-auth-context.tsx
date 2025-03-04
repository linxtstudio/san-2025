"use client"

import { createContext, useContext } from "react"

export type User = {
	id: number
	name: string
	username: string
}

type AuthContextType = {
	user: User | null
	isAuthLoading: boolean
	setAuthLoading: (isLoading: boolean) => void
	login: (data: { accessToken: string; loginUser: User }) => void
	logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuthContext() {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider")
	}
	return context
}
