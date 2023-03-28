import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import content1 from '../../assets/images/content-1.jpg'
import content2 from '../../assets/images/content-2.jpg'
import content3 from '../../assets/images/content-3.jpg'
import content4 from '../../assets/images/content-4.jpg'
import content5 from '../../assets/images/content-5.jpg'
import content6 from '../../assets/images/content-6.jpg'
import content7 from '../../assets/images/content-7.jpg'
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper'

function Gallery() {
  const albums = [
    content1,
    content2,
    content3,
    content4,
    content5,
    content6,
    content7,
  ]

  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getDevice = () => {
    if (screenWidth < 728) {
      return 1
    } else if (screenWidth < 1280) {
      return 2
    } else {
      return 3
    }
  }
  return (
    <div className='w-full max-w-7xl md:px-8 mb-10 gap-10 justify-center md:mx-auto flex flex-col'>
      <h2 className='text-center font-bold text-3xl tracking-wider'>Gallery</h2>
      <div>
        <Swiper
          slidesPerView={getDevice()}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className='mySwiper'
        >
          {albums.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  src={item}
                  alt='gallery'
                  className='object-cover rounded-xl  max-w-[400px] max-h-[300px] w-full px-8 md:px-4 md:w-[50vw] h-[40vh] md:h-[40vh]'
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Gallery
