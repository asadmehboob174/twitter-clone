import { FC } from 'react'

interface TabsProps {
  children : React.ReactNode,
  className? : string,
}

const Tabs: FC<TabsProps> = ({children, className}) => {
  return (
    <div className={`w-full text-sm hover:bg-gray-300/10 h-full cursor-pointer ${className}`}>
       {children}
    </div>
  )
}

export default Tabs

