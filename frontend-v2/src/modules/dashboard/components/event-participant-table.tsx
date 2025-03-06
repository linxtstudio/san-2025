"use client"

import { LoadingSpinner } from "@/common/components/ui/loading-spinner"
import { cn } from "@/lib/utils"
import {
	type Participant,
	getParticipantList,
} from "@/modules/dashboard/service/get-participant"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import {
	type ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table"
import { useMemo, useState } from "react"

type EventParticipantTableProps = {
	title?: string
	search?: string
	event_type_id?: string
	city_id?: string
	is_verified?: boolean
	defaultFolded?: boolean
}

export function EventParticipantTable({
	title,
	defaultFolded = false,
	...filter
}: EventParticipantTableProps) {
	const [pagination, setPagination] = useState({ page: 1, per_page: 10 })
	const [isFolded, setIsFolded] = useState(defaultFolded)
	function toggleFolded() {
		setIsFolded((prev) => !prev)
	}

	const columns: ColumnDef<Participant>[] = useMemo(
		() => [
			{
				header: "No",
				accessorKey: "id",
				cell: (info) => (
					<span className="px-2">
						{info.row.index + 1 + (pagination.page - 1) * pagination.per_page}
					</span>
				),
			},
			{
				header: "Name",
				accessorKey: "event_participant.name",
			},
			{
				header: "Email",
				accessorKey: "event_participant.email",
			},
			{
				header: "Phone",
				accessorKey: "event_participant.phone_number",
			},
			{
				header: "Province",
				accessorKey: "event_participant.city.province.name",
			},
			{
				header: "City",
				accessorKey: "event_participant.city.name",
			},
			{
				header: "Status",
				accessorKey: "event_participant.is_verified",
				cell: (info) => (
					<span
						className={cn(
							"flex w-fit shrink-0 items-center justify-center whitespace-nowrap rounded-full px-2 py-1",
							info.row.original.event_participant.is_verified
								? "bg-green-500/5 text-green-500"
								: "text-neutral-400",
						)}
					>
						{info.row.original.event_participant.is_verified
							? "✔ Verified"
							: "Not Verified"}
					</span>
				),
			},
			{
				header: "Total Transaction",
				accessorKey: "event_participant.total_transaction",
				cell: (info) =>
					new Intl.NumberFormat("id-ID", {
						style: "currency",
						currency: "IDR",
						minimumFractionDigits: 0,
					}).format(info.row.original.event_participant.total_transaction || 0),
			},
			{
				header: "Payment Proof",
				accessorKey: "event_participant.transfer_receipt_url",
				cell: (info) => (
					<a
						href={info.row.original.event_participant.transfer_receipt_url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 hover:underline"
					>
						Download
					</a>
				),
			},
			{
				header: "",
				accessorKey: "event_participant.id",
				cell: (info) => (
					<button
						type="button"
						disabled={info.row.original.event_participant.is_verified}
						className="flex w-full max-w-24 cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-green-800 bg-green-700 px-4 py-2 text-white disabled:cursor-not-allowed disabled:border-neutral-800 disabled:bg-neutral-800 disabled:text-neutral-500"
					>
						{info.row.original.event_participant.is_verified
							? "Verified"
							: "Verify"}
					</button>
				),
			},
		],
		[pagination],
	)

	function handlePreviousPage() {
		setPagination((prev) => ({ ...prev, page: prev.page - 1 }))
	}

	function handleNextPage() {
		setPagination((prev) => ({ ...prev, page: prev.page + 1 }))
	}

	const {
		data: participantList,
		isPending,
		isFetching,
	} = useQuery({
		queryKey: ["get-participant-list", filter, pagination],
		queryFn: async () =>
			await getParticipantList({
				paginate: true,
				...filter,
				...pagination,
			}),
		placeholderData: keepPreviousData,
		refetchOnWindowFocus: false,
	})
	const isLastPage =
		participantList?.data?.data.current_page ===
		participantList?.data?.data.total_pages

	const isEmpty = participantList?.data.data.total === 0

	const table = useReactTable({
		columns,
		data: participantList?.data?.data.data || [],
		getCoreRowModel: getCoreRowModel(),
	})

	return (
		<div className="relative flex w-full flex-col gap-4">
			{(isPending || isFetching) && (
				<div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-primary-950/90">
					<LoadingSpinner />
				</div>
			)}
			{title ? (
				<div className="flex w-full items-center justify-between gap-8 rounded-xl bg-neutral-900 px-4 py-2 text-white">
					<h2 className="font-medium text-lg md:text-title-2 lg:text-title-1">
						{title}{" "}
						<span className="font-normal text-neutral-400">
							({participantList?.data.data.total})
						</span>
					</h2>
					{!isEmpty ? (
						<button
							className="cursor-pointer"
							type="button"
							onClick={toggleFolded}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className={cn(
									"h-8 w-8 transform transition-transform",
									isFolded && "rotate-180",
								)}
							>
								<title>Chevron Down Icon</title>
								<path d="m6 9 6 6 6-6" />
							</svg>
						</button>
					) : null}
				</div>
			) : null}
			{isEmpty ? (
				<p className="text-neutral-500">No data available</p>
			) : !isFolded ? (
				<>
					<div className="overflow-x-scroll">
						<table className="w-full table-auto border-collapse">
							<thead>
								{table.getHeaderGroups().map((headerGroup) => (
									<tr key={headerGroup.id}>
										{headerGroup.headers.map((header) => (
											<th
												key={header.id}
												colSpan={header.colSpan}
												className="px-4 pb-1 text-left first:pl-0 last:pr-0"
												style={{
													width: `${100 / headerGroup.headers.length}%`,
												}}
											>
												<div className="font-medium text-neutral-200 lg:text-headline">
													{flexRender(
														header.column.columnDef.header,
														header.getContext(),
													)}
												</div>
											</th>
										))}
									</tr>
								))}
							</thead>
							<tbody>
								{table.getRowModel().rows.map((row) => (
									<tr key={row.id} className="border-neutral-700 border-b">
										{row.getVisibleCells().map((cell) => (
											<td
												key={cell.id}
												className="w-fit px-4 py-4 text-neutral-400 text-sm first:pl-0 last:pr-0 lg:text-body"
											>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext(),
												)}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
					{participantList?.data.data.total_pages !== 1 ? (
						<div className="flex items-center justify-center gap-2">
							<button
								type="button"
								className="h-7 w-7 cursor-pointer rounded-full bg-brand-700 text-white disabled:cursor-not-allowed disabled:bg-neutral-800 disabled:text-neutral-500"
								onClick={() => handlePreviousPage()}
								disabled={participantList?.data.data.current_page === 1}
							>
								{"<"}
							</button>
							<button
								type="button"
								className="h-7 w-7 cursor-pointer rounded-full bg-brand-700 text-white disabled:cursor-not-allowed disabled:bg-neutral-800 disabled:text-neutral-500"
								onClick={() => handleNextPage()}
								disabled={isLastPage}
							>
								{">"}
							</button>
							<span className="flex items-center gap-1 text-neutral-200">
								<div>Page</div>
								<strong>
									{participantList?.data.data.current_page} of{" "}
									{participantList?.data.data.total_pages}
								</strong>
							</span>
						</div>
					) : null}
				</>
			) : null}
		</div>
	)
}
