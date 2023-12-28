import clsx from "clsx"

const Button = ({children, onclick, type = 'fill'}) => {
  return <button onClick={onclick} className={clsx(" border-[3px] border-green-7  rounded-[10px]  py-[5px] px-5 h-[50px] flex gap-[10px] items-center justify-center", type === 'outline' ? 'bg-transparent text-white' : 'bg-green-1 text-green-7 font-semibold')}>
    {children}
  </button>
}

export default Button
