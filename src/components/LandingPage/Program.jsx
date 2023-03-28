import Image from 'next/image'
import React from 'react'
import content1 from '../../assets/images/content-1.jpg'
import content2 from '../../assets/images/content-2.jpg'
import content6 from '../../assets/images/content-6.jpg'
import content7 from '../../assets/images/content-7.jpg'

function Program() {
  return (
    <div className='w-full max-w-7xl md:px-8 mb-10 gap-10 justify-center md:mx-auto flex flex-col md:flex-row'>
      <div className='md:w-1/3 w-full px-8 gap-3 md:px-0 flex flex-col md:gap-10 justify-center'>
        <h2 className='font-bold text-3xl mb-5 tracking-wider'>
          Program Sekolah
        </h2>
        <p className='text-light-dark text-'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iste
          mollitia et sunt consequatur fuga natus maiores. Hic dolore eum aut ab
          facere incidunt doloremque, minima voluptatem dolores sunt culpa
          repudiandae consequatur ipsam harum exercitationem nemo! Autem cumque,
          quasi vitae provident odit atque fugiat? Totam commodi voluptatum
          architecto deserunt dolores!
        </p>
        <a
          href='#'
          className='flex w-fit gap-4 items-center py-4 px-6 mt-5 md:mt-10 bg-light-purple text-white rounded-2xl'
        >
          Lihat Semua Program{' '}
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
              x1='5'
              y1='12'
              x2='19'
              y2='12'
            />{' '}
            <line
              x1='13'
              y1='18'
              x2='19'
              y2='12'
            />{' '}
            <line
              x1='13'
              y1='6'
              x2='19'
              y2='12'
            />
          </svg>
        </a>
      </div>
      <div className='w-full px-8 md:w-2/3 flex justify-center items-end flex-wrap gap-x-8 gap-y-10'>
        <Image
          src={content1}
          alt='Siswa sedang berbaris di lapangan upacara'
          className='object-cover drop-shadow-2xl  rounded-xl filter max-w-[400px] max-h-[260px] w-[45vw] md:w-[30vw] md:h-[40vh] h-[30vh]'
        />
        <Image
          src={content2}
          alt='Siswa sedang belajar dan presentasi di kelas'
          className='object-cover drop-shadow-xl  rounded-xl filter max-w-[280px] max-h-[300px] w-[30vw] md:w-[20vw] h-[40vh] md:h-[50vh]'
        />
        <Image
          src={content6}
          alt='Siswa sedang belajar dan presentasi di kelas'
          className='object-cover drop-shadow-xl  rounded-xl filter max-w-[280px] max-h-[300px] w-[30vw] md:w-[20vw] h-[40vh] md:h-[50vh]'
        />
        <Image
          src={content7}
          alt='Siswa sedang berbaris di lapangan upacara'
          className='object-cover drop-shadow-xl  rounded-xl filter max-w-[400px] max-h-[260px] w-[45vw] md:w-[30vw] md:h-[40vh] h-[30vh]'
        />
      </div>
    </div>
  )
}

export default Program
