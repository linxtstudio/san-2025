"use client"

import { getTotalTransction } from "@/modules/dashboard/service/get-transaction"
import { useQuery } from "@tanstack/react-query"

export function TotalTransactionCard() {
	const { data } = useQuery({
		queryKey: ["get-total-transaction"],
		queryFn: async () => await getTotalTransction(),
	})

	return (
		<div className="z-1 flex w-full flex-col gap-2 rounded-2xl border border-neutral-700 bg-primary-950/50 px-8 py-8 backdrop-blur-2xl sm:w-fit 2xl:px-16">
			<span className="font-semibold text-title-2 text-white">
				Total Transaksi
			</span>
			<span className="text-headline text-neutral-200">
				{data?.data.data.total_transaction.toLocaleString("id-ID", {
					style: "currency",
					currency: "IDR",
				})}
			</span>
		</div>
	)
}
