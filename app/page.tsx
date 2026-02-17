"use client"

import MyLessons from '@/layouts/MyLessons'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)
  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 500)
    return () => clearTimeout(timer)
  }, [search])

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex h-screen overflow-hidden">

        {/* Sidebar */}
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Main Content */}
        <div className="flex flex-col flex-1 w-full">
          <Topbar
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            onSearch={setSearch}
          />

          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <MyLessons search={debouncedSearch} />
          </main>
        </div>
      </div>
    </div>
  )
}
