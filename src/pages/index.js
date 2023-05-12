import { Inter } from '@next/font/google'
import SocialMedia from '@/components/Navbar/SocialMedia'
import LandingPage from './landing-page'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer/Footer'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const path = router.pathname
  return (
    <div className={inter.className}>
      <SocialMedia />
      {path !== '/' && <Navbar />}
      <LandingPage />
      <Footer />
    </div>
  )
}
