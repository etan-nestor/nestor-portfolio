'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LayoutDashboard, FolderPlus, Settings, ChevronLeft, ChevronRight } from 'lucide-react'

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={`h-screen bg-gray-900 border-r border-gray-800 fixed top-0 left-0 z-20 transition-all ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        {/* Logo/Toggle */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          {!collapsed && (
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Admin Panel
            </h1>
          )}
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-800"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link href="/admin" className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 ${collapsed ? 'justify-center' : ''}`}>
                <LayoutDashboard size={20} />
                {!collapsed && <span>Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link href="/admin/projects" className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 ${collapsed ? 'justify-center' : ''}`}>
                <FolderPlus size={20} />
                {!collapsed && <span>Projets</span>}
              </Link>
            </li>
            <li>
              <Link href="/admin/settings" className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 ${collapsed ? 'justify-center' : ''}`}>
                <Settings size={20} />
                {!collapsed && <span>Paramètres</span>}
              </Link>
            </li>
          </ul>
        </nav>

        {/* User Profile (simplifié) */}
        {!collapsed && (
          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                <span className="font-bold">A</span>
              </div>
              <div>
                <p className="font-medium">Administrateur</p>
                <p className="text-xs text-gray-400">admin@example.com</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}