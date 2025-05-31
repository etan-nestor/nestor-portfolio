'use client'

import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange,
  className = ''
}: PaginationProps) {
  const maxVisiblePages = 5
  const halfVisible = Math.floor(maxVisiblePages / 2)
  
  let startPage = Math.max(1, currentPage - halfVisible)
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1)
  }

  const pages = []
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`flex items-center justify-center gap-1 ${className}`}
    >
      {/* Previous Button */}
      <motion.button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-2 rounded-lg ${currentPage === 1 ? 'text-gray-600 cursor-not-allowed' : 'text-blue-400 hover:bg-blue-900/20'}`}
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      {/* First Page */}
      {startPage > 1 && (
        <>
          <PageButton 
            page={1} 
            currentPage={currentPage} 
            onClick={() => onPageChange(1)}
          />
          {startPage > 2 && (
            <div className="px-2 text-gray-500">
              <MoreHorizontal className="w-4 h-4" />
            </div>
          )}
        </>
      )}

      {/* Middle Pages */}
      {pages.map(page => (
        <PageButton
          key={page}
          page={page}
          currentPage={currentPage}
          onClick={() => onPageChange(page)}
        />
      ))}

      {/* Last Page */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <div className="px-2 text-gray-500">
              <MoreHorizontal className="w-4 h-4" />
            </div>
          )}
          <PageButton 
            page={totalPages} 
            currentPage={currentPage} 
            onClick={() => onPageChange(totalPages)}
          />
        </>
      )}

      {/* Next Button */}
      <motion.button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-2 rounded-lg ${currentPage === totalPages ? 'text-gray-600 cursor-not-allowed' : 'text-blue-400 hover:bg-blue-900/20'}`}
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  )
}

function PageButton({ page, currentPage, onClick }: { 
  page: number, 
  currentPage: number, 
  onClick: () => void 
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
        page === currentPage
          ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
          : 'text-gray-400 hover:bg-gray-800'
      }`}
    >
      {page}
    </motion.button>
  )
}