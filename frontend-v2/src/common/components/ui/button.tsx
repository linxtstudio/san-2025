import { cn } from "@/lib/utils"
import { type VariantProps, cva } from "class-variance-authority"
import Link from "next/link"
import type React from "react"
import type { AnchorHTMLAttributes } from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {
		href?: string
		children: React.ReactNode
		className?: string
	}

const buttonVariants = cva(
	"py-2 px-8 gap-2 flex items-center justify-center rounded-md text-white cursor-pointer disabled:bg-neutral-800 disabled:border-neutral-800 disabled:cursor-not-allowed disabled:text-neutral-500",
	{
		variants: {
			variant: {
				default: "bg-brand-700 border-2 border-brand-900",
				secondary: "border-2 border-brand-700",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
)

export function Button({
	href,
	children,
	className = "",
	variant = "default",
	...props
}: ButtonProps) {
	const baseClasses = cn(buttonVariants({ variant, className }))

	if (href) {
		return (
			<Link
				className={baseClasses}
				href={href}
				{...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
			>
				{children}
			</Link>
		)
	}

	return (
		<button className={baseClasses} {...props}>
			{children}
		</button>
	)
}
