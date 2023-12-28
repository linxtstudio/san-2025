"use client"

import { formatRupiah } from "@/common/helper/formatRupiah";

const MultipleCheck = ({ options, selectedValues, onChange, label = '' }) => {
    const handleCheckboxChange = (value) => {
        const updatedValues = selectedValues.includes(value)
            ? selectedValues.filter((val) => val.id !== value.id)
            : [...selectedValues, value];
        onChange(updatedValues);
    };

    return (
        <div className="flex flex-col">
            {label && <label className="text-xl mb-2"> {label} </label>}
            <div className="flex flex-col gap-[10px]">
                
                {options.map((option) => (
                    <label className="flex p-[10px] border-2 border-grey-3 has-[:checked]:border-green-1 rounded-[10px] gap-2 w-full items-center group" key={option.id}>
                        <div className="flex gap-2 items-center" >
                            <input
                                type="checkbox"
                                value={option.id}
                                checked={selectedValues.some((val) => val.id === option.id)}
                                onChange={() => handleCheckboxChange(option)}
                                className="checked:!bg-green-1 focus:ring-transparent"
                            />
                            <span>
                                {option.name}
                            </span>
                        </div>
                        <span className="ml-auto text-[10px] text-grey-1 group-[.text-green-1]:text-green-1">
                            {option.fee_nominal ? (option.type === 'donation' ? '*minimum donate ' + formatRupiah(option.fee_nominal) : '*join fee ' + formatRupiah(option.fee_nominal)) : 
                            'Free'}
                        </span>
                    </label>
                
                ))}
            </div>
        </div>
       
    );
};

export default MultipleCheck;
