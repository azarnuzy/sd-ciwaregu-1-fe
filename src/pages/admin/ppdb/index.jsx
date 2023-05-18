import SocialMedia from '@/components/Navbar/SocialMedia'
import AdminLayout from '@/layouts/AdminLayout'
import { LinkIcon, TrashIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'

function AdminPPDB() {
  const data = [
    {
      id: 1,
      noPendaftaran: '123456',
      nama: 'John Doe',
      email: 'johndoe@example.com',
      tanggalSubmit: '2023-05-15',
    },
    {
      id: 2,
      noPendaftaran: '123456',
      nama: 'John Doe',
      email: 'johndoe@example.com',
      tanggalSubmit: '2023-05-15',
    },
    {
      id: 3,
      noPendaftaran: '123456',
      nama: 'John Doe',
      email: 'johndoe@example.com',
      tanggalSubmit: '2023-05-15',
    },
    {
      id: 4,
      noPendaftaran: '123456',
      nama: 'John Doe',
      email: 'johndoe@example.com',
      tanggalSubmit: '2023-05-15',
    },
    // Add more data objects as needed
  ]
  return (
    <>
      <SocialMedia />
      <AdminLayout>
        <h1 className='font-bold text-2xl my-4'>Hasil PPDB</h1>
        <div className='overflow-x-scroll  scrollbar-thumb-light-red scrollbar-thin scrollbar-track-slate-200 lg:scrollbar-track-transparent scrollbar-thumb-rounded'>
          <table className='min-w-full bg-white'>
            <thead>
              <tr>
                <th className='px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                  ID
                </th>
                <th className='px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                  No Pendaftaran
                </th>
                <th className='px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                  Nama Calon Peserta Didik
                </th>
                <th className='px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                  Email
                </th>
                <th className='px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                  Tanggal Submit
                </th>
                <th className='px-6 py-3 bg-gray-200'>Action</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className='px-6 py-4 whitespace-nowrap'>{item.id}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {item.noPendaftaran}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>{item.nama}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{item.email}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {item.tanggalSubmit}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap flex justify-center gap-2'>
                    <button className='text-white rounded-md px-2 py-1 bg-origin-blue items-center justify-center flex gap-1'>
                      <Image
                        src={'/images/u_save.svg'}
                        alt='Save images'
                        width={18}
                        height={18}
                      />{' '}
                      View
                    </button>
                    <button className='text-white rounded-md px-2 py-1 bg-light-red flex items-center justify-center gap-1'>
                      <TrashIcon className='w-[18px]' /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>
    </>
  )
}

export default AdminPPDB
