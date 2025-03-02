import { cn } from "@/lib/utils"

const MINIMUM_CONTRIBUTION = [
	{
		title: "Early Bird",
		price: "IDR 400K",
		date: "1 March 2025",
	},
	{
		title: "Normal Price",
		price: "IDR 400k",
		date: "24 March 2025",
	},
	{
		title: "Last Call",
		price: "IDR 450k",
		date: "24 April 2025",
	},
	{
		title: "At the door (2 day)",
		price: "IDR 600K",
		date: "",
	},
	{
		title: "At the door (1 day)",
		price: "IDR 400K",
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

	const validContributions = MINIMUM_CONTRIBUTION.filter((c) => c.date)
	validContributions.sort((a, b) => {
		const dateA = parseDate(a.date) as Date
		const dateB = parseDate(b.date) as Date
		return dateA.getTime() - dateB.getTime()
	})

	let currentContributionTitle: string | null = null

	for (let i = 0; i < validContributions.length; i++) {
		const contributionDate = parseDate(validContributions[i].date) as Date
		if (contributionDate > currentDate) break

		currentContributionTitle = validContributions[i].title

		if (i < validContributions.length - 1) {
			const nextDate = parseDate(validContributions[i + 1].date) as Date
			if (currentDate < nextDate) break
		}
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
					let isPast = false
					if (contributionDate) {
						const nextIndex =
							MINIMUM_CONTRIBUTION.findIndex(
								(c) => c.title === contribution.title,
							) + 1
						const nextDate =
							nextIndex < MINIMUM_CONTRIBUTION.length
								? parseDate(MINIMUM_CONTRIBUTION[nextIndex].date)
								: null
						isPast =
							contributionDate < currentDate &&
							(nextDate === null || currentDate >= nextDate)
					}
					const isCurrent = contribution.title === currentContributionTitle

					return (
						<div
							key={contribution.title}
							className={cn(
								"grid max-w-screen-md grid-cols-2 xs:grid-cols-3 px-4 text-white *:text-lg lg:*:text-title-2",
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
