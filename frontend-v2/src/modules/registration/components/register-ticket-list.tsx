"use client"

import { Button } from "@/common/components/ui/button"
import { LoadingSpinner } from "@/common/components/ui/loading-spinner"
import { getRegisterStorage } from "@/lib/storage"
import type { RegisterEventResponse } from "@/modules/registration/service/register-event"
import { useRouter } from "next/navigation"
import { QRCodeSVG } from "qrcode.react"
import { useEffect, useState } from "react"

type TicketCardProps = {
	ticket: RegisterEventResponse
}

function RegisterTicketCard({ ticket }: TicketCardProps) {
	return (
		<div className="z-1 flex w-full flex-col-reverse justify-between gap-6 rounded-2xl border border-neutral-700 bg-primary-950/50 px-8 py-8 backdrop-blur-2xl lg:flex-row lg:px-16">
			<div className="flex flex-col gap-4">
				<div className="flex flex-col">
					<span className="font-semibold text-title-1 text-white lg:text-display">
						SAN 2025 E-Ticket
					</span>
					<span className="text-headline text-neutral-400 lg:text-title-2">
						{ticket.event_participant_details
							.map((event) => event.event_type.name)
							.join(", ")}
					</span>
				</div>
				<div className="grid w-full max-w-md grid-cols-1 gap-2 text-body text-white md:grid-cols-2 lg:text-headline">
					<span className="font-semibold">Name</span>
					<span>{ticket.name}</span>
					<span className="font-semibold">Email</span>
					<span>{ticket.email}</span>
					<span className="font-semibold">Phone Number</span>
					<span>{ticket.phone_number}</span>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col items-center gap-3 rounded-xl border border-brand-700 p-4">
					<QRCodeSVG
						value={ticket.id}
						size={300}
						className="w-full rounded-xl bg-white p-8"
					/>
					<span className="text-center text-neutral-400">
						Please show this ticket to staff in registry
					</span>
				</div>
				<Button
					type="button"
					onClick={() => {
						window.print()
					}}
				>
					Download
				</Button>
			</div>
		</div>
	)
}

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
