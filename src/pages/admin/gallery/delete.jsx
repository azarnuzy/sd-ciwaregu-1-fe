import SocialMedia from '@/components/Navbar/SocialMedia'
import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'
import Image from 'next/image'
import content3 from '@/assets/images/content-3.jpg'
import content4 from '@/assets/images/content-4.jpg'
import content5 from '@/assets/images/content-5.jpg'

export function IconoirPlus(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6 12h6m6 0h-6m0 0V6m0 6v6'
      ></path>
    </svg>
  )
}

function AdminPPDB() {
  const data_gallery = [
    {
      id: 1,
      image: content3,
      kegiatan: 'Kegiatan A',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis eos quos consequuntur voluptates. Maiores tempora amet impedit quae consequuntur!',
    },
    {
      id: 2,
      image: content4,
      kegiatan: 'Kegiatan B',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis eos quos consequuntur voluptates. Maiores tempora amet impedit quae consequuntur!',
    },
    {
      id: 3,
      image: content5,
      kegiatan: 'Kegiatan C',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis eos quos consequuntur voluptates. Maiores tempora amet impedit quae consequuntur!',
    },
  ]

  return (
    <>
      <SocialMedia />
      <AdminLayout>
        <div className='w-full pb-10 pt-8 px-4 h-fit flex flex-row justify-between items-center'>
          <h1 className='text-3xl font-bold'>List Gallery</h1>
          <button className='py-2 px-4 flex flex-row justify-center items-center bg-origin-blue hover:bg-[#1c0081] rounded-sm text-slate-100'>
            <div className='mr-2'>Tambah Baru</div>
            <IconoirPlus className='font-[60px] text-white' />
          </button>
        </div>
        <div className='overflow-hidden'>
          <table className='min-w-full bg-white'>
            <thead>
              <tr>
                <th className='px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                  ID
                </th>
                <th className='px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                  Gambar
                </th>
                <th className='px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                  Nama Kegiatan
                </th>
                <th className='px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                  Deskripsi
                </th>

                <th className='px-6 py-3 bg-gray-200'>Action</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {data_gallery.map((item) => (
                <tr key={item.id}>
                  <td className='px-6 py-4 whitespace-nowrap'>{item.id}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <Image
                      alt='item'
                      src={item.image}
                      className='object-cover w-[100px] h-[100px] rounded-full'
                    />
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap  '>
                    {item.kegiatan}
                  </td>
                  <td className='px-6 py-4  w-[500px]'>{item.desc}</td>
                  <td className='px-6 py-4 whitespace-nowrap flex flex-row gap-2 justify-center items-center'>
                    <button className='py-1 px-3 rounded-sm text-slate-70 text-xs bg-blue-900 '>
                      Edit
                    </button>
                    <button className='py-1 px-3 rounded-sm text-slate-70 text-xs bg-red-600 '>
                      Delete
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
