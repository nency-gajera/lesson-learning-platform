import { Bell, BellIcon, Menu, Search } from 'lucide-react'
import React from 'react'

interface SidebarCollapsed {
    collapsed: boolean;
    onToggle: boolean | any;
}

export default function Topbar({ collapsed, onToggle }: SidebarCollapsed) {
    return (
        <div className='px-6 py-4 bg-white/80 border-b border-slate-200'>
            <div className='flex items-center justify-start'>
                <div className='flex items-center space-x-4'>
                    <button
                        className='p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors'
                        onClick={onToggle}
                    >
                        <Menu className='w-5 h-5' />
                    </button>
                </div>

                <div className='flex-1 max-w-md mx-8'>
                    <div className='relative'>
                        <Search className='w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400' />
                        <input
                            type="text"
                            placeholder='Search Anything'
                            className='w-full pl-10 pr-4 py-2.5 bg-slate-100 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                        />
                        <button className='absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 '>
                            <Bell />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
