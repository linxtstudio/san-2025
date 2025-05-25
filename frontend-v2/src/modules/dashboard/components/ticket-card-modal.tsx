import { Button } from "@/common/components/ui/button"
import { LoadingSpinner } from "@/common/components/ui/loading-spinner"
import { getParticipantById } from "@/modules/dashboard/service/get-participant"
import {
	unverifyParticipant,
	verifyParticipant,
} from "@/modules/dashboard/service/verify-participant"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { toast } from "sonner"
import { Drawer } from "vaul"

type TicketCardModalProps = {
	participantId: string
	open: boolean
	onOpenChange: (open: boolean) => void
}

export function TicketCardModal({
	participantId,
	open,
	onOpenChange,
}: TicketCardModalProps) {
	const queryClient = useQueryClient()
	const [isSubmitting, setIsSubmitting] = useState(false)

	const { data, isPending, refetch } = useQuery({
		queryKey: ["get-participant", participantId],
		queryFn: async () => await getParticipantById(participantId),
		refetchOnWindowFocus: false,
		retry: false,
	})
	const ticket = data?.data.data

	async function handleVerifyTicket(verify: boolean) {
		setIsSubmitting(true)
		try {
			if (verify) {
				await verifyParticipant({ id: participantId })
			} else {
				await unverifyParticipant({ id: participantId })
			}
			toast.success(
				verify
					? "Ticket verified successfully"
					: "Ticket unverified successfully",
			)
			onOpenChange(false)
			refetch()
			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === "get-participant-list",
			})
		} catch (error) {
			toast.error(
				verify ? "Failed to verify ticket" : "Failed to unverify ticket",
			)
		} finally {
			setIsSubmitting(false)
		}
	}

	function renderTicket() {
		if (isPending)
			return (
				<span className="flex py-4">
					<LoadingSpinner />
				</span>
			)
		if (!ticket) {
			toast.error("Ticket not found")
			onOpenChange(false)
			return
		}

		return (
			<div className="flex flex-col gap-4">
				<span className="text-neutral-400">
					{ticket.event_participant_details
						.map((event) => event.event_type.name)
						.join(", ")}
				</span>
				<div className="grid w-full grid-cols-1 gap-2 text-body text-neutral-200 md:grid-cols-2">
					<span className="font-semibold">Name</span>
					<span>{ticket.name}</span>
					<span className="font-semibold">Email</span>
					<span>{ticket.email}</span>
					<span className="font-semibold">Phone Number</span>
					<span>{ticket.phone_number}</span>
				</div>
				<a
					href={ticket.transfer_receipt_url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:underline"
				>
					Download Transfer Receipt
				</a>
				<div className="mt-4 flex items-center gap-2">
					<Button
						className="w-fit"
						disabled={isSubmitting || ticket.is_verified}
						onClick={() => handleVerifyTicket(true)}
					>
						{isSubmitting ? <LoadingSpinner className="text-current" /> : null}
						{ticket.is_verified
							? "Ticked is already verified"
							: "Verify Ticket"}
					</Button>
					{ticket.is_verified && (
						<Button
							className="w-fit"
							disabled={isSubmitting}
							onClick={() => handleVerifyTicket(false)}
						>
							✖ Unverify
						</Button>
					)}
				</div>
			</div>
		)
	}

	return (
		<Drawer.Root open={open} onOpenChange={onOpenChange}>
			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 z-1000 bg-neutral-950/50" />
				<Drawer.Content className="fixed right-0 bottom-0 left-0 z-1001 mt-24 flex h-fit flex-col rounded-t-2xl bg-neutral-950 outline-none">
					<div className="flex-1 rounded-t-2xl bg-primary-950 p-4 pb-8">
						<div
							aria-hidden
							className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-neutral-900"
						/>
						<div className="mx-auto flex max-w-md flex-col gap-4">
							<Drawer.Title className="font-medium text-white lg:text-headline">
								Ticket Detail
							</Drawer.Title>
							{renderTicket()}
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	)
}
