import { Bell, Menu, Search } from 'lucide-react'
import React from 'react'

interface SidebarCollapsed {
  onToggle: () => void
  onSearch: (value: string) => void
}

export default function Topbar({ onToggle, onSearch }: SidebarCollapsed) {
  return (
    <div className="px-4 md:px-6 py-4 bg-white border-b border-slate-200">
      <div className="flex items-center justify-between gap-4">

        {/* Left - Menu */}
        <button
          onClick={onToggle}
          className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search */}
        <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search Anything"
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-2 bg-slate-100 rounded-xl text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#128770]"
            />
            <Bell className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" />
          </div>
        </div>
      </div>
    </div>
  )
}
