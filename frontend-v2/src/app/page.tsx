import { Header } from "@/common/components/ui/header"
import { EventCarousel } from "@/modules/home/components/event-carousel"
import { EventList } from "@/modules/home/components/event-list"
import { FeaturedList } from "@/modules/home/components/featured-list"
import { HomeCarousel } from "@/modules/home/components/home-carousel"
import { MinContributionList } from "@/modules/home/components/min-contribution-list"

export default function Home() {
	return (
		<main className="flex w-full flex-col bg-primary-950">
			<Header />
			<HomeCarousel />
			<div className="relative flex w-full flex-col gap-8 overflow-x-hidden">
				<div className="z-1 flex w-full items-center justify-center">
					<div className="flex w-full max-w-screen-2xl items-center justify-between px-8 md:px-16">
						<div className="flex w-full flex-col justify-between gap-3 py-24 text-white lg:flex-row">
							<h2 className="font-semibold text-title-1 lg:text-display">
								Event Rundown
							</h2>
							<p className="max-w-120 text-neutral-200 text-sm/relaxed lg:text-body">
								Below this are the events will be held at SAN 2025, it's gonna
								be fun, exciting and of course memorable, kindly check and
								register after that
							</p>
						</div>
					</div>
				</div>
				<div className="z-1 flex w-full items-center justify-center">
					<div className="flex w-full max-w-screen-2xl items-center justify-between px-8 md:px-16">
						<EventCarousel />
					</div>
				</div>
				<div className="z-1 flex w-full items-center justify-center">
					<div className="flex w-full max-w-screen-2xl items-center justify-between px-8 md:px-16">
						<MinContributionList />
					</div>
				</div>
				<div className="z-1 flex w-full items-center justify-center">
					<div className="flex w-full max-w-screen-2xl items-center justify-between px-8 md:px-16">
						<FeaturedList />
					</div>
				</div>
				<div className="z-1 flex w-full items-center justify-center">
					<div className="flex w-full max-w-screen-2xl items-center justify-between px-8 md:px-16">
						<EventList />
					</div>
				</div>
				<div className="opacity-25">
					<img
						src="/graphic/light.svg"
						alt=""
						className="-left-40 absolute top-40 w-full max-w-1/2 select-none"
						draggable={false}
					/>
					<img
						src="/graphic/discoball.png"
						alt=""
						className="-right-40 absolute top-40 aspect-square w-full max-w-1/5 select-none"
						draggable={false}
					/>
					<img
						src="/graphic/discoball.png"
						alt=""
						className="-left-40 absolute top-480 aspect-square w-full max-w-1/5 select-none"
						draggable={false}
					/>
					<img
						src="/graphic/light.svg"
						alt=""
						className="-right-40 -scale-x-100 absolute top-480 w-full max-w-1/2 select-none"
						draggable={false}
					/>
				</div>
				<img
					src="/graphic/footer.svg"
					alt=""
					className="absolute bottom-0 w-full"
				/>
				<footer className="h-20" />
			</div>
		</main>
	)
}
