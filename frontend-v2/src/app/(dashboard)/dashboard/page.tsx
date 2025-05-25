import { Button } from "@/common/components/ui/button"
import { DashboardHeader } from "@/modules/dashboard/components/dashboard-header"
import { DashboardTable } from "@/modules/dashboard/components/dashboard-table"
import { TotalTransactionCard } from "@/modules/dashboard/components/total-transaction-card"

export default function Dashboard() {
	return (
		<main className="flex w-full flex-col bg-primary-950">
			<DashboardHeader />
			<div className="relative flex w-full flex-col gap-8 overflow-x-hidden">
				<div className="z-1 flex w-full items-center justify-center">
					<div className="flex w-full flex-col items-center justify-between">
						<div className="flex w-full flex-col gap-8">
							<div className="flex w-full flex-col-reverse items-end justify-between gap-8 px-8 pt-8 sm:flex-row md:px-16 md:pt-16">
								<TotalTransactionCard />
								<Button href="/dashboard/scan" className="w-full sm:w-fit">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<title>Scan Icon</title>
										<path d="M3 7V5a2 2 0 0 1 2-2h2" />
										<path d="M17 3h2a2 2 0 0 1 2 2v2" />
										<path d="M21 17v2a2 2 0 0 1-2 2h-2" />
										<path d="M7 21H5a2 2 0 0 1-2-2v-2" />
										<path d="M8 7v10" />
										<path d="M12 7v10" />
										<path d="M17 7v10" />
									</svg>
									Scan Ticket
								</Button>
							</div>
							<DashboardTable />
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
