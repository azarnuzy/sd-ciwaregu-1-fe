import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'

function HeaderComponent() {
  return (
    <div className='bg-hero bg-no-repeat bg-cover w-full h-screen sm:h-[95vh] relative object-center'>
      <div className='absolute w-full h-screen sm:h-[95vh] bg-gradient-to-r from-black to-light-purple opacity-30'></div>
      <div className='px-4 sm:mx-0 h-screen absolute w-full sm:h-[95vh] flex flex-col justify-center items-center'>
        <h1 className='uppercase flex flex-col mb-6 text-3xl sm:text-5xl font-extrabold text-white text-center tracking-wider gap-3'>
          selamat datang di <span className='text-light-red'>sdn ciwaregu</span>
        </h1>
        <div className='max-w-lg text-center text-white'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, vel! Deleniti esse, molestiae dolores quam sunt magni!
            Rem, iste a? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Aliquid, officiis.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent
