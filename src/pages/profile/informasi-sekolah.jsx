import MainLayout from '@/layouts/MainLayout'
import React from 'react'

const data = [
  { label: 'Nama Sekolah', value: 'SD NEGERI CIWAREGU' },
  { label: 'NPSN', value: '20204589' },
  { label: 'SK Pendirian Sekolah', value: 'SD' },
  { label: 'Jenjang Pendidikan', value: '42 Tahun 2009' },
  { label: 'Tanggal SK Pendirian', value: '2009-03-25' },
  { label: 'Status Kepemilikan', value: 'Pemerintah Daerah' },
  {
    label: 'Alamat Sekolah',
    value:
      'Kp. Ciwaregu, RT.01/RW.7, Mekargalih, Kec. Cikalongkulon, Kabupaten Cianjur, Jawa Barat 43291',
  },
  { label: 'Nomor Telepon', value: '085864519008' },
  { label: 'Email', value: 'sd.ciwaregu@gmail.com' },
]

function InformasiSekolah() {
  return (
    <MainLayout>
      <div className='flex justify-center items-center flex-col'>
        <h2 className='my-8 max-w-lg font-bold text-center text-3xl mb-5 tracking-wider'>
          Informasi Sekolah
        </h2>
        <div className='border border-solid bg-origin-blue h-2 w-16 flex justify-center mb-10'></div>
        <div className='shadow-xl border-[1px]  border-solid border-slate-200 rounded p-4  md:p-8 md:mx-16 bg-white mb-10'>
          <table className='w-full border-collapse'>
            <tbody>
              {data.map((row, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className='px-4 py-2 font-bold'>{row.label}</td>
                    <td className='px-4 py-2 font-bold'>:</td>
                    <td className='px-4 py-2'>{row.value}</td>
                  </tr>
                  <tr>
                    <td colSpan='3'>
                      <hr className='border-gray-300 my-2' />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  )
}

export default InformasiSekolah
