import { FC } from 'react';
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  children: React.ReactNode,
  className?: string
}

const Button: FC<ButtonProps> = ({children, className}) => {
  return <button className={twMerge('bg-[#1DA1F2] text-white text-[14px] leading-5 font-semibold rounded-3xl py-[7px] px-4 w-fit mx-3', className)}>
    {children}
    </button>
}

export default Button