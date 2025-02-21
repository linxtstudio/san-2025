"use client"

import {
	EmblaCarouselDotButton,
	useEmblaCarouselDotButton,
} from "@/common/components/shared/embla-carousel-dot-button"
import { cn } from "@/lib/utils"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
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
	}[]
}

const EVENTS: Event[] = [
	{
		date: "23 May 2025",
		title: "Pre-party",
		imageSrc: "/images/event/pre-party.png",
		description: () => (
			<p className="max-w-screen-sm text-neutral-400">
				Teaming up with the local club, we extend a warm invitation to dancers
				nationwide, inviting them to savor the hospitality of Bali.
				<br className="mb-4" />
				Immerse yourself in the exhilaration of dancing alongside locals,
				forging new friendships, and rekindling family bonds in the midst of
				this electrifying experience.
			</p>
		),
		items: [
			{ label: "Location", value: "Red Ruby" },
			{ label: "Time", value: "7 PM - 11 PM WIB" },
		],
	},
	{
		date: "24 May 2025",
		title: "Pool Party",
		imageSrc: "/images/event/pool-party.png",
		description: () => (
			<p className="max-w-screen-sm text-neutral-400">
				Indulge in the joy of dancing by the exquisite poolside, surrounded by
				the mesmerizing hues of the sunset. Let the DJ weave the beats of your
				favorite dance tunes, creating an unforgettable ambiance.
				<br className="mb-4" />
				Elevate the excitement with a Bonnie & Clyde competition, promising not
				only added fun but also crafting cherished memories that will linger in
				our hearts.
			</p>
		),
		items: [
			{ label: "Location", value: "LV8" },
			{ label: "Time", value: "3 - 9 PM WIB" },
			{ label: "Djs", value: "To be announced" },
		],
	},
	{
		isMainEvent: true,
		date: "25 May 2025",
		title: "Social Arisan Nyok The Party",
		imageSrc: "/images/event/event.png",
		description: () => (
			<p className="max-w-screen-sm text-neutral-400">
				For those who still enjoying the weekend in Bali, we offer you another
				dance party to remember. Enjoying sunset and the warm sand of Bali beach
				will be the ultimate dancing experience as we say see you again next
				year to all our beloved friends and family.
				<br className="mb-4" /> Barbeque menus from the bar and best music from
				the DJ will accompany our last night together.
			</p>
		),
		items: [
			{ label: "Location", value: "ASTON Denpasar Hotel & Convention" },
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
		date: "26 May 2025",
		title: "After Party",
		imageSrc: "/images/event/after-party.png",
		description: () => (
			<p className="max-w-screen-sm text-neutral-400">
				For those who still enjoying the weekend in Bali, we offer you another
				dance party to remember. Enjoying sunset and the warm sand of Bali beach
				will be the ultimate dancing experience as we say see you again next
				year to all our beloved friends and family.
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
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useEmblaCarouselDotButton(emblaApi)

	return (
		<div className="w-full relative gap-16 flex flex-col select-none cursor-grab">
			<div className="flex items-end">
				{scrollSnaps.map((_, index) => (
					<EmblaCarouselDotButton
						key={_}
						onClick={() => onDotButtonClick(index)}
						className={cn(
							"cursor-pointer border-b px-16 pb-4",
							index === selectedIndex
								? "border-b-brand-700"
								: "border-b-neutral-500",
						)}
					>
						<div className="flex flex-col gap-4 items-center">
							{EVENTS[index].isMainEvent ? (
								<span className="text-white bg-brand-700 rounded-xl w-fit px-4">
									Main Event
								</span>
							) : null}
							<span
								className={cn(
									"text-title-1",
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
			<div className="w-full h-full relative overflow-hidden" ref={emblaRef}>
				<div className="flex w-full *:flex-[0_0_100%] gap-16">
					{EVENTS.map((event) => (
						<div
							key={event.title}
							className={cn(
								"flex w-full justify-between gap-25 items-center",
								event.imageSrc ? "" : "flex-col",
							)}
						>
							<div className="flex flex-col gap-10 text-white w-full">
								<h3 className="font-semibold text-title-1">{event.title}</h3>
								{event.description()}
								{event.imageSrc ? (
									<div className="w-full relative aspect-2/1 rounded-2xl">
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
										"flex flex-col w-full gap-4",
										event.imageSrc ? "max-w-125" : "",
									)}
								>
									{event.items.map((item) => (
										<div
											key={item.label}
											className="grid grid-cols-2 text-white *:text-title-2"
										>
											<p className="font-semibold">{item.label}</p>
											<p className="text-right text-neutral-400">
												{item.value}
											</p>
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
