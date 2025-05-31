import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/client/Navbar/page'
import LoadingScreen from '@/components/client/Loading/LoadingScreen'
import Footer from '@/components/client/Footer/page'
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
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}



