"use client"

import { FeaturedBandCarousel } from "@/modules/home/components/featured-band-carousel"
import { useState } from "react"
import { FeaturedCard } from "./featured-card"

const WORKSHOP_INSTRUCTORS = [
	{
		workshop: "Salsa Workshop",
		card: {
			image: "/images/featured/tonno.png",
			name: "Tonno Effendi",
			title: "from Jogjakarta",
			link: "https://www.instagram.com/s_tono_effendi",
		},
	},
	{
		workshop: "Bachata Workshop",
		card: {
			image: "/images/featured/berry-eta.png",
			name: "Berry & Eta",
			title: "from Jakarta",
			link: "https://www.instagram.com/berry_valentino",
		},
	},
	{
		workshop: "Kizomba Workshop",
		card: {
			image: "/images/featured/nancy-nathan.png",
			name: "Nancy & Nathan",
			title: "from Jakarta",
			link: "https://www.instagram.com/danzevo_kiz",
		},
	},
	{
		workshop: "Zouk Workshop",
		card: {
			image: "/images/featured/virginie.png",
			name: "Virginie",
			title: "from Jakarta",
			link: "https://www.instagram.com/vdanse",
		},
	},
]

const DJS = [
	{
		image: "/images/featured/made.png",
		name: "DJ Made Alfa",
		title: "from Bali",
		link: "https://www.instagram.com/madealfa",
	},
	{
		image: "/images/featured/billy.png",
		name: "DJ Billy",
		title: "from Bali",
		link: "https://www.instagram.com/my_memoribillya",
	},
	{
		image: "/images/featured/king-guapo.jpeg",
		name: "DJ King Guapo",
		title: "from Bali",
		link: "https://www.instagram.com/deejay_kingguapo",
	},
	{
		image: "/images/featured/dj-adhyn.png",
		name: "DJ Adhyn",
		title: "from Jakarta",
		link: "https://www.instagram.com/dj_adhyn",
	},
	{
		image: "/images/featured/adis.png",
		name: "DJ Adish",
		title: "from Bali",
		link: "https://www.instagram.com/adishkrisna",
	},
	{
		image: "/images/featured/tisha.jpg",
		name: "DJ TYSH",
		title: "from Surabaya",
		link: "https://www.instagram.com/septyshaputri",
	},
	{
		image: "/images/featured/rezack.jpg",
		name: "DJ Rezack",
		title: "from Bali",
		link: "https://www.instagram.com/rcca_dancer",
	},
	{
		image: "/images/featured/dj-indrung.png",
		name: "DJ Indrung",
		title: "from Surabaya",
		link: "https://www.instagram.com/indrung",
	},
]

const COMMITTEES = [
	{
		image: "/images/featured/diah.png",
		name: "Diah Anggara",
		title: "Project Manager",
		link: "https://www.instagram.com/diahbali",
	},
	{
		image: "/images/featured/dewak.png",
		name: "Dewak",
		title: "Creative Director",
		link: "https://www.instagram.com/dewak__",
	},
	{
		image: "/images/featured/gungde.png",
		name: "Gung De",
		title: "Artistic Manager",
		link: "https://www.instagram.com/gungdewita",
	},
	{
		image: "/images/featured/mirawati.png",
		name: "Mirawati",
		title: "Treasury",
		link: "https://www.instagram.com/mieramierain",
	},
	{
		image: "/images/featured/made.png",
		name: "Made Alfa",
		title: "Coordinator",
		link: "https://www.instagram.com/madealfa",
	},
	{
		image: "/images/featured/yuli.png",
		name: "Yuli Rahayu",
		title: "Band Manager",
		link: "https://www.instagram.com/yuli_rahayu_41",
	},
	{
		image: "/images/featured/reinard.png",
		name: "Reinard Arga",
		title: "Multimedia (Promote & Socmed) Manager",
		link: "https://www.instagram.com/reinardarga",
	},
	{
		image: "/images/featured/billy.png",
		name: "Billy",
		title: "Artist Manager & Stage Manager",
		link: "https://www.instagram.com/my_memoribillya",
	},
	{
		image: "/images/featured/rieza.png",
		name: "Rieza Vaganza",
		title: "Logistic Manager",
		link: "https://www.instagram.com/riezavaganza99",
	},
	{
		image: "/images/featured/adis.png",
		name: "Adis Krisna",
		title: "Secretarial Manager",
		link: "https://www.instagram.com/adishkrisna",
	},
	{
		image: "/images/featured/dhawani.png",
		name: "Dhwani",
		title: "Workshop Manager",
		link: "https://www.instagram.com/dhwani.cubansalsaindonesia",
	},
	{
		image: "/images/featured/gungis.png",
		name: "Gung Is",
		title: "Stage Manager",
		link: "https://www.instagram.com/istripradnyandari",
	},
	{
		image: "/images/featured/jamal.png",
		name: "Jamal",
		title: "Artistic Member",
		link: "https://www.instagram.com/jamallatinos13",
	},
	{
		image: "/images/featured/jimmy.png",
		name: "Jimmy",
		title: "Promote & Socmed Member",
		link: "https://www.instagram.com/cakrajimme",
	},
	{
		image: "/images/featured/athika.png",
		name: "Athika",
		title: "Secretarial Member",
		link: "https://www.instagram.com/athikanasution",
	},
	{
		image: "/images/featured/diana.png",
		name: "Diana Jansen",
		title: "Secretarial Member",
		link: "https://www.instagram.com/dianajansen21",
	},
]

export function FeaturedList() {
	const [isShowMore, setIsShowMore] = useState(false)

	return (
		<div className="flex w-full flex-col">
			<div className="container flex flex-col gap-8">
				<h2 className="font-semibold text-title-1 text-white lg:text-display">
					Featuring
				</h2>
				<div className="flex w-full flex-col gap-6">
					<div className="flex flex-col gap-1">
						<p className="font-semibold text-title-2 text-white">Band</p>
						<p className="text-lg text-neutral-400">
							Buena Tierra Latin Band Bali
						</p>
					</div>
					<FeaturedBandCarousel />
				</div>
				<div className="flex w-full flex-col gap-6">
					<p className="font-semibold text-title-2 text-white">
						Workshop Instructors
					</p>
					<div className="flex w-full flex-wrap gap-6">
						{WORKSHOP_INSTRUCTORS.map((instructor, index) => (
							<div key={index} className="flex flex-col gap-6">
								<p className="text-lg text-neutral-400">
									{instructor.workshop}
								</p>
								<FeaturedCard {...instructor.card} />
							</div>
						))}
					</div>
				</div>
				<div className="flex w-full flex-col gap-6">
					<p className="font-semibold text-title-2 text-white">DJs</p>
					<div className="flex w-full flex-wrap gap-6">
						{DJS.map((dj, index) => (
							<FeaturedCard key={index} {...dj} />
						))}
					</div>
				</div>
				<div className="flex w-full flex-col items-start gap-6">
					<p className="font-semibold text-title-2 text-white">Committee</p>
					<div className="flex w-full flex-wrap gap-6">
						{(isShowMore ? COMMITTEES : COMMITTEES.slice(0, 5)).map(
							(member, index) => (
								<FeaturedCard key={index} {...member} />
							),
						)}
					</div>
					{!isShowMore && (
						<button
							type="button"
							className="cursor-pointer text-brand-700"
							onClick={() => setIsShowMore(true)}
						>
							Show more
						</button>
					)}
				</div>
			</div>
		</div>
	)
}
