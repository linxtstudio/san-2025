"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function HeaderNav() {
	const pathname = usePathname()
	const isActive = (href: string) => pathname === href
	const navItems = [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Hotel",
			href: "/hotel",
		},
		{
			label: "About",
			href: "/about",
		},
	]

	return (
		<ul className="flex gap-7">
			{navItems.map((item) => (
				<li key={item.href}>
					<Link
						href={item.href}
						className={cn(isActive(item.href) && "font-semibold")}
					>
						{item.label}
					</Link>
				</li>
			))}
		</ul>
	)
}
