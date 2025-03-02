"use client"

import {
	EmblaCarouselDotButton,
	useEmblaCarouselDotButton,
} from "@/common/components/shared/embla-carousel-dot-button"
import { Button } from "@/common/components/ui/button"
import { cn } from "@/lib/utils"
import type { EmblaCarouselType, EmblaEventType } from "embla-carousel"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useCallback, useEffect, useRef } from "react"

const EMBLA_CONFIG = {
	loop: true,
}
const TWEEN_FACTOR_BASE = 0.5
const SLIDES = [
	"/images/home/jumbo-1.png",
	"/images/home/jumbo-2.png",
	"/images/home/jumbo-3.png",
	"/images/home/jumbo-4.png",
]

export function HomeCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel(EMBLA_CONFIG, [
		Autoplay({ playOnInit: true, delay: 8000, stopOnInteraction: false }),
	])
	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useEmblaCarouselDotButton(emblaApi)

	const tweenFactor = useRef(0)
	const tweenNodes = useRef<HTMLElement[]>([])

	const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
		tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
			return slideNode.querySelector(".embla__parallax__layer") as HTMLElement
		})
	}, [])

	const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
		tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
	}, [])

	const tweenParallax = useCallback(
		(emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
			const engine = emblaApi.internalEngine()
			const scrollProgress = emblaApi.scrollProgress()
			const slidesInView = emblaApi.slidesInView()
			const isScrollEvent = eventName === "scroll"

			emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
				let diffToTarget = scrollSnap - scrollProgress
				const slidesInSnap = engine.slideRegistry[snapIndex]

				for (const slideIndex of slidesInSnap) {
					if (isScrollEvent && !slidesInView.includes(slideIndex)) continue
					if (engine.options.loop) {
						for (const loopItem of engine.slideLooper.loopPoints) {
							const target = loopItem.target()
							if (slideIndex === loopItem.index && target !== 0) {
								const sign = Math.sign(target)
								if (sign === -1) {
									diffToTarget = scrollSnap - (1 + scrollProgress)
								}
								if (sign === 1) {
									diffToTarget = scrollSnap + (1 - scrollProgress)
								}
							}
						}
					}
					const translate = diffToTarget * (-1 * tweenFactor.current) * 100
					const tweenNode = tweenNodes.current[slideIndex]
					tweenNode.style.transform = `translateX(${translate}%)`
				}
			})
		},
		[],
	)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!emblaApi) return

		setTweenNodes(emblaApi)
		setTweenFactor(emblaApi)
		tweenParallax(emblaApi)

		emblaApi
			.on("reInit", setTweenNodes)
			.on("reInit", setTweenFactor)
			.on("reInit", tweenParallax)
			.on("scroll", tweenParallax)
			.on("slideFocus", tweenParallax)
	}, [emblaApi, tweenParallax])

	return (
		<div className="relative flex h-full w-full flex-col">
			<div className="pointer-events-none inset-0 z-10 flex h-full w-full items-center justify-center bg-primary-950 py-16 lg:absolute lg:bg-primary-950/65">
				<div className="flex w-full max-w-screen-2xl flex-col gap-14 px-8 md:px-16">
					<div className="flex max-w-screen-md flex-col gap-5 text-white">
						<Image
							src="/logo.svg"
							alt="Social Arisan Nyok"
							className="size-45"
							width={200}
							height={200}
							priority
						/>
						<h2 className="font-semibold text-title-1 lg:text-display">
							About Logo
						</h2>
						<p>
							The logo Social Arisan Nyok use a combination of imaginative dance
							figures and blend it with delicate typography capturing the
							passion, the love and the joy of dancing while conveying the
							vibrant energy of this social dance gathering event.
						</p>
						<p>
							The multi coloured in unison represent the diversity of the dance
							genre fostering a community that continuously grows and evolves
							with vibrant enthusiasm. It also represent our annual changing
							colour dance, a cherished custom which celebrated each year.
						</p>
						<p>
							The solid circle represents the harmony among all dance community
							across Indonesia, reflecting their unwavering support for one
							another. ir also symbolizes how dance unites us all as one big
							family.
						</p>
						<p>
							The 5 scattered stars represent the first 5 cities that initiated
							this event, warmly welcoming others who shares the same passion &
							spirit. They symbolize the ever-growing dance family, embracing
							new members with open arms.
						</p>
						<p>
							The 2 music notes symbolize our origin in 2 genres of dance & our
							continuous growth. Symbolize our evolution to embrace &
							incorporate other dance genre along the way.
						</p>
					</div>
					<div className="pointer-events-auto flex flex-wrap items-center gap-5">
						<Button variant="secondary" href="/about">
							About SAN
						</Button>
						<Button variant="secondary" href="/hotel">
							Nearby Hotel
						</Button>
						<Button href="/register">Register</Button>
					</div>
				</div>
			</div>
			<div
				className="relative h-full w-full overflow-x-hidden pb-8 lg:pb-0"
				ref={emblaRef}
			>
				<div className="flex w-full *:flex-[0_0_100%] lg:h-300">
					{SLIDES.map((slide) => (
						<div key={slide} className="h-full overflow-hidden">
							<div
								className={cn(
									"relative h-full w-full items-center justify-center",
									"embla__parallax__layer",
								)}
							>
								<img
									className="h-full w-full object-cover"
									src={slide}
									alt=""
									draggable={false}
								/>
							</div>
						</div>
					))}
				</div>
				<div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-center gap-2 lg:bottom-8">
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
		</div>
	)
}
