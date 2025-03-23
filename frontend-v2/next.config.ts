import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	output: "standalone",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "socialdance.id",
			},
			{
				protocol: "https",
				hostname: "**.socialdance.id",
			},
			{
				hostname: "103.59.160.95",
			},
			{
				protocol: "https",
				hostname: "api.dicebear.com",
			},
		],
	},
	eslint: {
		ignoreDuringBuilds: true, // Already checked with @biomejs
	},
}

export default nextConfig
