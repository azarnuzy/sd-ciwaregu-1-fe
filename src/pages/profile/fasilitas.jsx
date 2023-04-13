import MainLayout from '@/layouts/MainLayout'
import Image from 'next/image'
import React from 'react'
const images = [
  { id: 1, name: 'Ruang Kelas', url: '/images/ruang_kelas.jpg' },
  { id: 2, name: 'Ruang Olahraga', url: '/images/ruang_olahraga.jpg' },
  { id: 3, name: 'Mushola', url: '/images/mushola.jpg' },
  { id: 4, name: 'Toilet', url: '/images/toilet.jpg' },
  { id: 5, name: 'perpustakaan', url: '/images/perpustakaan.jpg' },
  {
    id: 6,
    name: 'Panggung Kreativitas',
    url: '/images/panggung_kreativitas.jpg',
  },
  { id: 7, name: 'Lapangan', url: '/images/lapangan.jpg' },
  { id: 8, name: 'Ruang Guru', url: '/images/ruang_guru.jpg' },
  { id: 9, name: 'Tempat Parkir', url: '/images/tempat_parkir.jpg' },
  {
    id: 10,
    name: 'Ruang Kepala Sekolah',
    url: '/images/ruang_kepala_sekolah.jpg',
  },
]
function Fasilitas() {
  return (
    <MainLayout>
      <div className='flex justify-center items-center flex-col'>
        <h2 className='my-8 max-w-lg font-bold text-center text-3xl mb-5 tracking-wider'>
          Fasilitas Sekolah
        </h2>
        <div className='border border-solid bg-origin-blue h-2 w-16 flex justify-center mb-10'></div>
      </div>
      <div className='flex justify-center my-10'>
        <div className='w-10/12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center'>
            {images.map((image) => (
              <div
                key={image.id}
                className='relative flex  items-center'
              >
                <Image
                  src={image.url}
                  alt={image.name}
                  width={400}
                  height={400}
                  className='rounded-lg object-cover'
                />
                <div className='absolute bottom-0 left-0 p-2 bg-gray-900 bg-opacity-75 rounded-b-lg'>
                  <p className='text-white text-xs font-medium'>{image.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Fasilitas
