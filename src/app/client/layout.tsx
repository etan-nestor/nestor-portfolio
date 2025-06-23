import { Inter } from 'next/font/google'
import Navbar from '@/components/client/Navbar/page'
import LoadingScreen from '@/components/client/Loading/LoadingScreen'
import Footer from '@/components/client/Footer/page'
import CurrentJobModal from '@/components/client/Home/CurrentJobModal'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section className={`${inter.className} bg-gray-950 text-gray-100`}>
        <LoadingScreen />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <CurrentJobModal />
     </section>
  )
}



