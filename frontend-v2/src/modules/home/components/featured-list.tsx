"use client"

import { useState } from "react"
import { FeaturedCard } from "./featured-card"

const WORKSHOP_INSTRUCTORS = [
	{
		workshop: "Salsa Workshop",
		card: {
			image: "/images/featured/instructor/dhwani.png",
			name: "Dhwani Bahar",
			title: "Cuba",
			link: "https://www.instagram.com/dancing_dhwani",
		},
	},
	{
		workshop: "Bachata Workshop",
		card: {
			image: "/images/featured/instructor/billy.png",
			name: "Billy",
			title: "Footwork in couple",
			link: "https://www.instagram.com/my_memoribillya",
		},
	},
	{
		workshop: "Kizomba Workshop",
		card: {
			image: "/images/featured/instructor/nathan-nancy.png",
			name: "Nathan & Nancy",
			title: "Urban-Kiz",
			link: "https://www.instagram.com/danzevo_kiz",
		},
	},
	{
		workshop: "Zouk Workshop",
		card: {
			image: "/images/featured/instructor/reinard-diana.png",
			name: "Reinard & Diana",
			title: "",
			link: "https://www.instagram.com/brazilianzoukindonesia",
		},
	},
]

const DJS = [
	{
		image: "/images/featured/dj/dj-alfa.png",
		name: "DJ Alfa",
		title: "from Bali",
		link: "https://www.instagram.com/madealfa",
	},
	{
		image: "/images/featured/dj/dj-billy.png",
		name: "DJ Billy",
		title: "from Bali",
		link: "https://www.instagram.com/my_memoribillya",
	},
	// {
	// 	image: "/images/featured/dj/dj-kingguapo.png",
	// 	name: "DJ King Guapo",
	// 	title: "from Bali",
	// 	link: "https://www.instagram.com/deejay_kingguapo",
	// },
	{
		image: "/images/featured/dj/dj-adhyn.png",
		name: "DJ Adhyn",
		title: "from Jakarta",
		link: "https://www.instagram.com/dj_adhyn",
	},
	// {
	// 	image: "/images/featured/dj/dj-adish.png",
	// 	name: "DJ Adish",
	// 	title: "from Bali",
	// 	link: "https://www.instagram.com/adishkrisna",
	// },
	// {
	// 	image: "/images/featured/dj/dj-tysh.png",
	// 	name: "DJ TYSH",
	// 	title: "from Surabaya",
	// 	link: "https://www.instagram.com/septyshaputri",
	// },
	{
		image: "/images/featured/dj/dj-indrung.png",
		name: "DJ Indrung",
		title: "from Surabaya",
		link: "https://www.instagram.com/indrung",
	},
	{
		image: "/images/featured/dj/dj-pancho.png",
		name: "DJ Pancho",
		title: "from Ecuador",
		link: "https://www.instagram.com/panchougaldes",
	},
	{
		image: "/images/featured/dj/dj-rezack.png",
		name: "DJ Rezack",
		title: "from Bali",
		link: "https://www.instagram.com/rcca_dancer",
	},
]

const COMMITTEES = [
	{
		image: "/images/featured/committee/ANNE.png",
		name: "Anne",
		title: "Chief",
		link: "https://www.instagram.com/aefel",
	},
	{
		image: "/images/featured/committee/VIRGINIE.png",
		name: "Virginie",
		title: "Treasurer",
		link: "https://www.instagram.com/vdanse?igsh=cnlhaHByOGl4MWw0",
	},
	{
		image: "/images/featured/committee/LIA.png",
		name: "Lia",
		title: "Secretary",
		link: "https://www.instagram.com/cumiqu?igsh=MWtoeGRpY2d2eGcwYQ==",
	},
	{
		image: "/images/featured/committee/OLIVE.png",
		name: "Olive",
		title: "Registration Manager",
		link: "https://www.instagram.com/oleev_moy?igsh=bWlmeXZqZTdvczhv",
	},
	{
		image: "/images/featured/committee/AJI.png",
		name: "Aji",
		title: "Competition Manager",
		link: "https://www.instagram.com/ajibagja",
	},
	{
		image: "/images/featured/committee/JACKY.png",
		name: "Jacky",
		title: "Performer Coordinator",
		link: "https://www.instagram.com/jackdinatadecoco",
	},
	{
		image: "/images/featured/committee/VERA.png",
		name: "Vera",
		title: "Stage Manager",
		link: "https://www.instagram.com/vera_robinss",
	},
	{
		image: "/images/featured/committee/ANDIKA.png",
		name: "Andika",
		title: "Website Manager",
		link: "https://www.instagram.com/andika.christy",
	},
	{
		image: "/images/featured/committee/ELDA.png",
		name: "Elda",
		title: "Media Manager",
		link: "https://www.instagram.com/elda.kiz.ai",
	},
	{
		image: "/images/featured/committee/MICHAEL.png",
		name: "Michael",
		title: "Promotion Manager",
		link: "https://www.instagram.com/yohanesmichael_mc",
	},
	{
		image: "/images/featured/committee/ADHI.png",
		name: "Adhi",
		title: "DJ Coordinator",
		link: "https://www.instagram.com/dj_adhyn",
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
				{/* <div className="flex w-full flex-col gap-6">
					<div className="flex flex-col gap-1">
						<p className="font-semibold text-title-2 text-white">Band</p>
						<p className="text-lg text-neutral-400">
							Buena Tierra Latin Band Bali
						</p>
					</div>
					<FeaturedBandCarousel />
				</div> */}
				<div className="flex w-full flex-col gap-6">
					<p className="font-semibold text-title-2 text-white">Instructor</p>
					<div className="flex w-full flex-wrap gap-6">
						{WORKSHOP_INSTRUCTORS.map((instructor, index) => (
							<div key={index} className="flex flex-col gap-6">
								<p className="max-w-30 xs:max-w-50 text-body text-neutral-400 xs:text-lg">
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
