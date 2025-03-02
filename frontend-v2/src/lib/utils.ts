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

export const formatPrice = (price: number) => {
	return `${price / 1000}K`
}

export const formatFileSize = (bytes: number, decimals = 2): string => {
	if (bytes === 0) return "0 Bytes"

	const k = 1024
	const dm = decimals < 0 ? 0 : decimals
	const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
	const i = Math.floor(Math.log(bytes) / Math.log(k))

	return `${Number.parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`
}
