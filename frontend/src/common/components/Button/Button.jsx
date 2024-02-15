import clsx from 'clsx';

const Button = ({
  children,
  onclick,
  type = 'fill',
  disabled = false,
  ...props
}) => {
  return (
    <button
      onClick={onclick}
      className={clsx(
        ' flex h-[50px]  items-center  justify-center gap-[10px] rounded-[10px] border-[3px]  px-5 py-[5px] disabled:border-gray-300 disabled:bg-gray-200',
        type === 'outline'
          ? 'border-green-6 bg-transparent text-white'
          : 'border-green-7 bg-green-1 font-semibold text-green-7'
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
