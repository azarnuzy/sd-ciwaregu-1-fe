import MainLayout from '@/layouts/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SuccessSubmit() {
  return (
    <MainLayout>
      <div className='h-[70vh] w-full flex justify-center items-center'>
        <div className='w-full max-w-3xl shadow-md bg-white rounded-lg p-10 flex flex-col justify-center items-center gap-3'>
          <Image
            src={'/images/checklist.svg'}
            alt='success icon'
            width={180}
            height={190}
          />
          <h2 className='font-bold text-xl'>Terima Kasih!</h2>
          <p className='font-bold text-lg'>
            Formulir pendaftaran telah berhasil dikirim
          </p>
          <Link
            href={'/daftar-ppdb'}
            className='underline text-blue-600 cursor-pointer'
          >
            Halaman Daftar PPDB
          </Link>
          <Link
            href={'/'}
            className='text-white bg-origin-blue px-4 py-2 cursor-pointer rounded-lg'
          >
            Halaman Utama
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}

export default SuccessSubmit
