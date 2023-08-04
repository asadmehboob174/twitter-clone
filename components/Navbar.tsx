import { Twitter, menu } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 sm:w-[11%] md:w-[10%] lg:w-[24%] 2xl:w-[33%]'>
        <div className='hidden sm:flex flex-col items-center sm:items-center 2xl:items-end w-full 2xl:pr-24 2xl:w-[100%] mx-auto lg:pr-20 pt-2'>
          <div className='space-y-1'>
              <Twitter className='text-[#1DA1F2] h-12 pl-1'  />
              <ul className='flex flex-col items-start space-y-1'>
                {menu.map((item, index) => {
                  return (
                    <li key={index} className=' hover:bg-white/10 rounded-full lg:rounded-3xl w-fit px-3 lg:pl-3 lg:pr-8 py-[11px] transition duration-100'>
                        <Link className='flex items-center gap-[18px] justify-start' href={item.name}>
                            <span className='text-[27px] leading-6 font-[500] inline-flex items-start'>{item.icon}</span>
                            <h1 className='hidden xl:block text-lg font-[500] tracking-wide'>{item.name}</h1>
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