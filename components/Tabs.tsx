
import React from 'react'
import { FC, HTMLAttributes } from 'react'

interface TabsProps extends HTMLAttributes<HTMLButtonElement> {
  children : React.ReactNode,
  className? : string,
};


const Tabs = React.forwardRef<HTMLButtonElement,TabsProps>(({children, className, ...props}, ref) => {
  return (
    <button  ref={ref} {...props} type='button'
          className={`
            w-full 
            text-sm 
            hover:bg-gray-300/10 
            h-full
            cursor-pointer
             flex flex-col justify-center
            ${className}`}
            >
              {children}
    </button>
  )
})

export default Tabs

