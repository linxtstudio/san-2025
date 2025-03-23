import TicketEmailTemplate from "@/common/components/email/ticket-email-template"
import { Config } from "@/lib/config"
import { Resend } from "resend"

const resend = new Resend(Config.RESEND_API_KEY)

export async function POST(request: Request) {
	const body = await request.json()
	const { target, ticket } = body

	if (!target || !ticket) {
		return new Response("Missing required body", { status: 400 })
	}

	const { error } = await resend.emails.send({
		from: "SAN 2025 <noreply@updates.socialdance.id>",
		to: [target],
		subject: `${ticket.name}, Here's your SAN 2025 E-Ticket | Ticket ID: ${ticket.id}`,
		react: TicketEmailTemplate({ ticket }),
	})

	if (error) {
		return new Response("Error sending email", { status: 500 })
	}
	return new Response("Email sended successfully", { status: 200 })
}
