import { HeaderNav } from "@/common/components/shared/header-nav"
import Image from "next/image"
import Link from "next/link"

export function Header() {
	return (
		<nav className="flex w-full items-center justify-center bg-brand-700 py-4 text-white">
			<div className="flex w-full max-w-screen-2xl flex-col items-center justify-between gap-5 px-8 sm:flex-row md:px-16">
				<Link href="/" className="flex items-center">
					<Image
						src="/logo-white.svg"
						className="size-12 md:size-21"
						alt="SAN 2025"
						width={86}
						height={86}
						priority
					/>
					<div className="flex flex-col">
						<h2 className="font-semibold text-body md:text-title-1">
							Social Arisan Nyok
						</h2>
						<p className="text-sm md:text-lg">Jakarta, 30 May - 1 June 2025</p>
					</div>
				</Link>
				<HeaderNav />
			</div>
		</nav>
	)
}
