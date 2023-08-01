import { Twitter, menu } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='pt-2 grid grid-cols-6 pl-10 sm:pl-0'>
        <div className='flex flex-col space-y-3 items-end justify-center lg:col-end-3 xl:col-end-4 lg:col-start-3 xl:lg:col-start-3 2xl:lg:col-start-3 lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-4'>
          <Twitter className='text-[#1DA1F2] h-12 w-full'  />
          <div className='h-[550px] w-full -translate-x-2'>
             <ul className='flex flex-col gap-[15px]'>
              {menu.map((item, index) => {
                return (
                  <li key={index} className='h-10 w-full hover:bg-zinc-400 px-5 py-2'>
                      <Link className='flex items-center gap-[18px] justify-start' href={item.name}>
                           <span className='text-2xl font-semibold inline-flex items-start'>{item.icon}</span>
                           <h1 className='hidden md:block text-lg font-[350] tracking-wide'>{item.name}</h1>
                      </Link>
                  </li>
                )
              })}
             </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar