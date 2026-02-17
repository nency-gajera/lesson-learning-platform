import { menuItem } from '@/utils/badges'
import { BookOpen, ChevronDown, File, LayoutDashboard, Plus, Settings, Users } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

interface SidebarCollapsed {
    collapsed: boolean;
    onToggle: boolean | any;
}

export default function Sidebar({ collapsed, onToggle }: SidebarCollapsed) {
    return (
        <div
            className={` ${collapsed ? "w-20" : "w-72"
                } transition-all duration-300 ease-in-out flex flex-col relative z-10 bg-white/80 border-r border-slate-200`}
        >
            {/* Logo section */}
            <div className='px-6 py-3'>
                {!collapsed ? (
                    <img src="/logo.svg" alt="" />
                ) : (
                    <img src="/smalllogo.png" alt="" />
                )}
            </div>

            {/* Create new lessons section */}
            <Link href="/lesson">
                <div className='flex p-4 space-y-2 overflow-y-auto'>
                    {!collapsed ? (
                        
                        <button className='flex items-center space-x-3 bg-[#128770] text-white rounded-lg p-2'>
                            Create new Lesson <span><ChevronDown /></span>
                        </button>
                    ) : (
                        <div>
                            <Plus />
                        </div>
                    )}
                </div>
            </Link>

            {/* Menu section */}
            <div className='flex-1 p-4 space-y-2 overflow-y-auto'>
                {menuItem.map((item) => {
                    return (
                        <div key={item.id} className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                                item.active ? "text-[#128770] bg-[#f6f7f9] " : ""
                            }`}
                        >
                            <div className='flex items-center space-x-3'>
                                <item.icon />
                                {!collapsed && (
                                    <span className='font-medium ml-2'>
                                        {item.label}
                                    </span>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
