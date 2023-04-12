import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const menuData = [
  { id: 1, label: 'Visi Misi', url: '/profil/visi-misi' },
  { id: 2, label: 'Program', url: '/profil/program' },
  { id: 3, label: 'Fasilitas', url: '/profil/fasilitas' },
  { id: 4, label: 'Informasi Sekolah', url: '/profil/informasi-sekolah' },
]
function Navbar() {
  const [isActive, setIsActive] = useState(false)
  const router = useRouter()

  const path = router.pathname
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleMenuOpen() {
    setIsMenuOpen(true)
  }

  function handleMenuClose() {
    setIsMenuOpen(false)
  }
  useEffect(() => {}, [])

  return (
    <>
      <div
        className={` z-[1000]  hidden md:block w-full px-8 transition duration-300 ease-in-out ${
          path === '/' ? 'absolute bg-transparent' : 'bg-light-red'
        }`}
      >
        <div className='py-4 flex max-w-7xl lg:mx-auto justify-between  items-center '>
          <h3 className='text-3xl italic text-white font-bold tracking-wide'>
            SDN Ciwaregu
          </h3>
          <ul className='flex list-none gap-4 md:gap-5 lg:gap-8 text-white uppercase items-center font-semibold'>
            <li>
              <a href='/'>beranda</a>{' '}
            </li>
            <li>
              <button
                onMouseEnter={() => setIsMenuOpen(true)}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='700   py-2 px-4 rounded inline-flex items-center'
              >
                <span className=' uppercase items-center font-semibold mr-1'>
                  Profile
                </span>
                <svg
                  className='h-6 w-6 text-white'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  {' '}
                  <path
                    stroke='none'
                    d='M0 0h24v24H0z'
                  />{' '}
                  <polyline points='6 9 12 15 18 9' />
                </svg>
              </button>
              <Transition
                show={isMenuOpen}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <div
                  className='absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg'
                  onMouseEnter={() => setIsMenuOpen(true)}
                  onMouseLeave={() => setIsMenuOpen(false)}
                >
                  {menuData.map((item) => (
                    <a
                      href={item.url}
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      key={item.id}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </Transition>
            </li>
            <li>
              <a href='/guru-staff'>guru & staff</a>
            </li>
            <li>
              <a href='/galeri'>galeri</a>
            </li>
            <li>
              <a href='/pendaftaran-peserta-didik-baru'>ppdb</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${
          isActive ? 'fixed' : 'hidden'
        } w-full h-screen z-10 bg-light-dark transition duration-300 opacity-30 top-0 left-0`}
        onClick={() => {
          setIsActive(() => false)
        }}
      ></div>
      <div
        className={`${
          path === '/' ? 'absolute bg-transparent' : 'bg-light-red py-4'
        } z-10  w-full top-4 md:hidden transition duration-300 ease-in-out `}
      >
        <div className='flex justify-between px-8'>
          <h3 className='text-3xl italic text-white font-bold tracking-wide'>
            SDN Ciwaregu
          </h3>
          <div
            onClick={() => {
              setIsActive((isActive) => !isActive)
            }}
            className='min-h-fit min-w-fit cursor-pointer'
          >
            <svg
              className='h-8 w-8 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </div>
        </div>
        <div
          className={`fixed flex flex-col bg-dark-gray bg-light-dark text-white max-w-[310px] transform  gap-8 h-screen w-full top-0 z-50 px-4 pt-3 left-0 duration-1000 ease-in-out ${
            isActive ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className='flex items-center gap-1 justify-between'>
            <div className='flex gap-1 items-center'>
              <h3 className='text-2xl italic text-white font-bold tracking-wide'>
                SDN Ciwaregu
              </h3>
            </div>
            <div className='rounded-full bg-[#41444b] p-1 cursor-pointer'>
              <div
                className='text-2xl flex items-center  font-black'
                onClick={() => {
                  setIsActive(() => false)
                }}
              >
                <svg
                  className='h-8 w-8 text-white'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  {' '}
                  <path
                    stroke='none'
                    d='M0 0h24v24H0z'
                  />{' '}
                  <line
                    x1='18'
                    y1='6'
                    x2='6'
                    y2='18'
                  />{' '}
                  <line
                    x1='6'
                    y1='6'
                    x2='18'
                    y2='18'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='h-[68%]'>
            <ul className='list-none flex flex-col gap-2 text-xl uppercase'>
              <li>
                <a href='/'>beranda</a>{' '}
              </li>
              <li>
                <Menu>
                  <Menu.Button onClick={handleMenuOpen}>Menu</Menu.Button>

                  {isMenuOpen && (
                    <Menu.Items onClick={handleMenuClose}>
                      {menuData.map((item) => (
                        <Menu.Item key={item.id}>
                          <a href={item.url}>{item.label}</a>
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  )}
                </Menu>
              </li>
              <li>
                <a href='/guru-staff'>guru & staff</a>
              </li>
              <li>
                <a href='/galeri'>galeri</a>
              </li>
              <li>
                <a href='/ppdb'>ppdb</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
              <div className='flex gap-3 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                  />
                </svg>
                <span className='text-md'>0858-6451-9008</span>
              </div>
              <div className='flex gap-3 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                  />
                </svg>
                <span className='text-md'>sd.ciwaregu@gmail.com</span>
              </div>
              <div className='flex  mt-3 gap-2 items-center'>
                <span>Follow Us : </span>
                <svg
                  className='h-6 w-6 text-white'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  {' '}
                  <rect
                    x='2'
                    y='2'
                    width='20'
                    height='20'
                    rx='5'
                    ry='5'
                  />{' '}
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />{' '}
                  <line
                    x1='17.5'
                    y1='6.5'
                    x2='17.51'
                    y2='6.5'
                  />
                </svg>
                <svg
                  className='h-6 w-6 text-white'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  {' '}
                  <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z' />{' '}
                  <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02' />
                </svg>
                <span className='p-[2px] rounded-full bg-white text-[#222]'>
                  <svg
                    className='h-6 w-6 text-[#222]'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    {' '}
                    <path
                      stroke='none'
                      d='M0 0h24v24H0z'
                    />{' '}
                    <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3' />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
