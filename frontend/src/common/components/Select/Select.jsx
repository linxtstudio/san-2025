import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import IconChevron from '@/common/icons/IconChevron'
import clsx from 'clsx'


export default function Select({label, placeholder = 'Pilih', options = [], value = '', onChange, disabled = false}) {  
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-xl"> { label } </label>}
      <Listbox value={value} onChange={onChange}>
        <div className={clsx("relative", disabled && 'cursor-not-allowed')}>
          <Listbox.Button className="relative w-full cursor-default  border-2 border-grey-4 rounded-[5px] text-left py-2 px-3 text-sm has aria-expanded:border-green-1 " >
           {  

            value ? <span className="block truncate">{options.find(option => option.value === value)?.label}</span>
            : <span className="block truncate text-grey-1">{placeholder}</span>
            
          }
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <IconChevron />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full z-50 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  className={'relative cursor-default select-none py-2 px-4'}
                  value={option.value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.label}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      </div>
    )
}