
import React, { forwardRef } from 'react'
import { FC, HTMLAttributes } from 'react'

interface TabsProps extends HTMLAttributes<HTMLButtonElement> {
  children : React.ReactNode,
  className? : string,
};


const Tabs = forwardRef<HTMLButtonElement,TabsProps>(({children, className}, ref) => {
  return (
    <button  ref={ref} type='button'
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

Tabs.displayName = 'Tabs';

export default Tabs

