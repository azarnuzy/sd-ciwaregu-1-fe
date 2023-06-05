import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ExclamationCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'

const Unauthorized = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100'>
      <Head>
        <title>Error Page</title>
      </Head>

      <div className='max-w-md px-6 py-8 bg-white shadow-lg rounded-lg'>
        <div className='flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-500 rounded-full'>
          <XCircleIcon className='w-10 h-10 text-white' />
        </div>

        <h2 className='mb-4 text-2xl font-bold text-center'>
          404 | Error Page
        </h2>

        <p className='text-center'>This page could not be found.</p>

        <div className='mt-6 text-center'>
          <Link
            className='text-blue-600 hover:underline'
            href='/'
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Unauthorized
