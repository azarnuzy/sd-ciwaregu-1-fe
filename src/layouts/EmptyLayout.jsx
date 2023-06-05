import SocialMedia from '@/components/Navbar/SocialMedia'
import React from 'react'

function EmptyLayout({ children }) {
  return (
    <div className={`w-full`}>
      <SocialMedia />

      <div className='w-full flex flex-col md:flex-row md:pt-8 lg:pt-10 md:pl-10 lg:pr-10'>
        {children}
      </div>
    </div>
  )
}

export default EmptyLayout
