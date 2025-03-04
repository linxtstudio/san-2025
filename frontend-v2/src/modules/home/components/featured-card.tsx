import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type FeaturedCardProps = {
	name: string
	title?: string
	image: string
	link?: string
	hide?: boolean
}

export function FeaturedCard({
	name,
	title,
	image,
	link = "",
	hide = false,
}: FeaturedCardProps) {
	return (
		<Link
			href={link}
			className={cn(
				"flex w-32 xs:w-50 flex-col gap-6",
				hide ? "pointer-events-none cursor-default" : "",
			)}
		>
			<div className="size-32 xs:size-50 overflow-hidden rounded-2xl bg-primary-950">
				<Image
					height={200}
					width={200}
					src={image}
					alt={name}
					className={cn(
						"size-32 xs:size-50 rounded-2xl object-cover transition-transform hover:scale-105",
						hide ? "opacity-15 blur-2xl" : "",
					)}
				/>
			</div>
			{hide ? (
				<span className="text-center text-neutral-500 text-sm xs:text-body">
					To be announced
				</span>
			) : (
				<div className="flex flex-col text-center">
					<p className="text-body text-white xs:text-title-2">{name}</p>
					{title ? (
						<span className="text-neutral-500 text-sm xs:text-body">
							{title}
						</span>
					) : null}
				</div>
			)}
		</Link>
	)
}
