"use client"

import { useAuthContext } from "@/modules/dashboard/hooks/use-auth-context"
import { usePathname } from "next/navigation"

export function DashboardHeader() {
	const pathname = usePathname()
	const { user, logout } = useAuthContext()
	return (
		<nav className="flex w-full items-center justify-center bg-brand-700 py-4 text-white">
			<div className="flex w-full max-w-screen-2xl flex-col items-center justify-between gap-5 px-8 sm:flex-row md:px-16">
				<div className="flex items-center">
					<div className="flex flex-col">
						<h2 className="font-semibold text-body md:text-title-1">
							Dashboard
						</h2>
						<p className="text-sm md:text-lg">Hi, {user?.name}</p>
					</div>
				</div>
				<ul className="flex gap-7">
					<li>
						<button className="cursor-pointer" type="button" onClick={logout}>
							Logout
						</button>
					</li>
				</ul>
			</div>
		</nav>
	)
}
