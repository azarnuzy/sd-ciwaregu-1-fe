import SocialMedia from '@/components/Navbar/SocialMedia'
import AdminLayout from '@/layouts/AdminLayout'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { EditIcon } from '@/components/Icons/EditIcon'
import getConfig from 'next/config'
import { PeopleIcon } from '@/components/Icons/PeopleIcon'
import { StudentIcon } from '@/components/Icons/StudentIcon'
import { ActivityIcon } from '@/components/Icons/ActivityIcon'
import { PrestasiIcon } from '@/components/Icons/PrestasiIcon'
import { useAuth } from '@/context/auth-context'

export default function IndexStatistik() {
  const [stats, setStats] = useState([])
  const [showModal, setShowModal] = useState(false)

  const { token } = useAuth()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {

      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/stats`, {
        method: 'GET',
        headers: headers,
      })

      if (response.ok) {
        const data = await response.json()
        console.log(data.data)
        setStats(data.data)
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
          <h1 className='text-3xl font-bold'>Statistik</h1>

          {/* <button
            onClick={() => setShowModal(true)}
            
            className="py-2 px-4 flex flex-row justify-center items-center bg-origin-blue hover:bg-[#1c0081] rounded-sm text-slate-100"
          >
            <div className="mr-2 cursor-pointer">edit</div>
            <EditIcon />
          </button> */}
        </div>
        <div className='grid grid-cols-4 gap-4'>
          <div className='w-full h-[200px] rounded-xl flex justify-center items-center flex-row border-2 border-slate-900 shadow-xl'>
            <div className='w-3/6 h-full bg-light-purple rounded-lg flex justify-center items-center text-6xl text-slate-100'>
              <PeopleIcon />
            </div>
            <div className='w-3/6 h-full flex flex-col justify-center items-center'>
              <h2 className='text-3xl font-bold text-light-purple'>
                {stats.teacherCount}
              </h2>
              <p className='text-xs text-center uppercase font-slate-500 font-semibold mt-1'>
                Guru & Staff
              </p>
            </div>
          </div>
          <div className='w-full h-[200px] rounded-xl flex justify-center items-center flex-row border-2 border-slate-900 shadow-xl'>
            <div className='w-3/6 h-full bg-light-purple rounded-lg flex justify-center items-center text-6xl text-slate-100'>
              <StudentIcon />
            </div>
            <div className='w-3/6 h-full flex flex-col justify-center items-center'>
              <h2 className='text-3xl font-bold text-light-purple'>
                {stats.studentCount}
              </h2>
              <p className='text-xs text-center uppercase font-slate-500 font-semibold mt-1'>
                Siswa
              </p>
            </div>
          </div>
          <div className='w-full h-[200px] rounded-xl flex justify-center items-center flex-row border-2 border-slate-900 shadow-xl'>
            <div className='w-3/6 h-full bg-light-purple rounded-lg flex justify-center items-center text-6xl text-slate-100'>
              <ActivityIcon />
            </div>
            <div className='w-3/6 h-full flex flex-col justify-center items-center'>
              <h2 className='text-3xl font-bold text-light-purple'>
                {stats.programCount}
              </h2>
              <p className='text-xs text-center uppercase font-slate-500 font-semibold mt-1'>
                Program Sekolah
              </p>
            </div>
          </div>
          <div className='w-full h-[200px] rounded-xl flex justify-center items-center flex-row border-2 border-slate-900 shadow-xl'>
            <div className='w-3/6 h-full bg-light-purple rounded-lg flex justify-center items-center text-6xl text-slate-100'>
              <PrestasiIcon />
            </div>
            <div className='w-3/6 h-full flex flex-col justify-center items-center'>
              <h2 className='text-3xl font-bold text-light-purple'>
                {stats.awardCount}
              </h2>
              <p className='text-xs text-center uppercase font-slate-500 font-semibold mt-1'>
                Prestasi
              </p>
            </div>
          </div>
          {showModal ? (
            <>
              <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                  {/*content*/}
                  <div className='border-0 rounded-lg shadow-lg relative flex flex-col min-w-[400px] bg-white outline-none focus:outline-none'>
                    {/*header*/}
                    <div className='flex gap-4 items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                      <h3 className='text-3xl font-semibold'>Update Quiz</h3>
                      <button
                        className='p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                        onClick={() => setShowModal(false)}
                      >
                        ×
                      </button>
                    </div>
                    {/*body*/}
                    <div className='relative p-6 flex-auto'>
                      <form>
                        <div className='mb-6'>
                          <label
                            htmlFor='judul'
                            className='block mb-2 text-sm font-semibold text-gray-700 '
                          >
                            Guru & Staff
                          </label>
                          <input
                            type='number'
                            id='judul'
                            name='judul'
                            autoComplete='judul'
                            className='bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                            placeholder='masukan jumlah guru & staff'
                            // value={judulQuiz}
                            // onChange={handleJudulChange}
                            required
                          />
                        </div>
                        <div className='mb-6'>
                          <label
                            htmlFor='judul'
                            className='block mb-2 text-sm font-semibold text-gray-700 '
                          >
                            Siswa
                          </label>
                          <input
                            type='number'
                            id='judul'
                            name='judul'
                            autoComplete='judul'
                            className='bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                            placeholder='masukan jumlah siswa'
                            // value={judulQuiz}
                            // onChange={handleJudulChange}
                            required
                          />
                        </div>
                        <div className='mb-6'>
                          <label
                            htmlFor='judul'
                            className='block mb-2 text-sm font-semibold text-gray-700 '
                          >
                            Program Sekolah
                          </label>
                          <input
                            type='number'
                            id='judul'
                            name='judul'
                            autoComplete='judul'
                            className='bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                            placeholder='masukan jumlah program sekolah'
                            // value={judulQuiz}
                            // onChange={handleJudulChange}
                            required
                          />
                        </div>
                        <div className='mb-6'>
                          <label
                            htmlFor='judul'
                            className='block mb-2 text-sm font-semibold text-gray-700 '
                          >
                            Prestasi
                          </label>
                          <input
                            type='number'
                            id='judul'
                            name='judul'
                            autoComplete='judul'
                            className='bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                            placeholder='masukan jumlah prestasi'
                            // value={judulQuiz}
                            // onChange={handleJudulChange}
                            required
                          />
                        </div>
                      </form>
                    </div>
                    {/*footer*/}
                    <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                      <button
                        className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                        type='button'
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className='bg-slate-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                        type='submit'
                        // onClick={submitUpdateQuiz}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
            </>
          ) : null}
        </div>
      </AdminLayout>
    </>
  )
}
