import SocialMedia from '@/components/Navbar/SocialMedia'
import AdminLayout from '@/layouts/AdminLayout'
import React, { useState } from 'react'
import Image from 'next/image'
import content3 from '@/assets/images/content-3.jpg'
import content4 from '@/assets/images/content-4.jpg'
import content5 from '@/assets/images/content-5.jpg'
import Link from 'next/link'
import { useEffect } from 'react'
import { AddIcon } from '@/components/Icons/AddIcon'
import { EditIcon } from '@/components/Icons/EditIcon'
import { DeleteIcon } from '@/components/Icons/DeleteIcon'

function IndexGallery() {
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

  const [gallery, setGallery] = useState('')

  const [query, setQuery] = useState('')

  useEffect(() => {
    // Fetch data user active from API
    // fetchUsersActive(query);
    console.log(process.env.API_URL)
    // eslint-disable-next-line
  }, [])

  // async function fetchUsersActive(key) {
  //   let uri = "";
  //   if (key === "") uri = `${process.env.API_URL}/v1/galleries`;
  //   else uri = `${process.env.API_URL}/api/users/active/${key}`;

  //   await fetch(`${process.env.API_URL}/v1/galleries`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(process.env.API_URL);
  //       setGallery(data);
  //     });
  // }

  return (
    <>
      <SocialMedia />
      <AdminLayout>
        <div className='w-full pb-10 pt-8 px-4 h-fit flex flex-row justify-between items-center'>
          <h1 className='text-3xl font-bold'>List Gallery</h1>

          <Link
            href='/admin/gallery/add'
            className='py-2 px-4 flex flex-row justify-center items-center bg-origin-blue hover:bg-[#1c0081] rounded-sm text-slate-100'
          >
            <div className='mr-2 cursor-pointer'>Tambah Baru</div>
            <AddIcon />
          </Link>
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
              {data_gallery.map((item, i) => (
                <tr key={i}>
                  <td className='px-6 py-4 whitespace-nowrap'>{item.id}</td>
                  <td className='w-[150px] px-6 py-4 whitespace-nowrap'>
                    <Image
                      src={item.image}
                      className='object-cover w-[70px] h-[70px] rounded'
                      alt={item.kegiatan}
                    />
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm'>
                    {item.kegiatan}
                  </td>
                  <td className='px-6 py-4  w-[500px] text-sm'>{item.desc}</td>
                  <td className='px-6 py-4 whitespace-nowrap flex flex-row gap-2 justify-center items-center'>
                    <Link
                      href={`/admin/gallery/edit?id=${item.id}`}
                      className='text-slate-100 py-1 px-3 rounded-md text-slate-70 text-xs bg-blue-900
                    flex flex-row justify-center items-center gap-1'
                    >
                      <EditIcon />
                      Edit
                    </Link>
                    <Link
                      href='#'
                      className='text-slate-100 py-1 px-3 rounded-md text-slate-70 text-xs bg-red-600
                      flex flex-row justify-center items-center gap-1'
                    >
                      <DeleteIcon />
                      Delete
                    </Link>
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

export default IndexGallery
