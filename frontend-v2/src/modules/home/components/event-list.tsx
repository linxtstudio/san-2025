"use client"

import { Button } from "@/common/components/ui/button"
import { LoadingSpinner } from "@/common/components/ui/loading-spinner"
import { formatPrice } from "@/lib/utils"
import {
	type EventType,
	getEventTypeList,
} from "@/modules/home/service/get-event"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

export function EventList() {
	const { data, isPending } = useQuery({
		queryKey: ["get-event-type-list"],
		queryFn: async () => await getEventTypeList({ paginate: false }),
	})

	const eventTypeList = data?.data

	function renderLabel(event: EventType) {
		if (event.fee_type === "minimum_contribution") {
			return (
				<div className="mt-auto flex flex-col gap-1">
					<span className="font-semibold text-xs">
						Min Contribution of {formatPrice(event.fee_nominal)}*
					</span>
					<Link href="#minimum_contribution" className="text-brand-700 text-xs">
						Click for more info
					</Link>
				</div>
			)
		}

		if (event.fee_type === "ticket_fee") {
			return (
				<div className="mt-auto flex flex-col gap-1">
					<span className="font-semibold text-xs">
						Ticket Fee {formatPrice(event.fee_nominal)}
					</span>
				</div>
			)
		}

		if (event.fee_type === "registration_fee") {
			return (
				<div className="mt-auto flex flex-col gap-1">
					<span className="font-semibold text-xs">
						Registration Fee {formatPrice(event.fee_nominal)}
					</span>
				</div>
			)
		}

		if (event.fee_type === "by_contact") {
			return (
				<div className="mt-auto flex w-full items-center justify-between">
					<span className="font-semibold text-xs">Contact Us</span>
					<Link href="https://wa.me/62811212505?text=Hello, I would like to register for performance at Salsa Arisan Nyok 2025">
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Contact via WhatsApp</title>
							<path
								d="M17.0498 2.91006C16.133 1.98399 15.041 1.24973 13.8374 0.750111C12.6339 0.250494 11.3429 -0.00448012 10.0398 5.95696e-05C4.5798 5.95696e-05 0.129805 4.45006 0.129805 9.91006C0.129805 11.6601 0.589805 13.3601 1.4498 14.8601L0.0498047 20.0001L5.2998 18.6201C6.7498 19.4101 8.3798 19.8301 10.0398 19.8301C15.4998 19.8301 19.9498 15.3801 19.9498 9.92006C19.9498 7.27006 18.9198 4.78006 17.0498 2.91006ZM10.0398 18.1501C8.5598 18.1501 7.1098 17.7501 5.8398 17.0001L5.5398 16.8201L2.4198 17.6401L3.2498 14.6001L3.0498 14.2901C2.22755 12.977 1.79094 11.4593 1.7898 9.91006C1.7898 5.37006 5.4898 1.67006 10.0298 1.67006C12.2298 1.67006 14.2998 2.53006 15.8498 4.09006C16.6173 4.85402 17.2255 5.76272 17.6392 6.76348C18.0529 7.76425 18.2638 8.83717 18.2598 9.92006C18.2798 14.4601 14.5798 18.1501 10.0398 18.1501ZM14.5598 11.9901C14.3098 11.8701 13.0898 11.2701 12.8698 11.1801C12.6398 11.1001 12.4798 11.0601 12.3098 11.3001C12.1398 11.5501 11.6698 12.1101 11.5298 12.2701C11.3898 12.4401 11.2398 12.4601 10.9898 12.3301C10.7398 12.2101 9.9398 11.9401 8.9998 11.1001C8.2598 10.4401 7.7698 9.63006 7.6198 9.38006C7.4798 9.13006 7.5998 9.00006 7.7298 8.87006C7.8398 8.76006 7.9798 8.58006 8.0998 8.44006C8.2198 8.30006 8.2698 8.19006 8.3498 8.03006C8.4298 7.86006 8.3898 7.72006 8.3298 7.60006C8.2698 7.48006 7.7698 6.26006 7.5698 5.76006C7.3698 5.28006 7.1598 5.34006 7.0098 5.33006H6.5298C6.3598 5.33006 6.0998 5.39006 5.8698 5.64006C5.6498 5.89006 5.0098 6.49006 5.0098 7.71006C5.0098 8.93006 5.89981 10.1101 6.0198 10.2701C6.1398 10.4401 7.7698 12.9401 10.2498 14.0101C10.8398 14.2701 11.2998 14.4201 11.6598 14.5301C12.2498 14.7201 12.7898 14.6901 13.2198 14.6301C13.6998 14.5601 14.6898 14.0301 14.8898 13.4501C15.0998 12.8701 15.0998 12.3801 15.0298 12.2701C14.9598 12.1601 14.8098 12.1101 14.5598 11.9901Z"
								fill="white"
							/>
						</svg>
					</Link>
				</div>
			)
		}
	}

	return (
		<div className="z-1 flex w-full flex-col gap-6 rounded-2xl border border-neutral-700 bg-primary-950/50 px-8 py-8 backdrop-blur-2xl lg:px-16">
			<div className="flex w-full flex-col gap-3 text-white">
				<p className="font-semibold text-title-1 lg:text-display">Join Us!</p>
				<p className="max-w-120 text-neutral-200 text-sm/relaxed lg:text-body">
					Kindly choose the event(s) you'd like to participate in.
				</p>
			</div>
			<div className="flex w-full flex-wrap items-stretch justify-center gap-5">
				{isPending ? (
					<LoadingSpinner />
				) : (
					eventTypeList?.data.map((event) => (
						<div
							className="flex h-auto min-h-50 w-full xs:max-w-64 flex-col gap-2 rounded-xl border border-brand-700 bg-primary-950/75 p-6 text-white"
							key={event.name}
						>
							<p className="font-semibold text-title-2">{event.name}</p>
							<p className="pb-4 text-neutral-400 text-xs/relaxed">
								{event.description}
							</p>
							{renderLabel(event)}
						</div>
					))
				)}
			</div>
			<div className="flex items-center justify-center">
				<Button href="/register">Register</Button>
			</div>
		</div>
	)
}
