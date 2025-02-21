import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const customTwMerge = extendTailwindMerge({
	extend: {
		theme: {
			text: [
				"display",
				"header",
				"title-1",
				"title-2",
				"headline",
				"body",
				"caption",
			], // Refer to @app/common/styles/globals.css
		},
	},
})

export function cn(...inputs: ClassValue[]) {
	return customTwMerge(clsx(inputs))
}
