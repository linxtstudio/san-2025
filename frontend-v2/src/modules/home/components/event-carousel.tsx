"use client"

import {
	EmblaCarouselDotButton,
	useEmblaCarouselDotButton,
} from "@/common/components/shared/embla-carousel-dot-button"
import { cn } from "@/lib/utils"
import AutoHeight from "embla-carousel-auto-height"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

export type Event = {
	isMainEvent?: boolean
	date: string
	title: string
	imageSrc?: string
	description: () => ReactNode
	items: {
		label: string
		value: string
		url?: string
	}[]
}

const EVENTS: Event[] = [
	// {
	// 	date: "23 May",
	// 	title: "Pre-party",
	// 	imageSrc: "/images/event/pre-party.png",
	// 	description: () => (
	// 		<p className="max-w-screen-sm text-neutral-400">
	// 			Teaming up with the local club, we extend a warm invitation to dancers
	// 			nationwide, inviting them to savor the hospitality of Jakarta.
	// 			<br className="mb-4" />
	// 			Immerse yourself in the exhilaration of dancing alongside locals,
	// 			forging new friendships, and rekindling family bonds in the midst of
	// 			this electrifying experience.
	// 		</p>
	// 	),
	// 	items: [
	// 		{ label: "Location", value: "Red Ruby" },
	// 		{ label: "Time", value: "7 PM - 11 PM WIB" },
	// 	],
	// },
	// {
	// 	date: "24 May",
	// 	title: "Pool Party",
	// 	imageSrc: "/images/event/pool-party.png",
	// 	description: () => (
	// 		<p className="max-w-screen-sm text-neutral-400">
	// 			Indulge in the joy of dancing by the exquisite poolside, surrounded by
	// 			the mesmerizing hues of the sunset. Let the DJ weave the beats of your
	// 			favorite dance tunes, creating an unforgettable ambiance.
	// 			<br className="mb-4" />
	// 			Elevate the excitement with a Bonnie & Clyde competition, promising not
	// 			only added fun but also crafting cherished memories that will linger in
	// 			our hearts.
	// 		</p>
	// 	),
	// 	items: [
	// 		{ label: "Location", value: "LV8" },
	// 		{ label: "Time", value: "3 - 9 PM WIB" },
	// 		{ label: "Djs", value: "To be announced" },
	// 	],
	// },
	{
		date: "30 May",
		title: "Pre-Party & After Party",
		imageSrc: "/images/event/pre-party.png",
		description: () => (
			<p className="max-w-screen-sm text-neutral-400">
				Teaming up with the local club, we extend a warm invitation to dancers
				nationwide, inviting them to savor the hospitality of Jakarta.
				<br className="mb-4" />
				Immerse yourself in the exhilaration of dancing alongside locals,
				forging new friendships, and rekindling family bonds in the midst of
				this electrifying experience.
			</p>
		),
		items: [
			{ label: "Location", value: "To be announced" },
			// { label: "Time", value: "7 PM - 11 PM WIB" },
		],
	},
	{
		isMainEvent: true,
		date: "31 May",
		title: "Social Arisan Nyok The Party",
		imageSrc: "/images/event/event.png",
		description: () => (
			<p className="max-w-screen-sm text-neutral-400">
				For those who still enjoying the weekend in Jakarta, we offer you
				another dance party to remember. Enjoying sunset and the warm sand of
				Jakarta beach will be the ultimate dancing experience as we say see you
				again next year to all our beloved friends and family.
				<br className="mb-4" /> Barbeque menus from the bar and best music from
				the DJ will accompany our last night together.
			</p>
		),
		items: [
			{
				label: "Location",
				value: "Taman Ismal Marzuki",
				url: "https://g.co/kgs/t6mgam2",
			},
			{ label: "Open Registration", value: "3 - 9 PM WIB" },
			{ label: "Workshop", value: "3 - 9 PM WIB" },
			{ label: "Dinner Served", value: "6 PM - 7.30 PM WIB" },
			{ label: "Performance", value: "6 PM - 7.30 PM WIB" },
			{
				label: "Colour Exchange Social Dance featuring Band",
				value: "6 PM - 7.30 PM WIB",
			},
			{
				label: "Open Ballroom II",
				value: "6 PM - 7.30 PM WIB",
			},
		],
	},
	{
		date: "2 June",
		title: "After Party",
		imageSrc: "/images/event/after-party.png",
		description: () => (
			<p className="max-w-screen-sm text-neutral-400">
				For those who still enjoying the weekend in Jakarta, we offer you
				another dance party to remember. Enjoying sunset and the warm sand of
				Jakarta beach will be the ultimate dancing experience as we say see you
				again next year to all our beloved friends and family.
				<br className="mb-4" /> Barbeque menus from the bar and best music from
				the DJ will accompany our last night together.
			</p>
		),
		items: [
			{ label: "Location", value: "To be announced" },
			{ label: "Time", value: "3 - 9 PM WIB" },
			{ label: "Djs", value: "To be announced" },
		],
	},
]

export function EventCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [AutoHeight()])
	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useEmblaCarouselDotButton(emblaApi)

	return (
		<div className="relative flex w-full cursor-grab select-none flex-col gap-16">
			<div className="flex w-full flex-wrap items-end gap-y-8 md:w-full md:flex-row md:flex-nowrap">
				{scrollSnaps.map((_, index) => (
					<EmblaCarouselDotButton
						key={_}
						onClick={() => onDotButtonClick(index)}
						className={cn(
							"cursor-pointer border-b px-4 pb-4 md:w-full",
							index === selectedIndex
								? "border-b-brand-700"
								: "border-b-neutral-500",
						)}
					>
						<div className="flex flex-col items-center gap-4">
							{EVENTS[index].isMainEvent ? (
								<span className="w-fit rounded-xl bg-brand-700 px-4 text-sm text-white md:text-body">
									Main Event
								</span>
							) : null}
							<span
								className={cn(
									"w-full sm:text-title-2 md:text-title-1",
									index === selectedIndex
										? "font-semibold text-white"
										: "text-neutral-400",
								)}
							>
								{EVENTS[index].date}
							</span>
						</div>
					</EmblaCarouselDotButton>
				))}
			</div>
			<div className="relative h-full w-full overflow-hidden" ref={emblaRef}>
				<div className="flex w-full items-start gap-16 *:flex-[0_0_100%]">
					{EVENTS.map((event) => (
						<div
							key={event.title}
							className={cn(
								"flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-25",
								event.imageSrc ? "" : "flex-col",
							)}
						>
							<div className="flex w-full flex-col gap-10 text-white">
								<h3 className="font-semibold text-title-2 lg:text-title-1">
									{event.title}
								</h3>
								<div className="text-sm/relaxed lg:text-body">
									{event.description()}
								</div>
								{event.imageSrc ? (
									<div className="relative aspect-2/1 w-full rounded-2xl">
										<Image
											className="rounded-2xl object-cover object-top"
											fill
											src={event.imageSrc}
											alt={event.title}
										/>
									</div>
								) : null}
							</div>
							{event.items.length > 0 ? (
								<div
									className={cn(
										"flex w-full flex-col gap-4",
										event.imageSrc ? "lg:max-w-125" : "",
									)}
								>
									{event.items.map((item) => (
										<div
											key={item.label}
											className="grid grid-cols-2 text-white *:text-lg lg:*:text-title-2"
										>
											<p className="font-semibold">{item.label}</p>
											{item.url ? (
												<Link
													href={item.url}
													className="text-right text-blue-500 hover:underline"
												>
													{item.value}
												</Link>
											) : (
												<p className="text-right text-neutral-400">
													{item.value}
												</p>
											)}
										</div>
									))}
								</div>
							) : null}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
