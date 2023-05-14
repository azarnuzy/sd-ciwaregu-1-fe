import SocialMedia from '@/components/Navbar/SocialMedia'
import AdminLayout from '@/layouts/AdminLayout'
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
    // Add more data objects as needed
  ]
  return (
    <>
      <SocialMedia />
      <AdminLayout>
        <div className='overflow-hidden'>
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
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <button className='text-blue-500'>Action</button>
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
