import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps {
  children : React.ReactNode
  className?: string
}

const Card: FC<CardProps> = ({children, className}) => {
  return <section className={twMerge('bg-zinc-50/5 w-[100%] max-w-[350px] rounded-lg pb-4 pt-2 mb-4', className)}>
        {children}
  </section>
}

export default Card