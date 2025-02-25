import { HeaderNav } from "@/common/components/shared/header-nav"
import Image from "next/image"
import Link from "next/link"

export function Header() {
	return (
		<nav className="flex w-full items-center justify-center bg-brand-700 py-4 text-white">
			<div className="flex w-full max-w-screen-2xl items-center justify-between px-8 md:px-16">
				<Link href="/" className="flex items-center">
					<Image
						src="/logo-white.svg"
						className="size-12 md:size-21"
						alt="SAN 2025"
						width={86}
						height={86}
					/>
					<div className="xs:flex hidden flex-col">
						<h2 className="font-semibold text-body md:text-title-1">
							Social Arisan Nyok
						</h2>
						<p className="text-sm md:text-lg">Jakarta, 24 - 26 February 2025</p>
					</div>
				</Link>
				<HeaderNav />
			</div>
		</nav>
	)
}
