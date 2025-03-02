"use client"

import { Button } from "@/common/components/ui/button"
import { getRegisterStorage } from "@/lib/storage"
import type { RegisterEventResponse } from "@/modules/registration/service/register-event"
import { useEffect, useState } from "react"

export function RegisterTicketButton() {
	const [ticket, setTicket] = useState<RegisterEventResponse[] | null>()

	useEffect(() => {
		if (typeof window === "undefined") return
		const response = getRegisterStorage()
		setTicket(response)
	}, [])

	if (!ticket) return null

	return (
		<Button variant="secondary" className="mb-8 w-fit" href="/register/tickets">
			You have {ticket?.length} ticket registered, Click to check
		</Button>
	)
}
