import { FC } from 'react';
import { twMerge } from 'tailwind-merge'

interface ParagraphProps {
  children: React.ReactNode,
  className?: string
}

const Paragraph: FC<ParagraphProps> = ({children, className}) => {
  return <p className={twMerge('font-[600] text-sm text-zinc-50 pb-3 px-3', className)}>
    {children}
    </p>
}

export default Paragraph