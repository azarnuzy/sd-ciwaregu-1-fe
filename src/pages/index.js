import { Inter } from '@next/font/google'
import SocialMedia from '@/components/Navbar/SocialMedia'
import LandingPage from './landing-page'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer/Footer'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SDN Ciwaregu',
  description:
    'Selamat datang di website SDN Ciwaregu! Dapatkan informasi tentang sekolah kami, program, acara, kurikulum, dan lainnya. Tetap terhubung dengan guru, siswa, dan orang tua kami.',
  keywords:
    'sekolah dasar, pendidikan, siswa, guru, orang tua, program, acara, kurikulum, kegiatan, pembelajaran',
  author: 'azarnuzy',
  image: '/images/header-1.jpg', // Replace with the path to your website's homepage image
  url: 'https://v1-dev-sdciwaregu.netlify.app/', // Replace with your website's URL
  twitterUsername: '@sdnciwaregu', // Replace with your Twitter username
  siteName: 'SDN Ciwaregu',
  siteLanguage: 'en-US', // Replace with the appropriate language code
  siteLocale: 'id_ID', // Replace with the appropriate locale code
  type: 'website',
}

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
