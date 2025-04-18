"use client"
import { LoadingSpinner } from "@/common/components/ui/loading-spinner"
import { getRegisterStorage } from "@/lib/storage"
import { RegisterTicketCard } from "@/modules/registration/components/register-ticket-card"
import type { RegisterEventResponse } from "@/modules/registration/service/register-event"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function RegisterTicketList() {
	const router = useRouter()
	const [tickets, setTickets] = useState<RegisterEventResponse[]>([])
	const [isPending, setIsPending] = useState(true)

	useEffect(() => {
		if (typeof window !== "undefined") {
			setTickets(getRegisterStorage() || [])
		}
		setIsPending(false)
	}, [])

	if (isPending) return <LoadingSpinner />

	if (tickets.length === 0) {
		router.push("/register")
		return null
	}

	return (
		<div className="flex flex-col gap-4">
			{tickets.map((ticket) => (
				<RegisterTicketCard key={ticket.id} ticket={ticket} />
			))}
		</div>
	)
}
