import SocialMedia from '@/components/Navbar/SocialMedia'
import AdminLayout from '@/layouts/AdminLayout'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { AddIcon } from '@/components/Icons/AddIcon'
import { EditIcon } from '@/components/Icons/EditIcon'
import { DeleteIcon } from '@/components/Icons/DeleteIcon'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import fallbackImageUrl from '@/assets/images/content-1.jpg'
import { useAuth } from '@/context/auth-context'

export default function IndexGuruStaff() {
  const router = useRouter()
  const [profileData, setProfileData] = useState([])

  const { token } = useAuth()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const { publicRuntimeConfig } = getConfig()
      const apiUrl = publicRuntimeConfig.API_URL
      const apiKey = publicRuntimeConfig.API_KEY

      const headers = {
        Authorization: `Bearer ${token}`,
      }

      const response = await fetch(`${apiUrl}/v1/users`, {
        method: 'GET',
        headers: headers,
      })

      if (response.ok) {
        const data = await response.json()
        // console.log(data.data);
        setProfileData(data.data)
      } else {
        console.error('Error:', response.status)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <SocialMedia />
      <AdminLayout>
        <div className='w-full pb-10 pt-8 px-4 h-fit flex flex-row justify-between items-center'>
          <h1 className='text-3xl font-bold'>List User Akun</h1>
        </div>
        <div className='overflow-hidden'>
          <table className='min-w-full bg-white'>
            <thead>
              <tr>
                <th className='px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                  ID
                </th>
                <th className='px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                  Foto
                </th>
                <th className='px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                  Email
                </th>
                <th className='px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                  Username
                </th>
                <th className='px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                  Alamat
                </th>
                <th className='px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                  Tanggal Lahir
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {profileData.map((item, index) => (
                <tr key={item.id}>
                  <td className='px-6 py-4 whitespace-nowrap'>{index + 1}</td>
                  <td className='w-[150px] px-6 py-4 whitespace-nowrap'>
                    <Image
                      src={item.imageUrl || fallbackImageUrl}
                      className='object-cover rounded-full'
                      alt={`${item.name}`}
                      width={70}
                      height={70}
                    />
                  </td>
                  <td className='w-[150px] px-6 py-4 whitespace-nowrap'>
                    {item.email}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm'>
                    {item.name}
                  </td>
                  <td className='px-6 py-4  w-[500px] text-sm'>
                    {item.adress}
                  </td>
                  <td className='px-6 py-4  w-[500px] text-sm'>
                    {item.tanggalLahir}
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
