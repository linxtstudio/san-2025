import { Header } from "@/common/components/ui/header"
import { cn } from "@/lib/utils"
import { EventCarousel } from "@/modules/home/components/event-carousel"
import { EventList } from "@/modules/home/components/event-list"
import { FeaturedList } from "@/modules/home/components/featured-list"
import { HomeCarousel } from "@/modules/home/components/home-carousel"

const MINIMUM_CONTRIBUTION = [
	{
		title: "Early bird 1",
		price: "IDR 350k",
		date: "31 March 2024",
	},
	{
		title: "Early bird 2",
		price: "IDR 400k",
		date: "31 April 2025",
	},
	{
		title: "Normal Price",
		price: "IDR 450k",
		date: "31 May 2025",
	},
	{
		title: "At the door",
		price: "IDR 500k",
		date: "",
	},
]

function parseDate(dateStr: string) {
	if (!dateStr) return null
	const date = new Date(dateStr)
	return Number.isNaN(date.getTime()) ? null : date
}

export default function Home() {
	const currentDate = new Date()

	// Determine current contribution from those with a valid date that's not past.
	const upcomingContributions = MINIMUM_CONTRIBUTION.filter((c) => {
		const cDate = parseDate(c.date)
		return cDate && cDate >= currentDate
	})

	let currentContributionTitle: string | null = null
	if (upcomingContributions.length > 0) {
		upcomingContributions.sort((a, b) => {
			return (
				(parseDate(a.date) as Date).getTime() -
				(parseDate(b.date) as Date).getTime()
			)
		})
		currentContributionTitle = upcomingContributions[0].title
	}

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
						<div className="flex w-full flex-col gap-16 py-15 text-white">
							<h2
								id="minimum_contribution"
								className="font-semibold text-title-2 lg:text-title-1"
							>
								Minimum Contribution
							</h2>
							<div className="flex w-full flex-col gap-4">
								{MINIMUM_CONTRIBUTION.map((contribution) => {
									const contributionDate = parseDate(contribution.date)
									const isPast =
										contributionDate && contributionDate < currentDate
									const isCurrent =
										contribution.title === currentContributionTitle

									return (
										<div
											key={contribution.title}
											className={cn(
												"grid max-w-screen-sm grid-cols-3 px-4 text-white *:text-lg lg:*:text-title-2",
												isPast &&
													"line-through decoration-neutral-500 *:text-neutral-700",
												isCurrent && "rounded-lg bg-neutral-900 py-2",
											)}
										>
											<p className="font-semibold">{contribution.title}</p>
											<p className="text-right text-neutral-400">
												{contribution.price}
											</p>
											{contribution.date ? (
												<p className="text-right text-neutral-400">
													{contribution.date}
												</p>
											) : null}
										</div>
									)
								})}
							</div>
						</div>
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
