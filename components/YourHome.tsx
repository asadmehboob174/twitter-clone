import React from 'react'
import Image from 'next/image';
import publicImage from '@/public/feed-image-2.png';

const YourHome = () => {
  return (
    <div className='h-auto row-span-1 divide-y divide-gray-700 overflow-hidden border-b-[0.1px] border-gray-600'>
             {
               Array.from({ length: 10 }).map((item, index) => {
                return (
                  <div key={index} className='w-full p-3 flex items-start justify-between gap-3 cursor-pointer hover:bg-gray-500/10 transition-colors duration-300'>
                     <div className='text-center'>
                        <div className='bg-blue-400 h-10 w-10 rounded-lg text-sm pt-2'>CNN</div>
                     </div>
                     <div className='flex flex-col gap-2'>
                        <h2>CNN News (World)</h2>
                        <p className='text-sm font-normal'>SWEDEN ELIMINATED THE USWNT BY A MILLIMETER </p>
                        <div className='rounded-lg border-[1px] border-gray-200/10 flex flex-col space-y-2 pb-4'>
                          <Image src={publicImage} className='rounded-lg outline-offset-0' alt="feed-image" layout='responsive' width={100} height={100} />
                          <p className='text-sm font-normal p-2'>At least 19 killed and dozens injured in Pakistan train accident</p>
                        </div>
                     </div>
                  </div>
                )
              })
            }
        </div>
  )
}

export default YourHome