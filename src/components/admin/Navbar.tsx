'use client'

import { Menu } from 'lucide-react'

export function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <header className="bg-gray-900 border-b border-gray-800 fixed top-0 right-0 left-0 h-16 z-10 ml-20 lg:ml-64">
      <div className="flex items-center justify-between h-full px-6">
        <button 
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-800 lg:hidden"
        >
          <Menu size={20} />
        </button>

        <div className="flex items-center gap-4">
          {/* Ici vous pouvez ajouter des notifications, etc. */}
          <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700"></div>
        </div>
      </div>
    </header>
  )
}