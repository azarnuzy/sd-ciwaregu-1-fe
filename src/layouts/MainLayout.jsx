import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer/Footer'

const MainLayout = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className='min-h-screen bg-gray-100'>
      <Head>
        <title>Main Layout</title>
        <meta
          name='description'
          content='Main layout with TailwindCSS'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Navbar />
      <main
        className={`${
          isMounted ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500 ease-in-out mx-auto max-w-7xl px-4 sm:px-8 md:px-16 lg:px-24`}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
