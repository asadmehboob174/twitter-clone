import Timeline from '@/components/Timeline'
import Trendbar from '@/components/Trendbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='grid grid-cols-4 xl:col-span-3 2xl:grid-cols-2 divide-x divide-gray-700 h-full'>
        <div className='col-span-3 sm:col-span-2 2xl:col-span-1'>
           <Timeline  />
        </div>
        <div className='hidden sm:block col-span-2 2xl:col-span-1'>
           <Trendbar />
        </div>
    </main>
  )
}
