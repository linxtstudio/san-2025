import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "@/common/styles/globals.css"
import { Providers } from "@/common/components/providers"

const poppins = Poppins({
	variable: "--font-default",
	weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "SAN 2025 - The Most Anticipated Social Dance Gathering In Indonesia",
	description:
		"The highly awaited dance extravaganza that promises to be a spellbinding fusion of artistry, rhythm, and sheer spectacle of afro latin dances in Indonesia.",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/logo.svg",
				href: "/logo.svg",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/logo-white.svg",
				href: "/logo-white.svg",
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<link rel="icon" type="image/svg+xml" href="/logo.svg" />
			<body className={`${poppins.variable} bg-primary-950 antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
