import clsx from 'clsx';

const Tabs = ({ options, selectedValue, onChange }) => {
  return (
    <div className="flex w-full flex-col rounded-[10px] border-2 border-[#005435] md:flex-row">
      {options.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            onChange(item.value);
          }}
          className={clsx(
            'flex items-center justify-center gap-[6px]  border-2 border-[#005435] px-4 py-2 text-grey-2',
            {
              'bg-[#005435] !text-white': item.value === selectedValue,
            },
            index === 0 ? 'rounded-l-[8px]' : '',
            index === options.length - 1 ? 'rounded-r-[8px]' : ''
          )}
        >
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
