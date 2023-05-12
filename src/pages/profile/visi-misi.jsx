import MainLayout from '@/layouts/MainLayout'
import React from 'react'

const content = {
  visi: 'sce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue ',
  misi: 'sce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue ',
}

function VisiMisi() {
  return (
    <MainLayout>
      <div className='flex justify-center items-center flex-col'>
        <h2 className='my-8 max-w-lg font-bold text-center text-3xl mb-5 tracking-wider'>
          Visi & Misi Sekolah
        </h2>
        <div className='border border-solid bg-origin-blue h-2 w-16 flex justify-center mb-10'></div>
        <div className='my-5 rounded-2xl w-full mx-4 p-4 md:mx-16 bg-light-red md:p-16 flex flex-col items-center justify-center shadow text-white gap-4'>
          <h3 className='font-bold text-2xl tracking-wide'>Visi</h3>
          <p className='font-medium text-md'>{content.visi}</p>
        </div>
        <div className='my-5 rounded-2xl w-full mx-4 p-4 md:mx-16 bg-light-red md:p-16 flex flex-col items-center justify-center shadow text-white gap-4'>
          <h3 className='font-bold text-2xl tracking-wide'>Misi</h3>
          <p className='font-medium text-md'>{content.misi}</p>
        </div>
      </div>
    </MainLayout>
  )
}

export default VisiMisi
