import axios from 'axios'
import React, { useEffect } from 'react'

function VisiMisi() {
  
  return (
    <div className='w-full max-w-7xl md:px-8 mb-10 gap-10 justify-center md:mx-auto flex flex-col'>
      <h2 className='font-extrabold text-center text-2xl mb-4 mt-12'>
        Visi & Misi
      </h2>
      <div className='flex flex-col md:flex-row px-4 md:px-32 gap-4 md:gap-12 justify-center '>
        <div className='text-center rounded-lg bg-light-red text-white p-5'>
          <h3 className=' text-xl mb-3 font-bold'>Visi</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dolore quia nam! Eveniet quis labore quo aliquid sequi eaque
            placeat.
          </p>
        </div>
        <div className='text-center rounded-lg bg-light-red text-white p-5'>
          <h3 className=' text-xl mb-3 font-bold'>Misi</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dolore quia nam! Eveniet quis labore quo aliquid sequi eaque
            placeat.
          </p>
        </div>
      </div>
    </div>
  )
}


export default VisiMisi
