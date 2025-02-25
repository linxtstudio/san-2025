"use client"

import {
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query"
import { type PropsWithChildren, useState } from "react"

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
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
