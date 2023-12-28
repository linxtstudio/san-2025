import clsx from "clsx"

const Input = ({ size = 'default', prefix = false, prefixComponent: PrefixComponent, inputProps, label, onInput}) => {
    return (
        <div className="flex flex-col gap-2">
            {label && <label className="text-base"> { label } </label>}
            <div className={clsx("border-2 border-grey-3 rounded-[10px] transition-all duration-200 outline-none focus-within:border-green-1 flex gap-2", size === 'small' ? 'py-2 px-3' : 'px-3 py-2')}>
                {prefix && (
                    <PrefixComponent />
                )}
                <input
                    className="focus:ring-0 !outline-none text-sm border-none focus:!outline-none h-[24px] w-full p-0 placeholder:text-grey-3"
                    onInput={(e) => {onInput(e.target.value)}}
                    {...inputProps}
                />
            </div>
        </div>
    )
}

export default Input