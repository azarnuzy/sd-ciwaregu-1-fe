import Link from 'next/link'
import React from 'react'

function SecondNavbar() {
  return (
    <div className='bg-light-red italic text-white font-bold text-xl text-center py-3 w-full sm:hidden'>
      <Link href={'/'}>SDN Ciwaregu</Link>
    </div>
  )
}

export default SecondNavbar
