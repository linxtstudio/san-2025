import { HeaderNav } from "@/common/components/shared/header-nav"
import Image from "next/image"

export function Header() {
	return (
		<nav className="bg-brand-700 h-27 w-full flex justify-center items-center text-white">
			<div className="flex w-full justify-between items-center max-w-screen-2xl">
				<div className="flex items-center">
					<Image src="/logo.svg" alt="SAN 2025" width={86} height={86} />
					<div className="flex flex-col">
						<h2 className="text-title-1 font-semibold">Social Arisan Nyok</h2>
						<p className="text-lg">Jakarta, 24 - 26 February 2025</p>
					</div>
				</div>
				<HeaderNav />
			</div>
		</nav>
	)
}
