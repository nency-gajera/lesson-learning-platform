import Link from 'next/link'
import React from 'react'

export default function MyLessons() {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-center mt-20'>
        <img src="/empty-state-vector.svg" alt="" />
      </div>
      <div className='flex flex-col items-center justify-center gap-2'>
        <p className='font-bold'>No content yet</p>
        <p className='text-gray-500 '>Your library is empty. Create you first Lesson now!</p>
      </div>
      <div className='flex justify-center items-center'>
        <Link href={'/lesson'}>
          <button className='flex items-center space-x-3 bg-[#128770] text-white rounded-lg p-2'>
            Create new Lesson 
          </button>
        </Link>
      </div>
    </div>
  )
}
