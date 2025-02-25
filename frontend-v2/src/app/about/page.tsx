import { Header } from "@/common/components/ui/header"
import { ContactFloatingButton } from "@/modules/home/components/contact-floating-button"
import Image from "next/image"

export default function About() {
	return (
		<main className="flex w-full flex-col bg-primary-950">
			<ContactFloatingButton />
			<Header />
			<div className="relative flex w-full flex-col gap-8 overflow-x-hidden">
				<div className="z-1 flex w-full items-center justify-center">
					<div className="flex w-full max-w-screen-2xl flex-col items-center justify-between px-8 py-16 md:px-16">
						<h2 className="font-semibold text-title-1 text-white lg:text-display">
							About Us
						</h2>
						<div className="grid w-full grid-cols-1 flex-col items-center gap-3 py-24 text-white lg:grid-cols-2">
							<Image
								src="/logo.svg"
								alt="Social Arisan Nyok"
								className="mx-auto size-45 lg:size-125"
								width={500}
								height={500}
							/>
							<div className="flex flex-col gap-16">
								<div className="flex flex-col gap-5 *:text-neutral-200 *:text-sm/relaxed *:lg:text-body">
									<p>
										Held in a different cities around Indonesia every year so
										the local community can experience being the host of the
										event and gain the exposure also recognition.
									</p>
									<p>
										The committee are all dancers from the hosting city who are
										willing to volunteer to create this unforgettable event
									</p>
									<p>
										2025 will be our 7th time doing the Social Arisan Nyok, and
										this time will be held in Bali. New ideas and more parties
										will be added this year in hope that everyone can enjoy this
										warm heartfelt event even more.
									</p>
								</div>
								<div className="flex flex-col gap-5 *:text-neutral-200 *:text-sm/relaxed *:lg:text-body">
									<p className="font-semibold">About Logo</p>
									<p>
										The logo Social Arisan Nyok use a combination of imaginative
										dance figures and blend it with delicate typography
										capturing the passion, the love and the joy of dancing while
										conveying the vibrant energy of this social dance gathering
										event.
									</p>
									<p>
										The multi coloured in unison represent the diversity of the
										dance genre fostering a community that continuously grows
										and evolves with vibrant enthusiasm. It also represent our
										annual changing colour dance, a cherished custom which
										celebrated each year.
									</p>
									<p>
										The solid circle represents the harmony among all dance
										community across Indonesia, reflecting their unwavering
										support for one another. ir also symbolizes how dance unites
										us all as one big family.
									</p>
									<p>
										The 5 scattered stars represent the first 5 cities that
										initiated this event, warmly welcoming others who shares the
										same passion & spirit. They symbolize the ever-growing dance
										family, embracing new members with open arms.
									</p>
									<p>
										The 2 music notes symbolize our origin in 2 genres of dance
										& our continuous growth. Symbolize our evolution to embrace
										& incorporate other dance genre along the way.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img
					src="/graphic/footer.svg"
					alt=""
					className="absolute bottom-0 w-full"
				/>
				<footer className="h-20 lg:h-40" />
			</div>
		</main>
	)
}
