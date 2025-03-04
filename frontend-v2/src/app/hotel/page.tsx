import { Button } from "@/common/components/ui/button"
import { Header } from "@/common/components/ui/header"
import { ContactFloatingButton } from "@/modules/home/components/contact-floating-button"

const HOTELS = [
	{
		name: "Hotel Alia Cikini",
		address:
			"Jl. Cikini Raya No.32, RT.12/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
		star: 3,
		radius: 150,
		embedPb:
			"!1m18!1m12!1m3!1d3966.5500621388296!2d106.83300589263492!3d-6.190907244651481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5ebfa554673%3A0x9b572df9b1ae4fc6!2sHotel%20Alia%20Cikini!5e0!3m2!1sen!2sid!4v1740481812057!5m2!1sen!2sid",
	},
	{
		name: "IBIS Budget Jakarta Cikini",
		address:
			"Jl. Cikini Raya No.75, Cikini, Jakarta, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
		star: 2,
		radius: 250,
		embedPb:
			"!1m18!1m12!1m3!1d3966.5439379944373!2d106.8387042!3d-6.1917227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43f2a55e243%3A0xe8fef13da8fa7695!2sibis%20budget%20Jakarta%20Cikini!5e0!3m2!1sen!2sid!4v1740480593138!5m2!1sen!2sid",
	},
	{
		name: "Gren Alia Cikini",
		address:
			"Jl. Cikini Raya No.46, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
		star: 3,
		radius: 300,
		embedPb:
			"!1m18!1m12!1m3!1d3966.540145290713!2d106.83605107703136!3d-6.192227660670682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43f1b44abe3%3A0x61b59c08a5372e34!2sHotel%20Gren%20Alia%20Cikini!5e0!3m2!1sen!2sid!4v1740481974226!5m2!1sen!2sid",
	},
	{
		name: "Cikini Hotel",
		address:
			"Jl. Cikini Raya No.81, RT.1/RW.2, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
		star: 2,
		radius: 300,
		embedPb:
			"!1m18!1m12!1m3!1d1983.2685975082632!2d106.83715383909433!3d-6.1926204318896065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43f26c736a3%3A0x39464443446aff87!2sCikini%20Hotel!5e0!3m2!1sen!2sid!4v1740481729024!5m2!1sen!2sid",
	},
	{
		name: "Mercure Jakarta Cikini",
		address:
			"Jl. Cikini Raya No.66, Cikini, Kec. Menteng, Jakarta, Daerah Khusus Ibukota Jakarta 10330",
		star: 4,
		radius: 550,
		embedPb:
			"!1m18!1m12!1m3!1d3966.524364609806!2d106.83634877703112!3d-6.194328260689812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4390f1f8d1d%3A0x57082859cac8932b!2sMercure%20Jakarta%20Cikini!5e0!3m2!1sen!2sid!4v1740481870980!5m2!1sen!2sid",
	},
	{
		name: "Whiz Hotel Cikini Jakarta",
		address:
			"Jl. Cikini Raya No.06, RT.13/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
		star: 2,
		radius: 450,
		embedPb:
			"!1m18!1m12!1m3!1d3966.5694276284003!2d106.83179579263475!3d-6.188327944634585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43998550319%3A0xa93e41fcc02d05b3!2sWhiz%20Hotel%20Cikini%20Jakarta!5e0!3m2!1sen!2sid!4v1740481923898!5m2!1sen!2sid",
	},
]

export default function Hotel() {
	return (
		<main className="flex w-full flex-col bg-primary-950">
			<ContactFloatingButton />
			<Header />
			<div className="relative flex w-full flex-col gap-8 overflow-x-hidden">
				<div className="z-1 flex w-full items-center justify-center">
					<div className="flex w-full max-w-screen-2xl flex-col gap-16 px-8 py-16 md:px-16">
						<div className="flex w-full flex-col gap-5">
							<h2 className="font-semibold text-title-1 text-white lg:text-display">
								Hotel Recommendation
							</h2>
							<p className="max-w-120 text-neutral-200 text-sm/relaxed lg:text-body">
								Discover nearby hotel recommendation for your needs
							</p>
						</div>
						<div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{HOTELS.map((hotel) => (
								<div key={hotel.name} className="flex flex-col gap-5">
									<p className="font-semibold text-headline text-white">
										{hotel.name}
									</p>
									<div className="aspect-video w-full overflow-hidden rounded-2xl bg-neutral-50 shadow-lg shadow-neutral-500/50">
										<iframe
											title={hotel.name}
											referrerPolicy="no-referrer-when-downgrade"
											src={`https://www.google.com/maps/embed?pb=${hotel.embedPb}`}
											className="h-full w-full"
										/>
									</div>
									<p className="text-white">{hotel.address}</p>
									<div className="mt-auto flex flex-col gap-2">
										<p className="font-semibold text-title-2 text-white">
											{hotel.radius}m from venue
										</p>
										<div className="flex items-center gap-2">
											{Array.from({ length: 5 }).map((_, i) => (
												<svg
													key={i}
													width="21"
													height="19"
													viewBox="0 0 21 19"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<title>Star</title>
													<path
														d="M9.54894 0.927049C9.8483 0.0057385 11.1517 0.0057404 11.4511 0.927051L13.0819 5.9463C13.2158 6.35833 13.5997 6.63729 14.033 6.63729H19.3105C20.2792 6.63729 20.682 7.8769 19.8983 8.4463L15.6287 11.5484C15.2782 11.803 15.1315 12.2544 15.2654 12.6664L16.8963 17.6857C17.1956 18.607 16.1411 19.3731 15.3574 18.8037L11.0878 15.7016C10.7373 15.447 10.2627 15.447 9.91221 15.7016L5.64258 18.8037C4.85887 19.3731 3.80439 18.607 4.10374 17.6857L5.7346 12.6664C5.86847 12.2544 5.72181 11.803 5.37132 11.5484L1.10169 8.4463C0.317977 7.8769 0.720754 6.63729 1.68948 6.63729H6.96703C7.40026 6.63729 7.78421 6.35833 7.91809 5.9463L9.54894 0.927049Z"
														fill={i > hotel.star - 1 ? "#656565" : "#D10459"}
													/>
												</svg>
											))}
										</div>
									</div>
									<Button
										variant="secondary"
										href={`https://www.google.com/maps/search/?api=1&query=${hotel.name}`}
									>
										Check Location
									</Button>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="opacity-25">
					<img
						src="/graphic/discoball.png"
						alt=""
						className="-right-40 absolute top-80 aspect-square w-full max-w-1/5 select-none"
						draggable={false}
					/>
				</div>
				<img
					src="/graphic/footer.svg"
					alt=""
					className="absolute bottom-0 w-full"
				/>
				<footer className="h-20 md:h-40 lg:h-80" />
			</div>
		</main>
	)
}
