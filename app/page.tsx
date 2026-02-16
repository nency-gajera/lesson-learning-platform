"use client"

import Dashboard from '@/layouts/Dashboard'
import MyLessons from '@/layouts/MyLessons'
import React, { useState } from 'react'

export default function Home() {

  const [currentPage, setCurrentPage] = useState("Lessons")

  return (
      <main className=' bg-white/80 flex-1 overflow-y-auto'>
        <div className='p-6 space-y-6'>
          {currentPage === "Lessons" && <MyLessons />}
        </div>
      </main>
  )
}
