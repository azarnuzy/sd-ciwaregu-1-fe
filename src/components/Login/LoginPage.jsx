import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import content1 from '../../assets/images/content-1.jpg'
import SecondNavbar from '../Navbar/SecondNavbar'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import InputText from '../Form/InputText'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/router'
import LoadingSpinner from '../Loading/LoadingSpinner'

export default function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()

  const { login } = useAuth()
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data) => {
    setIsLoading(true)
    const response = await login(data)
    setIsLoading(false)
    if (response.role === 'Admin') {
      router.push('/admin')
    } else {
      router.push('/')
    }
  }

  return (
    <>
      <div className='w-full h-screen flex flex-row'>
        <div className='w-full md:w-3/5 md:block hidden h-full'>
          <Image
            src={content1}
            className='object-cover w-full
          h-full'
          />
        </div>
        <div className='w-full md:w-2/5 h-full bg-slate-100 flex justify-center items-center'>
          <form
            className='relative bg-white shadow-2xl w-[350px] p-10 min-h-fit rounded-3xl flex flex-col justify-center items-center '
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='w-full flex justify-start  text-sm my-3 gap-1 font-semibold text-origin-blue'>
              <ArrowLeftIcon className='w-[20px] ' />
              <Link
                href={'/'}
                className='font-bold'
              >
                Beranda
              </Link>
            </div>
            <h3 className='text-xl font-bold tracking-wide mb-5'>
              Selamat Datang Kembali
            </h3>
            <div className='w-full'>
              <InputText
                name={'email'}
                type={'email'}
                label={'Email'}
                placeholder={'Masukan Email'}
                errors={errors}
                id={'email'}
                params={{ required: true, pattern: /^\S+@\S+$/i }}
                errorText={'Email Harus Diisi'}
                register={register}
              />
            </div>
            <div className='w-full my-3'>
              <InputText
                name={'password'}
                type={'password'}
                label={'Password'}
                placeholder={'Masukan Password'}
                errors={errors}
                id={'password'}
                params={{
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                }}
                errorText={
                  ' Password Harus Diisi dan Mengandung 8 Karakter, 1 Huruf Besar, 1 Huruf Kecil, dan 1 Simbol'
                }
                register={register}
              />
            </div>
            <div className='w-full flex justify-center items-center flex-col'>
              <button
                className='w-full flex justify-center py-2 mt-2 text-sm rounded-md
            text-white bg-[#381DDB] hover:bg-[#281496] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                type='submit'
              >
                Masuk
              </button>
              <p className='text-sm mt-5 text-slate-600'>
                Belum memiliki akun?{' '}
                <a
                  href='/register'
                  className='text-sm text-red-500'
                >
                  Daftar disini!
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <LoadingSpinner
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </>
  )
}
