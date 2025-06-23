'use client'

import { Sidebar } from '@/components/admin/Sidebar'
import { Footer } from '@/components/admin/Footer'
import { Navbar } from '@/components/admin/Navbar'
import { useState } from 'react'

export default function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(prev => !prev)

  return (
    <div className="bg-gray-950 min-h-screen">
      <Sidebar />
      <div className="ml-20 lg:ml-64 pt-16 pb-16 min-h-screen">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-6">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
