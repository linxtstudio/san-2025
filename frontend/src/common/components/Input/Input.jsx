import clsx from 'clsx';

const Input = ({
  size = 'default',
  prefixComponent: PrefixComponent,
  suffixComponent: SuffixComponent,
  inputProps,
  label,
  onInput = () => {},
  suffixAction = () => {},
  className = '',
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-base"> {label} </label>}
      <div
        className={clsx(
          'flex gap-2 rounded-[10px] border-2 border-grey-3 bg-white outline-none transition-all duration-200 focus-within:border-green-1',
          size === 'small' ? 'px-3 py-2' : 'px-3 py-2',
          className
        )}
      >
        {PrefixComponent && <PrefixComponent />}
        <input
          className="h-[24px] w-full border-none p-0 text-sm !outline-none placeholder:text-grey-3 focus:!outline-none focus:ring-0"
          onInput={(e) => {
            onInput(e.target.value);
          }}
          {...inputProps}
        />
        <button
          tabIndex={SuffixComponent ? 0 : -1}
          onClick={(e) => {
            suffixAction();
          }}
        >
          {SuffixComponent && <SuffixComponent />}
        </button>
      </div>
    </div>
  );
};

export default Input;
