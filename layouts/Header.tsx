"use client"

import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import React, { useState } from 'react'

export default function Header({ children} : {children: React.ReactNode }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
    return (
        <div className='flex h-screen overflow-hidden'>
            <Sidebar
                collapsed={sidebarCollapsed}
                onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            />
            <div className='flex flex-1 flex-col overflow-hidden'>
                <Topbar
                    collapsed={sidebarCollapsed}
                    onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
                />
                <div className='flex-1 overflow-y-auto bg-white/80 p-6'>
                    {children}
                </div>
            </div>
        </div>
    )
}
