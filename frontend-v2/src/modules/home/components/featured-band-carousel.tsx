"use client"

import {
	EmblaCarouselDotButton,
	useEmblaCarouselDotButton,
} from "@/common/components/shared/embla-carousel-dot-button"
import { cn } from "@/lib/utils"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import Link from "next/link"

const BAND_MEMBERS = [
	{
		name: "Indri",
		title: "Lead Vocal",
		image: "/images/featured/indri.png",
		link: "https://www.instagram.com/buenatierra_bali",
	},
	{
		name: "Dian Marisqha",
		title: "Rhythm Guitar & Singer",
		image: "/images/featured/dian.png",
		link: "https://www.instagram.com/buenatierra_bali",
	},
	{
		name: "Anang Orba",
		title: "Bass Guitar & Singer",
		image: "/images/featured/anang.png",
		link: "https://www.instagram.com/buenatierra_bali",
	},
	{
		name: "Nidom Mashuri",
		title: "Percussion & Lead Vocal",
		image: "/images/featured/nidom.png",
		link: "https://www.instagram.com/buenatierra_bali",
	},
	{
		name: "Otto Nugroho",
		title: "Lead Guitar",
		image: "/images/featured/otto.png",
		link: "https://www.instagram.com/buenatierra_bali",
	},
	{
		name: "Simson Nicolas",
		title: "Drummer",
		image: "/images/featured/simson.png",
		link: "https://www.instagram.com/buenatierra_bali",
	},
]

export function FeaturedBandCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useEmblaCarouselDotButton(emblaApi)

	return (
		<div className="relative overflow-hidden pb-8" ref={emblaRef}>
			<div className="flex h-80 gap-5 *:flex-[0_0_90%] lg:*:flex-[0_0_33%]">
				{BAND_MEMBERS.map((member) => (
					<div
						key={member.name}
						className="group relative h-80 min-w-0 overflow-hidden"
					>
						<Link href={member.link} className="flex flex-col gap-6">
							<Image
								className="rounded-2xl object-cover object-top"
								src={member.image}
								alt={member.name}
								fill
							/>
						</Link>
						<div className="-bottom-px pointer-events-none absolute inset-x-0 flex select-none flex-col rounded-2xl bg-gradient-to-t from-primary-950 to-transparent py-8 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
							<p className="text-title-2 text-white">{member.name}</p>
							{member.title ? (
								<span className="text-neutral-500">{member.title}</span>
							) : null}
						</div>
					</div>
				))}
			</div>
			<div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-center gap-2">
				{scrollSnaps.map((_, index) => (
					<EmblaCarouselDotButton
						key={_}
						onClick={() => onDotButtonClick(index)}
						className={cn(
							"h-3 w-3 cursor-pointer rounded-full",
							index === selectedIndex ? "bg-brand-700" : "bg-neutral-500",
						)}
					/>
				))}
			</div>
		</div>
	)
}
