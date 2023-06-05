import {
  CheckCircleIcon,
  CheckIcon,
  TrashIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import LoadingSpinner from '../Loading/LoadingSpinner'
import axios from 'axios'
import { useAuth } from '@/context/auth-context'
import Notification from '../Loading/Notification'

function Table({ data, currentPage, setVerifiedData, setData }) {
  const [isLoading, setIsLoading] = useState(false)
  const { token, handleNotification } = useAuth()

  const [message, setMessage] = useState()
  const [status, setStatus] = useState()

  const updateStatus = async (id) => {
    setIsLoading(true)
    await axios
      .put(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/verifiedPpdb/${id}`, '', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setVerifiedData(response)
        setStatus(response.status)
        setMessage(response.message)
        const getHasilPPDB = async () => {
          await axios
            .get(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/hasilPpdb/`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response) => {
              setData(response.data.data)
              // console.log(response.data)
            })
            .catch((error) => {
              console.log(error)
            })
        }
        getHasilPPDB()
        handleNotification()
      })
      .catch((error) => {
        console.log(error)
      })

    setIsLoading(false)
  }
  return (
    <>
      <LoadingSpinner
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <Notification
        message={message}
        status={status}
      />
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='px-6 py-2 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
              No
            </th>
            <th className='px-6 py-2 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
              No Pendaftaran
            </th>
            <th className='px-6 py-2 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
              Nama Calon Peserta Didik
            </th>
            <th className='px-6 py-2 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
              Sekolah Asal
            </th>
            <th className='px-6 py-2 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
              Jenis Kelamin
            </th>
            <th className='px-6 py-2 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
              Status
            </th>
            <th className='px-6 py-2 bg-gray-200'>Action</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
          {data?.map((item, i) => (
            <tr key={i}>
              <td className='px-6 py-2 whitespace-nowrap'>
                {i + 1 + 10 * (currentPage - 1)}
              </td>
              <td className='px-6 py-2 whitespace-nowrap'>
                {item.noPendaftaran}
              </td>
              <td className='px-6 py-2 whitespace-nowrap'>
                {item.namaLengkap}
              </td>
              <td className='px-6 py-2 whitespace-nowrap'>
                {item.sekolahAsal}
              </td>
              <td className='px-6 py-2 whitespace-nowrap'>
                {item.jenisKelamin}
              </td>
              <td className='px-6 py-2 whitespace-nowrap'>{item.status}</td>
              <td className='px-6 py-2 whitespace-nowrap flex justify-center gap-2'>
                <button className='text-white rounded-md px-2 py-1 bg-origin-blue items-center justify-center flex gap-1'>
                  <Image
                    src={'/images/u_save.svg'}
                    alt='Save images'
                    width={18}
                    height={18}
                  />{' '}
                  View
                </button>
                <button
                  className={` rounded-md px-2 py-1  flex items-center justify-center gap-1 ${
                    item.status === 'verified'
                      ? 'bg-green-300 text-slate-100 cursor-not-allowed'
                      : 'text-white bg-green-600'
                  }`}
                  onClick={() => {
                    updateStatus(item.id)
                  }}
                  disabled={item.status === 'verified'}
                >
                  <CheckCircleIcon className='w-[18px]' /> Verify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
