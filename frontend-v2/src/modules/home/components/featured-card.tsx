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
		<Link href={link} className="flex w-32 xs:w-50 flex-col gap-6">
			<Image
				height={200}
				width={200}
				src={image}
				alt={name}
				className="size-32 xs:size-50 rounded-2xl object-cover transition-transform hover:scale-105"
			/>
			<div className="flex flex-col text-center">
				<p className="text-body text-white xs:text-title-2">{name}</p>
				{title ? (
					<span className="text-neutral-500 text-sm xs:text-body">{title}</span>
				) : null}
			</div>
		</Link>
	)
}
