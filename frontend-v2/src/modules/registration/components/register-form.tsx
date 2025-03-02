"use client"

import { Button } from "@/common/components/ui/button"
import { LoadingSpinner } from "@/common/components/ui/loading-spinner"
import { getCityList } from "@/common/service/get-city"
import { getProvinceList } from "@/common/service/get-province"
import { uploadFile } from "@/common/service/upload-file"
import { setRegisterStorage } from "@/lib/storage"
import { cn, formatFileSize, formatPrice } from "@/lib/utils"
import { getEventTypeList } from "@/modules/home/service/get-event"
import { registerEvent } from "@/modules/registration/service/register-event"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Fragment } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const PAYMENT_INFORMATION = {
	name: "Mirawati",
	number: "8271372183",
}

const MAX_FILE_SIZE = 2 * 1024 * 1024
const registerFormSchema = z.object({
	name: z.string().min(1, "Fullname is required"),
	email: z.string().min(1, "Email is required").email("Invalid email format"),
	phone_number: z
		.string()
		.min(1, "Phone number is required")
		.regex(/^\d+$/, "Phone number must contain only digits"),
	province_id: z.string().min(1, "Province is required"),
	city_id: z.string().min(1, "City is required"),
	transfer_receipt_image:
		typeof window === "undefined"
			? z.any()
			: z.instanceof(File, {
					message: "Payment proof is required",
				}),
	event_type_ids: z
		.array(
			z.object({
				id: z.string(),
				name: z.string(),
				description: z.string().nullable(),
				fee_type: z.string(),
				fee_nominal: z.number(),
			}),
		)
		.min(1, "You must choose at least one event"),
	contribution: z
		.string()
		.min(1, "Contribution is required")
		.regex(/^\d+$/, "Contribution must contain only digits"),
})

export type FormData = z.infer<typeof registerFormSchema>

function ErrorMessage({ error }: { error: string | undefined }) {
	return error ? <span className="text-red-400 text-sm">{error}</span> : null
}

export function RegisterForm() {
	const router = useRouter()
	const { data, isPending } = useQuery({
		queryKey: ["get-event-type-list"],
		queryFn: async () => await getEventTypeList({ paginate: false }),
	})
	const eventTypeList =
		data?.data.data.filter((event) => event.fee_type !== "by_contact") ?? []

	const { data: provinceList } = useQuery({
		queryKey: ["get-province-list"],
		queryFn: async () => await getProvinceList({ paginate: false }),
	})

	const {
		formState: { errors, isSubmitting },
		handleSubmit,
		control,
		register,
		watch,
		setValue,
	} = useForm<FormData>({
		resolver: async (data, context, options) => {
			return zodResolver(registerFormSchema)(data, context, options)
		},
		mode: "onChange",
		defaultValues: {
			event_type_ids: [],
		},
	})

	const selectedProvince = watch("province_id")
	const selectedEventTypes = watch("event_type_ids")

	const { data: cityList } = useQuery({
		queryKey: ["get-city-list", selectedProvince],
		queryFn: async () =>
			await getCityList({
				province_id: selectedProvince,
				paginate: false,
			}),
		enabled: !!provinceList?.data && !!selectedProvince,
	})

	function getTotalFee() {
		let total = 0
		const contribution = Number(watch("contribution") || 0)

		for (const value of selectedEventTypes) {
			if (value.fee_type === "minimum_contribution") {
				total += Math.max(value.fee_nominal, contribution)
			} else {
				total += value.fee_nominal
			}
		}
		return total
	}

	async function handleSubmitRegister(formValue: FormData) {
		const uploadFileFormData = new FormData()
		uploadFileFormData.append("file", formValue.transfer_receipt_image)

		try {
			const uploadedFile = await uploadFile(uploadFileFormData)
			const registerPayload = {
				...formValue,
				event_type_ids: formValue.event_type_ids.map((event) => event.id),
				transfer_receipt_image: uploadedFile.data.data.filename,
				event_participant_hotel_facility: null,
			}

			const registerResponse = await registerEvent(registerPayload)
			if (registerResponse.data.data) {
				toast.success("Registration successful")
				setRegisterStorage(registerResponse.data.data)
				router.push("/register/tickets")
			}
		} catch (error) {
			toast.error(
				"Failed to upload file. Please check your connection and try again",
			)
			return
		}
	}

	return (
		<form
			onSubmit={handleSubmit(handleSubmitRegister)}
			className="grid w-full grid-cols-1 gap-16 lg:grid-cols-2"
		>
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

							if (isPending) {
								return <LoadingSpinner />
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
															placeholder={String(event.fee_nominal)}
														/>
														<ErrorMessage
															error={errors.contribution?.message}
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
					<ErrorMessage error={errors.event_type_ids?.message} />
				</div>
			</div>
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-4">
					<p className="text-headline text-white">Name</p>
					<input
						{...register("name")}
						className="rounded-xl border-2 border-neutral-500 bg-primary-950 p-3 text-neutral-200 placeholder:text-neutral-800 focus:ring-0"
						placeholder="Enter your fullname"
					/>
					<ErrorMessage error={errors.name?.message} />
				</div>
				<div className="flex flex-col gap-4">
					<p className="text-headline text-white">Email</p>
					<input
						{...register("email")}
						className="rounded-xl border-2 border-neutral-500 bg-primary-950 p-3 text-neutral-200 placeholder:text-neutral-800 focus:ring-0"
						placeholder="example@mail.com"
					/>
					<ErrorMessage error={errors.email?.message} />
				</div>
				<div className="flex flex-col gap-4">
					<p className="text-headline text-white">Phone Number</p>
					<input
						{...register("phone_number")}
						className="rounded-xl border-2 border-neutral-500 bg-primary-950 p-3 text-neutral-200 placeholder:text-neutral-800 focus:ring-0"
						placeholder="+62 800 0000 0000"
					/>
					<ErrorMessage error={errors.phone_number?.message} />
				</div>
				<div className="flex flex-col gap-4">
					<p className="text-headline text-white">Province</p>
					<select
						{...register("province_id", {
							onChange: () => {
								setValue("city_id", "") // Reset city_id when province changes
							},
						})}
						aria-label="Province"
						className="rounded-xl border-2 border-neutral-500 bg-primary-950 p-3 text-neutral-200 placeholder:text-neutral-800 focus:ring-0"
						defaultValue=""
					>
						<>
							<option value="" disabled>
								Choose Province
							</option>
							{provinceList?.data.data.map((province) => (
								<option key={province.id} value={province.id}>
									{province.name}
								</option>
							))}
						</>
					</select>
					<ErrorMessage error={errors.province_id?.message} />
				</div>
				<div className="flex flex-col gap-4">
					<p className="text-headline text-white">City</p>
					<select
						{...register("city_id")}
						aria-label="Province"
						className="rounded-xl border-2 border-neutral-500 bg-primary-950 p-3 text-neutral-200 placeholder:text-neutral-800 focus:ring-0 disabled:border-neutral-800 disabled:bg-neutral-900 disabled:text-neutral-700"
						disabled={!selectedProvince}
						defaultValue=""
					>
						<>
							<option value="" disabled>
								{!selectedProvince ? "Choose Province first" : "Choose City"}
							</option>
							{cityList?.data.data.map((city) => (
								<option key={city.id} value={city.id}>
									{city.name}
								</option>
							))}
						</>
					</select>
					<ErrorMessage error={errors.city_id?.message} />
				</div>
				<div className="flex flex-col gap-4">
					<p className="text-headline text-white">Payment Proof</p>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-1">
							<span className="text-neutral-500">
								Amount to be paid (minimum)
							</span>
							<p className="text-headline text-white">
								{getTotalFee().toLocaleString("id-ID", {
									style: "currency",
									currency: "IDR",
								})}
							</p>
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-neutral-500">Payment information</span>
							<p className="text-headline text-white">
								{PAYMENT_INFORMATION.name}
							</p>
							<div className="flex items-center gap-2 py-2">
								<Image priority src="/bca.svg" width={50} height={50} alt="" />
								<p className="font-semibold text-headline text-white">
									{PAYMENT_INFORMATION.number}
								</p>
							</div>
							<span className="text-neutral-500 text-sm">
								*please put your Name-SAN on the transfer news
							</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<Controller
						control={control}
						name="transfer_receipt_image"
						render={({ field: { onChange, value } }) => (
							<div className="relative">
								<label className="flex cursor-pointer items-center justify-between rounded-xl border-2 border-neutral-500 bg-primary-950 p-3 px-4 text-neutral-500 shadow-md shadow-neutral-400/5 hover:border-brand-700 hover:text-white">
									<div className="flex flex-col gap-1">
										<span>
											{value ? "Change File" : "Upload Payment Proof"}
										</span>
										{value ? (
											<span className="text-white text-xs">
												{value?.name} - {formatFileSize(value.size)}
											</span>
										) : (
											<span className="text-neutral-600 text-xs">
												JPG, PNG or PDF up to 2MB
											</span>
										)}
									</div>
									<input
										type="file"
										className="hidden"
										accept="image/jpeg, image/png, application/pdf"
										onChange={(e) => {
											const file = e.target.files?.[0]
											if (file) {
												if (file.size > MAX_FILE_SIZE) {
													toast.error("File size is too large")
													return
												}
												onChange(file)
											}
										}}
									/>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>Upload Icon</title>
										<path
											d="M7 12V3.85L4.4 6.45L3 5L8 0L13 5L11.6 6.45L9 3.85V12H7ZM2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196666 15.0217 0.000666667 14.5507 0 14V11H2V14H14V11H16V14C16 14.55 15.8043 15.021 15.413 15.413C15.0217 15.805 14.5507 16.0007 14 16H2Z"
											fill="currentColor"
										/>
									</svg>
								</label>
							</div>
						)}
					/>
					<ErrorMessage
						error={errors.transfer_receipt_image?.message as string}
					/>
				</div>
				<Button className="ml-auto w-fit" type="submit" disabled={isSubmitting}>
					{isSubmitting ? <LoadingSpinner className="text-current" /> : null}
					Register
				</Button>
			</div>
		</form>
	)
}
