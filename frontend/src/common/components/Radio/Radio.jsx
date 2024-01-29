'use client';

import { formatRupiah } from '@/common/helper/formatRupiah';
import Input from '../Input/Input';
import clsx from 'clsx';

const Radio = ({
  options,
  selectedValues,
  onChange,
  label = '',
  form,
  name,
  setForm,
}) => {
  const handleCheckboxChange = (value) => {
    const updatedValues = value;
    onChange(updatedValues);
  };

  return (
    <div className="flex flex-col">
      {label && <label className="mb-2 text-xl"> {label} </label>}
      <div className="flex flex-col gap-[10px] ">
        {options.map((option) => (
          <>
            <label
              className={clsx(
                'has group flex w-full flex-col gap-2 rounded-[10px] border-2 border-grey-3  p-[10px] has-[:checked]:border-green-1 has-[:disabled]:border-neutral-200 has-[:disabled]:bg-neutral-200 has-[:checked]:!text-green-3'
              )}
              key={option.id}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name={name}
                  value={option.id}
                  onChange={() => handleCheckboxChange(option)}
                  className=" checked:!bg-green-3 focus:ring-transparent disabled:bg-neutral-200 checked:disabled:!bg-neutral-200"
                  disabled={!option.room_availability}
                />
                <span>{option.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-grey-1">
                  {formatRupiah(option.price)} per night
                </span>
                {option.room_availability ? (
                  <span className="text-[11px] text-grey-1">
                    Room Available : {option.room_availability} Rooms
                  </span>
                ) : (
                  <span className="text-[11px] text-red-3">
                    Room not available
                  </span>
                )}
              </div>
            </label>
            {option.fee_type === 'minimum_contribution' &&
            selectedValues.some((val) => val.id === option.id) ? (
              <Input
                label="Please write your contribution (IDR) "
                className="mb-6"
                inputProps={{
                  type: 'number',
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
  );
};

export default Radio;
