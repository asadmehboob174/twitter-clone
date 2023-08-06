'use client'

import React, { useEffect, useRef, useState } from 'react'
import Tabs from './Tabs'
import YourFollowing from './YourFollowing'
import YourHome from './YourHome'


const Home = () => {
  const yourHomeRef = useRef<HTMLButtonElement>(null);
  const yourFollowingRef = useRef<HTMLButtonElement>(null);
  const [selectedTab, setSelectedTab] = useState<number>(0)

  const handleClick = (e : React.MouseEvent<HTMLButtonElement>, currentRef : any, index : number) => {
    setSelectedTab(index);
    currentRef.current?.focus();
  }

  useEffect(() => {
       yourHomeRef.current?.focus();
  }, [])

  return (
    <div className='h-full'>
        <div className='border-b-[0.1px] border-gray-600 fixed w-full lg:w-[53.3%] 2xl:w-[34.95%] bg-[#15202B]/70 backdrop-blur-md border-gray-200/20 top-0 h-[100px] flex flex-col items-start justify-between z-[100]'>
            <div className='pl-4 pt-3'>
                <h1 className='text-lg font-semibold'>Home</h1>
            </div>
            <div className='w-full h-2/4 flex items-center justify-center'>
                  <Tabs ref={yourHomeRef} selected={selectedTab} onClick={(e) => handleClick(e, yourHomeRef, 0)} className='flex items-center justify-center'>
                  For You
                  <div className='border-b-4 border-blue-500 h-1 w-[64px] translate-y-3'></div>
                  </Tabs>
                  <Tabs ref={yourFollowingRef} selected={selectedTab} onClick={(e) => handleClick(e, yourFollowingRef,1)} className='flex items-center justify-center'>Following</Tabs>
            </div>
        </div>
        <div className='min-h-[100px] mt-[100px] overflow-hidden z-10 border-b-[0.1px] border-gray-600'>

        </div>
        <div className='h-[50px] row-span-1 overflow-hidden border-b-[0.1px] border-gray-600'>

        </div>
        {selectedTab == 0 && <YourFollowing /> }
        {selectedTab == 1 && <YourHome /> }
    </div>
  )
}

export default Home