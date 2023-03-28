import React from 'react'

function Footer() {
  return (
    <div className='w-full max-w-7xl md:px-8 mb-10 gap-10 md:mx-auto flex flex-col md:flex-row border-t-[1px] px-8  border-dotted border-light-red pt-10'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-xl font-bold uppercase tracking-wide'>
          SDN CIWAREGU
        </h3>
        <p className='text-slate-400'>Ikuti Kami Di sini!</p>
        <div className='text-blue-400 flex gap-5'>
          <svg
            class='h-6 w-6 text-blue-400'
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
            class='h-6 w-6 text-blue-400'
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
          <span className='p-[2px] rounded-full bg-blue-400 text-white'>
            <svg
              class='h-6 w-6 text-white'
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
      <div className='flex flex-col gap-2'>
        <h3 className='text-xl font-bold tracking-wide'>Hubungi Kami</h3>
        <p className='text-slate-400'>
          Kp. Ciwaregu, RT.01/RW.7, Mekargalih, Kec. Cikalongkulon, Kabupaten
          Cianjur, Jawa Barat 43291
        </p>
        <p className='text-slate-400'>0858-5451-9008</p>
        <p className='text-slate-400'>sd.ciwaregu@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer
