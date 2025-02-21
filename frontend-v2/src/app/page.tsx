import { Header } from "@/common/components/ui/header"
import { cn } from "@/lib/utils"
import { EventCarousel } from "@/modules/home/components/event-carousel"
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
		<main className="bg-primary-950">
			<Header />
			<HomeCarousel />
			<div className="w-full flex justify-center items-center">
				<div className="flex w-full justify-between items-center max-w-screen-2xl">
					<div className="flex justify-between w-full text-white py-24">
						<h2 className="text-display font-semibold">Event Rundown</h2>
						<p className="max-w-120 text-neutral-200">
							Below this are the events will be held at SAN 2025, it's gonna be
							fun, exciting and of course memorable, kindly check and register
							after that
						</p>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-center items-center">
				<div className="flex w-full justify-between items-center max-w-screen-2xl">
					<EventCarousel />
				</div>
			</div>
			<div className="w-full flex justify-center items-center">
				<div className="flex w-full justify-between items-center max-w-screen-2xl">
					<div className="flex w-full text-white py-15 gap-16 flex-col">
						<h2 className="text-title-1 font-semibold">Minimum Contribution</h2>
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
											"grid grid-cols-3 max-w-screen-sm text-white *:text-title-2 px-4",
											isPast &&
												"line-through *:text-neutral-700 decoration-neutral-500",
											isCurrent && "bg-neutral-900 py-2 rounded-lg",
										)}
									>
										<p className="font-semibold">{contribution.title}</p>
										<p className="text-neutral-400 text-right">
											{contribution.price}
										</p>
										{contribution.date ? (
											<p className="text-neutral-400 text-right">
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
		</main>
	)
}
