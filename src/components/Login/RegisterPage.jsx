import React from 'react'
import Image from 'next/image'
import content1 from '../../assets/images/content-1.jpg'
import SecondNavbar from '../Navbar/SecondNavbar'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Register() {
  return (
    <>
      <div className='w-full h-screen flex flex-row'>
        <div className='w-full md:w-3/5 md:block hidden h-full'>
          <Image
            src={content1}
            className='object-cover w-full
          h-full'
          />
        </div>

        <div className='w-full md:w-2/5 h-full bg-slate-100 flex justify-center items-center'>
          <form className='bg-white shadow-2xl w-[350px] p-10 h-[500px] rounded-3xl flex flex-col justify-center items-center relative'>
            <div className=' absolute left-10 top-10 text-sm flex gap-1 font-semibold text-origin-blue'>
              <ArrowLeftIcon className='w-[20px] ' />
              <Link
                href={'/'}
                className='font-bold'
              >
                Beranda
              </Link>
            </div>
            <h3 className='text-xl font-bold tracking-wide mb-5'>Buat akun</h3>
            <div className='w-full'>
              <h6 className='text-xs font-semibold tracking-wider mb-1'>
                Nama
              </h6>
              <input
                type='text'
                autoComplete='none'
                required
                className='block w-full py-2 px-3 border border-gray-300 placeholder-gray-500
              text-gray-900 rounded-md mb-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10sm text-sm'
                placeholder='Masukan nama'
              />
            </div>
            <div className='w-full'>
              <h6 className='text-xs font-semibold tracking-wider mb-1'>
                Email
              </h6>
              <input
                type='email'
                autoComplete='none'
                required
                className='block w-full py-2 px-3 border border-gray-300 placeholder-gray-500
              text-gray-900 rounded-md mb-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10sm text-sm'
                placeholder='Masukan email'
              />
            </div>
            <div className='w-full'>
              <h6 className='text-xs font-semibold tracking-wider mb-1'>
                Password
              </h6>
              <input
                type='password'
                autoComplete='none'
                required
                className='block w-full py-2 px-3 border border-gray-300 placeholder-gray-500
              text-gray-900 rounded-md mb-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10sm text-sm'
                placeholder='Masukan password'
              />
            </div>
            <div className='w-full flex justify-center items-center flex-col'>
              <button
                className='w-full flex justify-center py-2 mt-2 text-sm rounded-md
            text-white bg-[#381DDB] hover:bg-[#281496] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Daftar
              </button>
              <p className='text-sm mt-5 text-slate-600'>
                Sudah memiliki akun?{' '}
                <a
                  href='/login'
                  className='text-sm text-red-500'
                >
                  Masuk disini!
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
