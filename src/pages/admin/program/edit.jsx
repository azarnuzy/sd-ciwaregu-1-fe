import SocialMedia from '@/components/Navbar/SocialMedia'
import AdminLayout from '@/layouts/AdminLayout'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { AddIcon } from '@/components/Icons/AddIcon'
import axios from 'axios'
import getConfig from 'next/config'
import { useEffect } from 'react'
import { useAuth } from '@/context/auth-context'

export default function EditProgram() {
  const router = useRouter()
  const { id } = router.query
  const [programData, setProgramData] = useState({
    name: '',
    goal: '',
  })

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
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      }

      const response = await fetch(`${apiUrl}/v1/programs/${id}`, {
        method: 'GET',
        headers: headers,
      })

      if (response.ok) {
        const data = await response.json()
        console.log(data.data)
        setProgramData(data.data)
      } else {
        console.error('Error:', response.status)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleChange = (e) => {
    setProgramData({ ...programData, [e.target.name]: e.target.value })
  }

  const handleUpdate = async (event) => {
    event.preventDefault()
    try {
      const postData = new URLSearchParams()
      postData.append('name', programData.name)
      postData.append('goal', programData.goal)

      const { publicRuntimeConfig } = getConfig()
      const apiKey = publicRuntimeConfig.API_KEY
      const apiUrl = publicRuntimeConfig.API_URL

      console.log(postData)
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${apiKey}`,
      }

      const response = await axios.put(
        `${apiUrl}/v1/programs/${id}`,
        postData.toString(),
        {
          headers: headers,
        }
      )
      console.log(response.data)
      router.back()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <SocialMedia />
      <AdminLayout>
        <div className='w-full pb-10 pt-8 px-4 h-fit flex flex-row justify-center items-center'>
          <h1 className='text-3xl font-bold text-slate-900 uppercase tracking-wide'>
            Edit Program
          </h1>
        </div>
        <div className='w-[1000px] h-fit flex justify-center items-center'>
          <div
            className='w-full bg-white rounded-xl flex flex-col border-slate-900 border-2 justify-center items-center 
          shadow-xl h-full'
          >
            <div className='w-full h-full flex justify-center items-center py-16'>
              <form
                className='w-5/6'
                onSubmit={handleUpdate}
              >
                <div className='w-full'>
                  <label className='text-xl font-semibold tracking-wide'>
                    Jenis Kegiatan
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={programData.name}
                    onChange={handleChange}
                    autoComplete='name'
                    required
                    className='my-3 w-full py-2 px-3 border border-slate-900 placeholder-black/30
              text-slate-900 rounded-sm focus:outline-none focus:ring-light-purple focus:border-light-purple text-md
              shadow-md'
                    placeholder='Masukan jenis kegiatan'
                  />
                </div>
                <div className='w-full'>
                  <label className='text-xl font-semibold tracking-wide'>
                    Sasaran
                  </label>
                  <textarea
                    id='goal'
                    name='goal'
                    value={programData.goal}
                    onChange={handleChange}
                    autoComplete='goal'
                    required
                    className='w-full my-3 py-2 px-3 border border-slate-900 placeholder-black/30
                    text-slate-900 rounded sm focus:outline-none focus:ring-light-purple focus:border-light-purple text-md
                    shadow-md'
                    placeholder='Masukan deskripsi kegiatan'
                    rows='3'
                  ></textarea>
                </div>

                <div className='w-full flex flex-row gap-2 mt-4 justify-center'>
                  <button
                    type='submit'
                    className='py-2 px-4 text-sm text-white rounded-md bg-light-purple
                    flex flex-row justify-center items-center gap-2 uppercase font-semibold'
                  >
                    <AddIcon className='text-xl' />
                    Tambah
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  )
}
