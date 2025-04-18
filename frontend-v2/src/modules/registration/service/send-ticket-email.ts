import type { RegisterEventResponse } from "@/modules/registration/service/register-event"

type SendTicketEmailPayload = {
	target: string
	ticket: RegisterEventResponse
}

export async function sendTicketEmail({
	target,
	ticket,
}: SendTicketEmailPayload) {
	try {
		const response = await fetch("/api/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ target, ticket }),
		})

		if (!response.ok) {
			throw new Error("Failed to send email")
		}
	} catch (error) {
		console.error("Test email error:", error)
	}
}
