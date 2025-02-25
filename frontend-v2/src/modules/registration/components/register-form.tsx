"use client"

import { LoadingSpinner } from "@/common/components/ui/loading-spinner"
import { cn, formatPrice } from "@/lib/utils"
import { getEventTypeList } from "@/modules/home/service/get-event"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQuery } from "@tanstack/react-query"
import { Fragment } from "react"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

const registerFormSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	phone_number: z.string(),
	city_id: z.string(),
	transfer_receipt_image: z.string(),
	event_type_ids: z.array(
		z.object({
			id: z.string(),
			name: z.string(),
			description: z.string().nullable(),
			fee_type: z.string(),
			fee_nominal: z.number(),
		}),
	),
	contribution: z.number(),
})

export type FormData = z.infer<typeof registerFormSchema>

export function RegisterForm() {
	const { data, isPending } = useQuery({
		queryKey: ["get-event-type-list"],
		queryFn: async () => await getEventTypeList(),
	})

	const eventTypeList =
		data?.data.data.data.filter((event) => event.fee_type !== "by_contact") ??
		[]

	const { control, register, watch } = useForm<FormData>({
		resolver: async (data, context, options) => {
			return zodResolver(registerFormSchema)(data, context, options)
		},
		defaultValues: {
			event_type_ids: [],
		},
	})

	if (isPending) {
		return <LoadingSpinner />
	}

	return (
		<form className="grid w-full grid-cols-2 gap-16">
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-4">
					<p className="text-headline text-white">
						Choose the event(s) you'd like to participate in
					</p>
					<Controller
						control={control}
						name="event_type_ids"
						render={({ field: { value, onChange } }) => {
							const handleCheckboxChange = (
								eventItem: (typeof eventTypeList)[number],
							) => {
								const isChecked = value.some((val) => val.id === eventItem.id)
								const updatedValues = isChecked
									? value.filter((val) => val.id !== eventItem.id)
									: [...value, eventItem]
								onChange(updatedValues)
							}

							return (
								<div className="flex flex-col gap-2">
									{eventTypeList?.map((event) => {
										const isChecked = value.some((val) => val.id === event.id)
										const isDisabled =
											event.fee_type === "registration_fee" &&
											!value.some(
												(val) => val.fee_type === "minimum_contribution",
											)
										return (
											<Fragment key={event.id}>
												<label
													className={cn(
														"flex w-full cursor-pointer justify-between rounded-xl border-2 border-neutral-500 p-3 text-neutral-500 shadow-md shadow-neutral-400/5",
														"has-[:disabled]:cursor-default has-[:disabled]:border-neutral-900 has-[:disabled]:bg-neutral-900 has-[:disabled]:text-neutral-700 has-[:disabled]:shadow-none",
														"has-[:checked]:border-brand-700 has-[:checked]:text-neutral-200",
													)}
												>
													<div className="flex items-center gap-2">
														<input
															type="checkbox"
															value={event.id}
															checked={isChecked}
															onChange={() => handleCheckboxChange(event)}
															className="rounded-sm bg-transparent accent-brand-700 checked:bg-brand-700 focus:ring-0"
															disabled={isDisabled}
														/>
														<span className="select-none">{event.name}</span>
													</div>
													<span className="select-none text-xs">
														{event.fee_nominal
															? event.fee_type === "minimum_contribution"
																? `*Minimum Contribution ${formatPrice(event.fee_nominal)}`
																: formatPrice(event.fee_nominal)
															: "Free"}
													</span>
												</label>
												{event.fee_type === "minimum_contribution" &&
												value.some((val) => val.id === event.id) ? (
													<div className="flex flex-col gap-4 py-4">
														<p className="text-headline text-white">
															Please write your contribution (IDR)
														</p>
														<input
															{...register("contribution")}
															className="rounded-xl border-2 border-neutral-500 bg-primary-950 p-3 text-neutral-200 shadow-md shadow-neutral-400/5 placeholder:text-neutral-800 focus:ring-0"
															placeholder="350.000.000"
														/>
													</div>
												) : null}
											</Fragment>
										)
									})}
								</div>
							)
						}}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-4">
					<p className="text-headline text-white">Name</p>
					<input
						{...register("name")}
						className="rounded-xl border-2 border-neutral-500 bg-primary-950 p-3 text-neutral-200 shadow-md shadow-neutral-400/5 placeholder:text-neutral-800 focus:ring-0"
						placeholder="Enter your fullname"
					/>
				</div>
				<div className="flex flex-col gap-4">
					<p className="text-headline text-white">Email</p>
					<input
						{...register("email")}
						className="rounded-xl border-2 border-neutral-500 bg-primary-950 p-3 text-neutral-200 shadow-md shadow-neutral-400/5 placeholder:text-neutral-800 focus:ring-0"
						placeholder="example@mail.com"
					/>
				</div>
				<div className="flex flex-col gap-4">
					<p className="text-headline text-white">Phone Number</p>
					<input
						{...register("phone_number")}
						className="rounded-xl border-2 border-neutral-500 bg-primary-950 p-3 text-neutral-200 shadow-md shadow-neutral-400/5 placeholder:text-neutral-800 focus:ring-0"
						placeholder="+62 800 0000 0000"
					/>
				</div>
			</div>
		</form>
	)
}
