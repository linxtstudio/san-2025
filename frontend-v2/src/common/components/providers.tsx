"use client"

import {
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query"
import { type PropsWithChildren, useState } from "react"
import { Toaster } from "sonner"

export const Providers = ({ children }: PropsWithChildren) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				queryCache: new QueryCache({
					onError: (err) => {
						// global error handling, e.g. toast notification ...
					},
				}),
			}),
	)

	return (
		<QueryClientProvider client={queryClient}>
			<Toaster theme="dark" richColors />
			{children}
		</QueryClientProvider>
	)
}
