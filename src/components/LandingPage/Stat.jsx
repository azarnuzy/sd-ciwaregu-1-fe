import React from 'react'

function Stat() {
  return (
    <div className='w-full md:mx-auto max-w-7xl lg:px-40 px-4 sm:px-8 mb-10  justify-between flex '>
      <div className='flex flex-col items-center gap-5'>
        <h4 className='text-light-red text-4xl font-extrabold'>13</h4>
        <p className='font-bold text-center'>Guru & Staff</p>
      </div>
      <div className='flex flex-col items-center gap-5'>
        <h4 className='text-light-red text-4xl font-extrabold'>400+</h4>
        <p className='font-bold text-center'>Program</p>
      </div>
      <div className='flex flex-col items-center gap-5'>
        <h4 className='text-light-red text-4xl font-extrabold'>15</h4>
        <p className='font-bold text-center'>Program</p>
      </div>
      <div className='flex flex-col items-center gap-5'>
        <h4 className='text-light-red text-4xl font-extrabold'>10</h4>
        <p className='font-bold text-center'>Prestasi</p>
      </div>
    </div>
  )
}

export default Stat
