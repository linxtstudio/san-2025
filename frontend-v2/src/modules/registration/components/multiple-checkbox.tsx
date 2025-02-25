"use client"

import { formatRupiah } from "@/common/helper/formatRupiah"
import clsx from "clsx"
import Input from "../Input/Input"

const MultipleCheck = ({
	options,
	selectedValues,
	onChange,
	label = "",
	form,
	setForm,
}) => {
	const handleCheckboxChange = (value) => {
		const updatedValues = selectedValues.includes(value)
			? selectedValues.filter((val) => val.id !== value.id)
			: [...selectedValues, value]
		onChange(updatedValues)
	}

	return (
		<div className="flex flex-col">
			{label && <label className="mb-2 text-xl"> {label} </label>}
			<div className="flex flex-col gap-[10px] ">
				{options.map((option) => (
					<>
						<label
							className={clsx(
								"group flex w-full items-center gap-2 rounded-[10px] border-2 border-grey-3 p-[10px]  has-[:checked]:border-green-1 has-[:disabled]:border-neutral-200 has-[:disabled]:bg-neutral-200",
							)}
							key={option.id}
						>
							<div className="flex items-center gap-2">
								<input
									type="checkbox"
									value={option.id}
									checked={selectedValues.some((val) => val.id === option.id)}
									onChange={() => handleCheckboxChange(option)}
									className="checked:!bg-green-1 focus:ring-transparent disabled:bg-neutral-200 checked:disabled:!bg-neutral-200"
									disabled={
										option.fee_type === "registration_fee" &&
										!selectedValues.some(
											(val) => val.fee_type === "minimum_contribution",
										)
									}
								/>
								<span>{option.name}</span>
							</div>
							<span className="ml-auto text-[11px] text-grey-1 group-[.text-green-1]:text-green-1">
								{option.fee_nominal
									? option.fee_type === "minimum_contribution"
										? "*Minimum Contribution " +
											formatRupiah(option.fee_nominal)
										: "" + formatRupiah(option.fee_nominal)
									: "Free"}
							</span>
						</label>
						{option.fee_type === "minimum_contribution" &&
						selectedValues.some((val) => val.id === option.id) ? (
							<Input
								label="Please write your contribution (IDR) "
								className="mb-6"
								inputProps={{
									type: "number",
									placeholder: `Min: ${formatRupiah(option.fee_nominal)}`,
									value: form.minContribution,
									defaultValue: option.fee_nominal,
								}}
								onInput={(value) => setForm({ ...form, contribution: value })}
							/>
						) : null}
					</>
				))}
			</div>
		</div>
	)
}

export default MultipleCheck
