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
		<div className="w-full relative">
			<div className="bg-black/50 flex items-center justify-center h-full w-full absolute inset-0 z-10 pointer-events-none">
				<div className="flex flex-col max-w-screen-2xl gap-14 w-full">
					<div className="flex flex-col gap-5 text-white max-w-screen-md">
						<h2 className="text-display font-semibold">
							The Most Anticipated Social Dance Gathering In Indonesia
						</h2>
						<p className="text-body">
							The highly awaited dance extravaganza that promises to be a
							spellbinding fusion of artistry, rhythm, and sheer spectacle of
							afro latin dances in Indonesia.
						</p>
						<p className="text-body">
							Embark on a meaningful journey with us as we unite in a
							heartwarming festival, celebrating the pinnacle of social dance
							within the vibrant Indonesian community. Come together to not only
							embrace the art of dance but also champion the essence of family
							togetherness.
						</p>
					</div>
					<div className="flex items-center gap-5 pointer-events-auto">
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
			<div className="w-full h-full overflow-x-hidden relative" ref={emblaRef}>
				<div className="flex w-full aspect-video *:flex-[0_0_100%]">
					{SLIDES.map((slide) => (
						<div key={slide} className="h-full overflow-hidden">
							<div
								className={cn(
									"relative h-full w-full justify-center items-center",
									"embla__parallax__layer",
								)}
							>
								<img
									className="w-full object-cover"
									src={slide}
									alt=""
									draggable={false}
								/>
							</div>
						</div>
					))}
				</div>
				<div className="absolute inset-x-0 bottom-8 z-10 flex items-center justify-center gap-2">
					{scrollSnaps.map((_, index) => (
						<EmblaCarouselDotButton
							key={_}
							onClick={() => onDotButtonClick(index)}
							className={cn(
								"w-3.5 h-3.5 rounded-full cursor-pointer",
								index === selectedIndex ? "bg-brand-700" : "bg-neutral-500",
							)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
