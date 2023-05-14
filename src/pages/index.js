import { Inter } from '@next/font/google'
import SocialMedia from '@/components/Navbar/SocialMedia'
import LandingPage from './landing-page'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer/Footer'
import { useRouter } from 'next/router'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const path = router.pathname
  return (
    <div className={inter.className}>
      <Head>
        <Head>
          <title>SDN Ciwaregu 1</title>
          <meta
            name='description'
            content='Selamat datang di website SDN Ciwaregu 1! Dapatkan informasi tentang sekolah kami, program, acara, kurikulum, dan lainnya. Tetap terhubung dengan guru, siswa, dan orang tua kami.'
          />
          <meta
            name='keywords'
            content='sekolah dasar, pendidikan, siswa, guru, orang tua, program, acara, kurikulum, kegiatan, pembelajaran'
          />
          <meta
            name='author'
            content='M. Azar nuzy'
          />
          <meta
            property='og:title'
            content='SDN Ciwaregu 1'
          />
          <meta
            property='og:description'
            content='Selamat datang di website SDN Ciwaregu 1! Dapatkan informasi tentang sekolah kami, program, acara, kurikulum, dan lainnya. Tetap terhubung dengan guru, siswa, dan orang tua kami.'
          />
          <meta
            property='og:type'
            content='website'
          />
          <meta
            property='og:url'
            content='https://v1-dev-sdciwaregu.netlify.app/'
          />
          <meta
            property='og:image'
            content='/images/header-1.jpg'
          />
          <meta
            property='twitter:title'
            content='SDN Ciwaregu 1'
          />
          <meta
            property='twitter:description'
            content='Selamat datang di website SDN Ciwaregu 1! Dapatkan informasi tentang sekolah kami, program, acara, kurikulum, dan lainnya. Tetap terhubung dengan guru, siswa, dan orang tua kami.'
          />
          <meta
            property='twitter:image'
            content='/images/header-1.jpg'
          />
          <meta
            name='twitter:creator'
            content='@yourtwitterusername'
          />
          <meta
            name='twitter:card'
            content='summary_large_image'
          />
          <link
            rel='canonical'
            href='https://v1-dev-sdciwaregu.netlify.app/'
          />
          <link
            rel='icon'
            href='/favicon.ico'
          />
        </Head>
      </Head>
      <SocialMedia />
      {path !== '/' && <Navbar />}
      <LandingPage />
      <Footer />
    </div>
  )
}
