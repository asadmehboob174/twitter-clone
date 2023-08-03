import React from 'react'
import Tabs from './Tabs'
import Image from 'next/image';
import publicImage from '@/public/feed-image.png';

const Home = () => {
  return (
    <div className='divide-y gap-4 divide-gray-700 h-full'>
        <div className='fixed w-[40%] lg:w-[34.95%] bg-[#15202B]/70 backdrop-blur-md border-b-[0.1px] border-gray-200/20 top-0 h-[100px] flex flex-col items-start justify-between z-[100]'>
            <div className='pl-4 pt-3'>
                <h1 className='text-lg font-semibold'>Home</h1>
            </div>
            <div className='w-full h-2/4 flex items-center justify-center'>
                  <Tabs className='flex items-center justify-center'>For You</Tabs>
                  <Tabs className='flex items-center justify-center'>Following</Tabs>
            </div>
        </div>
        <div className='min-h-[100px] mt-[100px] overflow-hidden z-10'>

        </div>
        <div className='h-[50px] row-span-1 overflow-hidden'>

        </div>
        <div className='h-auto row-span-1 divide-y divide-gray-700 overflow-hidden'>
             {
               Array.from({ length: 10 }).map((item, index) => {
                return (
                  <div key={index} className='w-full p-3 flex items-start justify-between gap-3 cursor-pointer hover:bg-gray-500/10 transition-colors duration-300'>
                     <div className='text-center'>
                        <div className='bg-red-700 h-10 w-10 rounded-lg text-sm pt-2'>BBC</div>
                     </div>
                     <div className='flex flex-col gap-2'>
                        <h2>BBC News (World)</h2>
                        <p className='text-sm font-normal'>US State Department orders evacuation of non-emergency personnel and family members from US Embassy in Niamey following military takeover in country</p>
                        <div className='rounded-lg border-[1px] border-gray-200/10 flex flex-col space-y-2 pb-4'>
                          <Image src={publicImage} className='rounded-lg outline-offset-0' alt="feed-image" layout='responsive' width={100} height={100} />
                          <p className='text-sm font-normal p-2'>US State Department orders evacuation of non-emergency personnel and family members from US Embassy</p>
                        </div>
                     </div>
                  </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default Home