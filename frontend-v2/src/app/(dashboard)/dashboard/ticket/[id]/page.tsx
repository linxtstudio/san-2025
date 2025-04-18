import { Button } from "@/common/components/ui/button"
import { DashboardRegisterTicketCard } from "@/modules/dashboard/components/dashboard-register-ticket-card"

export default async function DashboardTicket({
	params,
}: { params: Promise<{ id: string }> }) {
	const { id } = await params

	return (
		<main className="flex w-full flex-col bg-primary-950 print:bg-white">
			<div className="relative flex h-full min-h-screen w-full flex-col gap-8 overflow-x-hidden">
				<div className="z-1 flex w-full items-center justify-center">
					<div className="flex w-full max-w-screen-2xl flex-col gap-16 px-8 py-16 md:px-16 print:p-0">
						<div className="flex w-full flex-col gap-5">
							<div className="flex w-full flex-col gap-8">
								<Button
									variant="secondary"
									className="mb-8 w-fit print:hidden"
									href="/dashboard"
								>
									Back to Dashboard
								</Button>
								<DashboardRegisterTicketCard participantId={id} />
							</div>
						</div>
					</div>
				</div>
				<img
					src="/graphic/footer.svg"
					alt=""
					className="absolute bottom-0 w-full print:hidden"
				/>
			</div>
		</main>
	)
}
