import { Inter } from 'next/font/google'
import './globals.css'
import LoadingScreen from '@/components/client/Loading/LoadingScreen'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Nestor COMPAORE",
  description: "Nestor Portfolio - Développeur Fullstack",
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-gray-100`}>
        <LoadingScreen />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}



