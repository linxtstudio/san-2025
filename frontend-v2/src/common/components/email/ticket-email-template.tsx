import type { RegisterEventResponse } from "@/modules/registration/service/register-event"
import {
	Body,
	Column,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components"

type TicketEmailProps = {
	ticket: RegisterEventResponse
}

export const TicketEmailTemplate = ({ ticket }: TicketEmailProps) => {
	const COLORS = {
		white: "#ffffff",
		background: "#111111",
		brand: "#d10459",
		neutral: "#a3a3a3",
		neutral_800: "#262626",
	}

	const STYLES = {
		text: {
			base: {
				fontFamily: "sans-serif",
			},
			heading: {
				margin: "8px 0",
				padding: "0",
				textAlign: "center" as const,
				fontWeight: "bold",
				fontSize: "24px",
				color: COLORS.white,
			},
			normal: {
				color: COLORS.white,
			},
			light: {
				color: COLORS.neutral,
			},
			semibold: {
				fontWeight: "600",
				color: COLORS.white,
			},
			small: {
				fontSize: "14px",
			},
			center: {
				textAlign: "center" as const,
			},
		},
		layout: {
			container: {
				margin: "0 auto",
				width: "100%",
				maxWidth: "600px",
				padding: "20px",
			},
			mainSection: {
				marginBottom: "24px",
				borderRadius: "16px",
				border: `1px solid ${COLORS.neutral}`,
				backgroundColor: COLORS.background,
				padding: "32px",
			},
			qrSection: {
				margin: "0 auto 12px auto",
				maxWidth: "320px",
				borderRadius: "12px",
				border: `1px solid ${COLORS.brand}`,
				padding: "16px",
				textAlign: "center" as const,
			},
			infoSection: {
				width: "100%",
				borderRadius: "8px",
				border: `1px solid ${COLORS.neutral_800}`,
				padding: "16px",
			},
			row: {
				display: "flex",
				flexDirection: "row" as const,
			},
			labelColumn: {
				width: "120px",
			},
		},

		elements: {
			body: {
				backgroundColor: COLORS.white,
				fontFamily: "sans-serif",
			},
			eventList: {
				margin: "8px 0 16px 0",
				textAlign: "center" as const,
				fontSize: "18px",
				color: COLORS.neutral,
			},
			qrCode: {
				margin: "0 auto",
				display: "block",
				borderRadius: "12px",
				backgroundColor: "white",
				padding: "16px",
			},
			qrInstructions: {
				marginTop: "12px",
				textAlign: "center" as const,
				fontWeight: "500",
				color: COLORS.neutral,
				fontSize: "14px",
			},
			footer: {
				marginTop: "32px",
				textAlign: "center" as const,
				color: COLORS.neutral,
				fontSize: "14px",
			},
		},
	}

	return (
		<Html>
			<Head />
			<Body style={STYLES.elements.body}>
				<Preview>
					{ticket.name}, Here's your SAN 2025 E-Ticket | Ticket ID: {ticket.id}
				</Preview>
				<Container style={STYLES.layout.container}>
					<Section style={STYLES.layout.mainSection}>
						<Heading style={STYLES.text.heading}>SAN 2025 E-Ticket</Heading>
						<Text style={STYLES.elements.eventList}>
							{ticket.event_participant_details
								.map((event) => event.event_type.name)
								.join(", ")}
						</Text>
						<Section style={{ width: "100%" }}>
							<Row>
								<Column>
									<Section style={STYLES.layout.qrSection}>
										<Img
											src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${ticket.id}`}
											width="150"
											height="150"
											alt="QR Code"
											style={STYLES.elements.qrCode}
										/>
										<Text style={STYLES.elements.qrInstructions}>
											Please show this ticket to staff in registry
										</Text>
									</Section>

									<Section style={STYLES.layout.infoSection}>
										<Row style={STYLES.layout.row}>
											<Column style={STYLES.layout.labelColumn}>
												<Text style={STYLES.text.semibold}>Name</Text>
											</Column>
											<Column>
												<Text style={STYLES.text.normal}>{ticket.name}</Text>
											</Column>
										</Row>
										<Row style={STYLES.layout.row}>
											<Column style={STYLES.layout.labelColumn}>
												<Text style={STYLES.text.semibold}>Email</Text>
											</Column>
											<Column>
												<Text style={STYLES.text.normal}>{ticket.email}</Text>
											</Column>
										</Row>
										<Row style={STYLES.layout.row}>
											<Column style={STYLES.layout.labelColumn}>
												<Text style={STYLES.text.semibold}>Phone Number</Text>
											</Column>
											<Column>
												<Text style={STYLES.text.normal}>
													{ticket.phone_number}
												</Text>
											</Column>
										</Row>
									</Section>
								</Column>
							</Row>
						</Section>
					</Section>

					<Text style={STYLES.elements.footer}>
						This is an automated email from SAN 2025. If you have any questions,
						please contact support.
					</Text>
				</Container>
			</Body>
		</Html>
	)
}

TicketEmailTemplate.PreviewProps = {
	ticket: {
		id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
		name: "Shaddam Amru Hasibuan",
		email: "shaddam.a.h@gmail.com",
		phone_number: "085156000000",
		event_participant_hotel_facility: null,
		event_participant_details: [
			{
				id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
				event_type: {
					id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
					name: "SAN Main Event",
				},
			},
		],
	},
} as TicketEmailProps

export default TicketEmailTemplate
