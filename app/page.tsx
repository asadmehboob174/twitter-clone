import Image from 'next/image'

export default function Home() {
  return (
    <main className='grid grid-cols-2 divide-x divide-gray-700 h-full'>
        <div className='col-span-1'>
          Timeline
        </div>
        <div className='col-span-1'>
          Sidebar
        </div>
    </main>
  )
}
