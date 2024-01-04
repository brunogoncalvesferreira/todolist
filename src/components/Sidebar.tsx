import {GalleryVerticalEnd, Star, Calendar, CalendarDays} from 'lucide-react'

export function Sidebar() {
  return (
    <div>
      <div>
        <h1 className="text-xl text-violet-400 font-bold">Filters</h1>
      </div>

      <div className='mt-4 space-y-2 grid md:grid-cols-1 grid-cols-2'>
        <button className='w-full p-2 rounded-md transition-colors flex items-center gap-2 hover:bg-gray-800'>
          <GalleryVerticalEnd className='text-gray-500'/>
          <span className="text-gray-500">All</span>
        </button>

        <button className='w-full p-2 rounded-md transition-colors flex items-center gap-2 hover:bg-gray-800'>
          <Star className='text-gray-500'/>
          <span className="text-gray-500">Starred</span>
        </button>

        <button className='w-full p-2 rounded-md transition-colors flex items-center gap-2 hover:bg-gray-800'>
          <Calendar className='text-gray-500'/>
          <span className="text-gray-500">Today</span>
        </button>

        <button className='w-full p-2 rounded-md transition-colors flex items-center gap-2 hover:bg-gray-800'>
          <CalendarDays className='text-gray-500'/>
          <span className="text-gray-500">Week</span>
        </button>
      </div>
    </div>
  )
}