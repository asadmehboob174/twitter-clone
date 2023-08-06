import { FC } from 'react'
import Card from './Card'
import Heading from './Heading'
import Button from './Button'
import Paragraph from './Paragraph'
import Link from 'next/link'
import BurgerIcon from './BurgerIcon'

interface TrendbarProps {
  
}

const Trendbar: FC<TrendbarProps> = ({}) => {
  return <div className='py-4 px-6'>
    <Card>
      <Heading>Get Verified</Heading>
      <Paragraph>Subscribe to unlock new features.</Paragraph>
      <Button>Get Verified</Button>
    </Card>

    <Card>
      <Heading>Trends for you</Heading>
      <div className='hover:bg-gray-500/10 flex items-start justify-between py-2 cursor-pointer'>
        <Link href={"/"}>
          <Paragraph className='font-thin text-[13px] leading-[19px] pb-[2px]'>Politics · Trending</Paragraph>
          <Paragraph className='pb-[2px]'>Attock</Paragraph>
          <Paragraph className='font-thin text-[13px] leading-[19px]'>25.8K Posts</Paragraph>
      </Link>
      <BurgerIcon />
      </div>
      {
        Array.from({ length: 6 }).map((item, index) => {
                return (
                  <div key={index} className='hover:bg-gray-500/10 flex items-start justify-between py-2 cursor-pointer'>
                    <Link href={"/"}>
                      <Paragraph className='font-thin text-[13px] leading-[19px] pb-[2px]'>Politics · Trending</Paragraph>
                      <Paragraph className='pb-[2px]'>Attock</Paragraph>
                      <Paragraph className='font-thin text-[13px] leading-[19px]'>25.8K Posts</Paragraph>
                    </Link>
                    <BurgerIcon />
                  </div>
                )
              })
      }
      
    </Card>

    <Card>
      <Heading>Who to follow</Heading>
      {
         Array.from({ length: 3 }).map((item, index) => {
                return (
                  <div key={index} className='hover:bg-gray-500/10 flex items-center justify-between py-2 cursor-pointer'>
                <div>
                  <Paragraph className='pb-[2px]'>Shaheen Shah Afridi</Paragraph>
                  <Paragraph className='font-thin text-[13px] leading-[19px]'>@ImamUlHaq12</Paragraph>
                </div>
                    <Button className='bg-gray-200 text-gray-800'>Follow</Button>
                </div>
                )
              })
      }
      
    </Card>
  </div>
}

export default Trendbar