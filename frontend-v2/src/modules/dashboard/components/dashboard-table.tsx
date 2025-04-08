"use client"

import { LoadingSpinner } from "@/common/components/ui/loading-spinner"
import { cn } from "@/lib/utils"
import { EventParticipantTable } from "@/modules/dashboard/components/event-participant-table"
import { getTotalParticipantByCity } from "@/modules/dashboard/service/get-participant"
import { getEventTypeList } from "@/modules/home/service/get-event"
import { useQuery } from "@tanstack/react-query"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const GroupByFilter = {
	ALL: "none",
	CITY: "city",
	STATUS: "status",
}

export function DashboardTable() {
	const router = useRouter()
	const pathname = usePathname()
	const params = useSearchParams()

	const [filter, setFilter] = useState({
		search: "",
		event_type_id: "",
		group_by: params.get("group") || GroupByFilter.ALL,
	})

	const [debouncedSearch, setDebouncedSearch] = useState(filter.search)
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedSearch(filter.search)
		}, 300)

		return () => {
			clearTimeout(timer)
		}
	}, [filter.search])

	const {
		data: eventTypeListData,
		isPending: isPendingEventTypeList,
		isSuccess: isSuccessEventTypeList,
	} = useQuery({
		queryKey: ["get-event-type-list"],
		queryFn: async () => await getEventTypeList({ paginate: false }),
	})
	const eventTypeList =
		eventTypeListData?.data.data.filter(
			(event) => event.fee_type !== "by_contact",
		) ?? []

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (eventTypeList.length > 0) {
			setFilter((prev) => ({
				...prev,
				event_type_id: eventTypeList[0].id,
			}))
		}
	}, [isSuccessEventTypeList])

	const {
		data: totalParticipantByCityList,
		isPending: isPendingTotalParticipantByCityList,
	} = useQuery({
		queryKey: ["get-participant-list-by-city", filter.event_type_id],
		queryFn: async () =>
			await getTotalParticipantByCity({ event_type_id: filter.event_type_id }),
		enabled: params.get("group") === GroupByFilter.CITY,
	})

	if (isPendingEventTypeList) {
		return (
			<span className="px-8 py-8 2xl:px-16">
				<LoadingSpinner />
			</span>
		)
	}

	function renderTable() {
		const filterParams = {
			search: debouncedSearch,
			event_type_id: filter.event_type_id,
			group_by: filter.group_by,
		}

		switch (filter.group_by) {
			case GroupByFilter.CITY:
				if (isPendingTotalParticipantByCityList) {
					return (
						<span className="flex w-full items-center justify-center px-8">
							<LoadingSpinner />
						</span>
					)
				}

				return (
					<div className="flex w-full flex-col gap-8">
						{totalParticipantByCityList?.data.data.map((item, index) => (
							<EventParticipantTable
								{...filterParams}
								title={item.city.name}
								key={item.city.name}
								city_id={String(item.city.id)}
								defaultFolded={index > 0}
							/>
						))}
					</div>
				)
			case GroupByFilter.STATUS:
				return (
					<div className="flex w-full flex-col gap-8">
						{["Not Verified", "Verified"].map((status, index) => (
							<EventParticipantTable
								{...filterParams}
								title={status}
								key={status}
								is_verified={status === "Verified"}
								defaultFolded={index > 0}
							/>
						))}
					</div>
				)
			default:
				return <EventParticipantTable {...filterParams} />
		}
	}

	return (
		<div className="z-1 flex w-full flex-col-reverse justify-between gap-6 rounded-2xl border-neutral-700 border-t bg-primary-950/50 px-8 py-8 backdrop-blur-2xl lg:flex-row 2xl:px-16">
			<div className="flex w-full flex-col gap-8">
				<div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div className="flex w-full flex-col gap-4">
						<p className="text-headline text-white">Search</p>
						<input
							type="search"
							className="w-full rounded-xl border-2 border-neutral-500 bg-primary-950 p-3 text-neutral-200 placeholder:text-neutral-800 focus:ring-0"
							placeholder="Search participants"
							value={filter.search}
							onChange={(e) =>
								setFilter((prev) => ({
									...prev,
									search: e.target.value,
								}))
							}
						/>
					</div>
					<div className="flex w-full flex-col gap-4">
						<p className="text-headline text-white">Event</p>
						<select
							aria-label="Province"
							className="w-full rounded-xl border-2 border-neutral-500 bg-primary-950 p-3 text-neutral-200 placeholder:text-neutral-800 focus:ring-0 disabled:border-neutral-800 disabled:bg-neutral-900 disabled:text-neutral-700"
							disabled={isPendingEventTypeList}
							value={filter.event_type_id}
							onChange={(e) =>
								setFilter((prev) => ({
									...prev,
									event_type_id: e.target.value,
								}))
							}
						>
							<>
								<option value="" disabled>
									Choose Event
								</option>
								{eventTypeList?.map((event) => (
									<option key={event.id} value={event.id}>
										{event.name}
									</option>
								))}
							</>
						</select>
					</div>
					<div className="col-span-1 flex flex-col gap-4 md:col-span-2 lg:col-span-1">
						<p className="text-headline text-white">Group By</p>
						<div className="flex w-full overflow-hidden rounded-xl border-2 border-brand-700 lg:col-span-1 lg:max-w-md">
							{Object.values(GroupByFilter).map((groupBy) => (
								<button
									type="button"
									key={groupBy}
									className={cn(
										"flex-1 px-4 py-3 transition-colors",
										filter.group_by === groupBy
											? "bg-brand-700 text-white"
											: "cursor-pointer bg-primary-950 text-neutral-200",
									)}
									onClick={() => {
										setFilter((prev) => ({
											...prev,
											group_by: groupBy,
										}))
										const searchParams = new URLSearchParams(params.toString())
										if (groupBy === GroupByFilter.ALL) {
											searchParams.delete("group")
										} else {
											searchParams.set("group", groupBy)
										}
										router.replace(`${pathname}?${searchParams.toString()}`, {
											scroll: false,
										})
									}}
								>
									{groupBy.charAt(0).toUpperCase() + groupBy.slice(1)}
								</button>
							))}
						</div>
					</div>
				</div>
				{renderTable()}
			</div>
		</div>
	)
}
