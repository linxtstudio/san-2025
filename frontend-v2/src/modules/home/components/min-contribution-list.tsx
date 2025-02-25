import { cn } from "@/lib/utils"

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

export function MinContributionList() {
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
					const isPast = contributionDate && contributionDate < currentDate
					const isCurrent = contribution.title === currentContributionTitle

					return (
						<div
							key={contribution.title}
							className={cn(
								"grid max-w-screen-sm grid-cols-2 xs:grid-cols-3 px-4 text-white *:text-lg lg:*:text-title-2",
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
								<p className="col-span-2 xs:col-span-1 xs:text-right text-neutral-400">
									{contribution.date}
								</p>
							) : null}
						</div>
					)
				})}
			</div>
		</div>
	)
}
