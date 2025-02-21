import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "@/common/styles/globals.css"

const poppins = Poppins({
	variable: "--font-default",
	weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "SAN 2025 - The Most Anticipated Social Dance Gathering In Indonesia",
	description:
		"The highly awaited dance extravaganza that promises to be a spellbinding fusion of artistry, rhythm, and sheer spectacle of afro latin dances in Indonesia.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} antialiased`}>{children}</body>
		</html>
	)
}
