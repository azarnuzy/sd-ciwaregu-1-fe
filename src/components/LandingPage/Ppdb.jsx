import Image from 'next/image'
import React from 'react'
import content6 from '../../assets/images/content-6.jpg'

function Ppdb() {
  return (
    <div className='w-full  bg-[#CCCBD3]'>
      <div className='w-full flex flex-col md:pt-0 pt-10 md:flex-row md:pl-10 lg:pr-10'>
        <div className='w-full pb-10 md:pb-0 md:w-2/3 flex flex-col gap-4 justify-center px-[5vw]'>
          <h2 className='font-extralight text-2xl'>
            Penerimaan Peserta Didik Baru
          </h2>
          <p>
            Temukan informasi lengkap tentang proses penerimaan dan persyaratan
            yang dibutuhkan
          </p>
          <div className='flex gap-3'>
            <a
              href='#'
              className='flex w-fit gap-4 items-center py-4 px-6 mt-5 md:mt-10 bg-light-purple text-white rounded-2xl'
            >
              Pendaftaraan
            </a>
            <a
              href='#'
              className='flex w-fit gap-4 items-center py-4 px-6 mt-5 md:mt-10 bg-light-purple text-white rounded-2xl'
            >
              Tata Cara
            </a>
          </div>
        </div>
        <div className='w-full md:w-1/3'>
          <Image
            src={content6}
            alt='Siswa sedang belajar menggunakan laptop dikelas'
            className='object-cover drop-shadow-2xl  filter w-full max-h-[650px] h-[50vh]'
          />
        </div>
      </div>
    </div>
  )
}

export default Ppdb
