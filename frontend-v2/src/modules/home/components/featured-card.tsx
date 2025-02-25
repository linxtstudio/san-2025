import Image from "next/image"
import Link from "next/link"

type FeaturedCardProps = {
	name: string
	title?: string
	image: string
	link?: string
}

export function FeaturedCard({
	name,
	title,
	image,
	link = "",
}: FeaturedCardProps) {
	return (
		<Link href={link} className="flex w-[200px] flex-col gap-6">
			<Image
				height={200}
				width={200}
				src={image}
				alt={name}
				className="h-[200px] w-[200px] rounded-[20px] object-cover transition-transform hover:scale-105"
			/>
			<div className="flex flex-col text-center">
				<p className="text-[20px] text-white">{name}</p>
				{title ? <span className="text-neutral-500">{title}</span> : null}
			</div>
		</Link>
	)
}
