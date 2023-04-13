import MainLayout from '@/layouts/MainLayout'
import React from 'react'

const programs = [
  {
    no: 1,
    nama_program: 'Program 1',
    tujuan: 'Meningkatkan kualitas hidup masyarakat',
  },
  {
    no: 2,
    nama_program: 'Program 2',
    tujuan: 'Meningkatkan taraf pendidikan masyarakat',
  },
  {
    no: 3,
    nama_program: 'Program 3',
    tujuan: 'Meningkatkan kesejahteraan ekonomi masyarakat',
  },
  {
    no: 4,
    nama_program: 'Program 4',
    tujuan: 'Meningkatkan kesejahteraan ekonomi masyarakat',
  },
  {
    no: 5,
    nama_program: 'Program 5',
    tujuan: 'Meningkatkan kesehatan masyarakat',
  },
  {
    no: 6,
    nama_program: 'Program 6',
    tujuan: 'Meningkatkan kesehatan masyarakat',
  },
  {
    no: 7,
    nama_program: 'Program 7',
    tujuan: 'Meningkatkan kesehatan masyarakat',
  },
  {
    no: 8,
    nama_program: 'Program 8',
    tujuan: 'Meningkatkan kesehatan masyarakat',
  },
  {
    no: 9,
    nama_program: 'Program 9',
    tujuan: 'Meningkatkan kesehatan masyarakat',
  },
  {
    no: 10,
    nama_program: 'Program 10',
    tujuan: 'Meningkatkan kesehatan masyarakat',
  },
]

function Program() {
  return (
    <MainLayout>
      <div className='flex justify-center items-center flex-col'>
        <h2 className='my-8 max-w-lg font-bold text-center text-3xl mb-5 tracking-wider'>
          Program Sekolah
        </h2>
        <div className='border border-solid bg-origin-blue h-2 w-16 flex justify-center mb-10'></div>
        <div className='w-full overflow-hidden rounded-lg shadow-xs mb-10'>
          <div className='w-full overflow-x-auto'>
            <table className='w-full whitespace-no-wrap'>
              <thead className=''>
                <tr
                  className='
                font-bold
                tracking-wide
                uppercase
                text-xs
                text-white
                border-b
                bg-light-red
              '
                >
                  <th className='px-4 py-3 no-wrap'>No</th>
                  <th className='px-4 py-3 no-wrap'>Nama Program</th>
                  <th className='px-4 py-3 no-wrap'>Tujuan</th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {programs.map((item) => (
                  <tr key={item.id}>
                    <td className='px-4 py-3'>{item.no}</td>
                    <td className='px-4 py-3'>{item.nama_program}</td>
                    <td className='px-4 py-3'>{item.tujuan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Program
