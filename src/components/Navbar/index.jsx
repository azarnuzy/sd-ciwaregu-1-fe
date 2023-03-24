import React, { useEffect, useState } from 'react'

function Navbar() {
  const [isActive, setIsActive] = useState(false)
  const [position, setPosition] = useState(0)

  const handleScroll = () => {
    const scrollPosition = window.scrollY // => scroll position
    setPosition(scrollPosition)
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div
        className={`absolute z-10  hidden md:block w-full px-8 transition duration-300 ease-in-out ${
          position > 0 ? 'bg-light-dark' : 'bg-transparent'
        }`}
      >
        <div className='py-4 flex max-w-7xl lg:mx-auto justify-between  items-center '>
          <h3 className='text-3xl italic text-white font-bold tracking-wide'>
            SDN Ciwaregu
          </h3>
          <ul className='flex list-none gap-4 md:gap-5 lg:gap-8 text-white uppercase items-center font-semibold'>
            <li>
              <a href='#'>beranda</a>{' '}
            </li>
            <li>
              <a href='#'>profil</a>
            </li>
            <li>
              <a href='#'>guru & staff</a>
            </li>
            <li>
              <a href='#'>galeri</a>
            </li>
            <li>
              <a href='#'>ppdb</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${
          isActive ? 'absolute' : 'hidden'
        } w-full h-screen z-10 bg-light-dark transition duration-300 opacity-30 top-0 left-0`}
        onClick={() => {
          setIsActive(() => false)
        }}
      ></div>
      <div
        className={`z-10 absolute w-full top-4 md:hidden transition duration-300 ease-in-out ${
          position > 0 ? 'bg-light-dark' : 'bg-transparent'
        }`}
      >
        <div className='flex justify-between px-8'>
          <h3 className='text-3xl italic text-white font-bold tracking-wide'>
            SDN Ciwaregu
          </h3>
          <div
            onClick={() => {
              setIsActive((isActive) => !isActive)
            }}
            className='min-h-fit min-w-fit'
          >
            <svg
              class='h-8 w-8 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
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
            <div className='rounded-full bg-[#41444b] p-1 '>
              <div
                className='text-2xl flex items-center  font-black'
                onClick={() => {
                  setIsActive(() => false)
                }}
              >
                <svg
                  class='h-8 w-8 text-white'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  stroke-width='2'
                  stroke='currentColor'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
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
                <a href='#'>beranda</a>{' '}
              </li>
              <li>
                <a href='#'>profil</a>
              </li>
              <li>
                <a href='#'>guru & staff</a>
              </li>
              <li>
                <a href='#'>galeri</a>
              </li>
              <li>
                <a href='#'>ppdb</a>
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
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
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
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                  />
                </svg>
                <span className='text-md'>sd.ciwaregu@gmail.com</span>
              </div>
              <div className='flex  mt-3 gap-2 items-center'>
                <span>Follow Us : </span>
                <svg
                  class='h-6 w-6 text-white'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
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
                  class='h-6 w-6 text-white'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  {' '}
                  <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z' />{' '}
                  <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02' />
                </svg>
                <span className='p-[2px] rounded-full bg-white text-[#222]'>
                  <svg
                    class='h-6 w-6 text-[#222]'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
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
