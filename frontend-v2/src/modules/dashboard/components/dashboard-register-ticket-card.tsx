"use client"
import { LoadingSpinner } from "@/common/components/ui/loading-spinner"
import { getParticipantById } from "@/modules/dashboard/service/get-participant"
import { RegisterTicketCard } from "@/modules/registration/components/register-ticket-card"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export function DashboardRegisterTicketCard({
	participantId,
}: { participantId: string }) {
	const router = useRouter()
	const { data, isPending } = useQuery({
		queryKey: ["get-participant", participantId],
		queryFn: async () => await getParticipantById(participantId),
		refetchOnWindowFocus: false,
		retry: false,
	})
	const ticket = data?.data.data

	if (isPending) return <LoadingSpinner />

	if (!ticket) {
		toast.error("Error fetching ticket, please contact IT support", {
			id: participantId,
		})
		router.replace("/dashboard")
		return
	}

	return <RegisterTicketCard adminLabel key={ticket?.id} ticket={ticket} />
}
