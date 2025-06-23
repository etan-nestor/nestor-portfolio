'use client'

export function Footer() {
    return (
      <footer className="bg-gray-900 border-t border-gray-800 fixed bottom-0 right-0 left-0 h-16 z-10 ml-20 lg:ml-64">
        <div className="flex items-center justify-center h-full px-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Admin Panel - Tous droits réservés
          </p>
        </div>
      </footer>
    )
  }