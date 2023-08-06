import { FC } from 'react';
import { twMerge } from 'tailwind-merge'

interface HeadingProps {
  children: React.ReactNode,
  className?: string
}

const Heading: FC<HeadingProps> = ({children, className}) => {
  return <h1 className={twMerge('font-bold text-lg text-zinc-50 pb-2 px-3', className)}>
    {children}
    </h1>
}

export default Heading