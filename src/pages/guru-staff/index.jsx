import MainLayout from '@/layouts/MainLayout'
import React from 'react'
import male from '@/assets/images/male.png'
import Image from 'next/image'

const listEmployee = [
  {
    name: 'Ayi Nasrudin, S.Pd. M.M',
    position: 'Kepala Sekolah',
    image: male,
  },
  {
    name: 'Ayi Solihah',
    position: 'Deni Rusmana',
    image: male,
  },
  {
    name: 'E. Nina Kurniasih',
    position: 'Evi Napisah',
    image: male,
  },
  {
    name: 'Deni Rusmana',
    position: 'Guru Kelas',
    image: male,
  },
  {
    name: 'Evi Napisah',
    position: 'Guru Kelas',
    image: male,
  },
  {
    name: 'Muhammad Sasmita',
    position: 'Guru Kelas',
    image: male,
  },
  {
    name: 'Nanang Hermawan',
    position: 'Guru Kelas',
    image: male,
  },
  {
    name: 'Suganda Sulaeman',
    position: 'Guru Mapel',
    image: male,
  },
  {
    name: 'Tusimi',
    position: 'Guru Kelas',
    image: male,
  },
  {
    name: 'Usep Sulaeman',
    position: 'Guru Mapel',
    image: male,
  },
  {
    name: 'Yogi Niar Muharamsyah',
    position: 'Guru Kelas',
    image: male,
  },
  {
    name: 'Nyanyang Rustandi',
    position: 'Tenaga Administrasi Sekolah',
    image: male,
  },
]

function index() {
  return (
    <>
      <MainLayout>
        <div className='flex justify-center items-center flex-col'>
          <h2 className='my-8 max-w-lg font-bold text-center text-3xl mb-5 tracking-wider'>
            Daftar Pendidik dan Tenaga Kependidikan
          </h2>
          <div className='border border-solid bg-origin-blue h-2 w-16 flex justify-center'></div>
          <div className='flex flex-wrap w-full gap-10 justify-around my-10'>
            {listEmployee.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center ${
                  i === 0 ? 'w-full' : 'w-fit'
                } rounded-full object-center object-cover `}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className='shadow-lg rounded-full max-w-[200px]'
                />
                <h3 className='text-dark-blue font-bold text-xl'>
                  {item.name}
                </h3>
                <p className='text-light-red text-lg'>{item.position}</p>
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default index
