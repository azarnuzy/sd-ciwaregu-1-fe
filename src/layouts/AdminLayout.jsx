import HeadComponent from '@/components/Head/HeadComponents'
import Sidebar from '@/components/Sidebar'
import React, { useEffect, useState } from 'react'

function AdminLayout({ children }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <div className='flex w-full'>
      <HeadComponent />
      <Sidebar />
      <main
        className={`${
          isMounted ? 'opacity-100' : 'opacity-0'
        } py-3 px-8 w-auto`}
      >
        {children}
      </main>
    </div>
  )
}

export default AdminLayout
