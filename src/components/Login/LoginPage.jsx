import React, { useState } from 'react'
import Image from 'next/image'
import content1 from '../../assets/images/content-1.jpg'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/router'
import LoadingSpinner from '../Loading/LoadingSpinner'

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

  const { login, previousPath, setPreviousPath } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const validateEmail = (value) => {
    if (!value) {
      return 'Email Harus Diisi'
    }
    // Regular expression for email validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    // console.log(!emailRegex.test(value))
    if (!emailRegex.test(value)) {
      return 'Format Email Salah'
    }
    return true
  }

  const validatePassword = (value) => {
    if (!value) {
      return 'Password Harus Diisi'
    }
    // Regular expression for password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d]{8,}$/
    if (!passwordRegex.test(value)) {
      return 'Password harus mengandung 8 karakter, 1 kapital, dan 2 nomor'
    }
    return true
  }

  const onSubmit = async (data) => {
    setIsLoading(true)
    const response = await login(data)
    console.log(response)
    setIsLoading(false)
    if (response) {
      if (!response?.status) {
        if (response?.message?.includes('Email')) {
          setError('email', {
            type: 'manual',
            message: 'Email Salah',
          })
        } else {
          setError('password', {
            type: 'manual',
            message: 'Password Salah',
          })
        }
      }
      // console.log(response)

      if (previousPath !== '/') {
        router.push(`${previousPath}`)
      } else {
        if (
          response?.data?.role === 'Admin' ||
          response?.data?.role === 'Teachers'
        ) {
          router.push('/admin')
        }
        if (response?.data?.role === 'Users') {
          router.push('/')
        }
      }
      setPreviousPath('/')
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
            alt='Siswa'
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
              <label
                className='form-title'
                htmlFor='email'
              >
                Email
              </label>
              <input
                placeholder='Masukkan Email'
                type='email'
                className='form-container'
                id='email'
                value={email}
                {...register('email', {
                  onChange: (e) => {
                    setEmail(e.target.value)
                  },
                  validate: validateEmail,
                })}
              />
              {errors.email && (
                <span
                  className='text-red-700 text-sm my-1 inline-block'
                  role='alert'
                >
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className='w-full my-3'>
              <label
                className='form-title'
                htmlFor='password'
              >
                Password
              </label>
              <input
                placeholder='Masukkan Password'
                type='password'
                className='form-container'
                id='password'
                value={password}
                {...register('password', {
                  onChange: (e) => {
                    setPassword(e.target.value)
                  },
                  validate: validatePassword,
                })}
              />
              {errors.password && (
                <span
                  className='text-red-700 text-sm my-1 inline-block'
                  role='alert'
                >
                  {errors.password.message}
                </span>
              )}
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
                <Link
                  href='/register'
                  className='text-sm text-red-500'
                >
                  Daftar disini!
                </Link>
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
