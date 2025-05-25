import { Button } from "@/common/components/ui/button"
import { DashboardHeader } from "@/modules/dashboard/components/dashboard-header"
import { TicketScanner } from "@/modules/dashboard/components/ticket-scanner"
import type { IDetectedBarcode } from "@yudiel/react-qr-scanner"

export default function DashboardScan() {
	function handleScan(result: IDetectedBarcode) {
		console.log(result)
	}

	return (
		<main className="flex w-full flex-col bg-primary-950">
			<DashboardHeader />
			<div className="z-1 flex-col flex w-full items-center justify-center">
				<div className="flex w-full max-w-screen-2xl flex-col gap-16 px-8 py-8 md:px-16 md:py-16 print:p-0">
					<div className="flex w-full flex-col gap-5">
						<div className="flex w-full flex-col gap-8">
							<Button
								variant="secondary"
								className="mb-8 w-fit print:hidden"
								href="/dashboard"
							>
								Back to Dashboard
							</Button>
						</div>
					</div>
				</div>
				<div className="flex w-full flex-col items-center gap-8">
					<TicketScanner />
				</div>
			</div>
		</main>
	)
}
