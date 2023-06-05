import MainLayout from '@/layouts/MainLayout'
import React from 'react'

const content = {
  visi: 'Terwujudnya peserta didik yang beriman, bertaqwa kepada Tuhan Yang Maha Esa, berakhlak mulia, cerdas, terampil, dan sehat jasmani-rohani',
  misi: [
    '1. Memberikan dasar-dasar keimanan dan ketakwaan terhadap Tuhan Yang Maha Esa',
    '2. Memupuk / menumbuh kembangkan rasa cinta terhadap sesama manusia dan lingkungannya',
    '3. Membiasakan siswa hidup bersih',
    '4. Menerapkan sikap disiplin dan bertanggung jawab',
    '5. Mengembangkan nilai – nilai budi pekerti luhur',
    '6. Meningkatkan profesionalisme guru / personil',
  ],
}

function VisiMisi() {
  return (
    <MainLayout>
      <div className='flex justify-center items-center flex-col'>
        <h2 className='my-8 max-w-lg font-bold text-center text-3xl mb-5 tracking-wider'>
          Visi & Misi Sekolah
        </h2>
        <div className='border border-solid bg-origin-blue h-2 w-16 flex justify-center mb-10'></div>
        <div className='my-5 rounded-2xl w-full mx-4 p-4 md:mx-16 bg-light-red md:p-16 flex flex-col items-center justify-center shadow text-white gap-4'>
          <h3 className='font-bold text-2xl tracking-wide'>Visi</h3>
          <p className='font-medium text-md text-center'>{content.visi}</p>
        </div>
        <div className='my-5 rounded-2xl w-full mx-4 p-4 md:mx-16 bg-light-red md:p-16 flex flex-col items-center justify-center shadow text-white gap-4'>
          <h3 className='font-bold text-2xl tracking-wide'>Misi</h3>
          <ul className='font-medium text-md'>
            {content.misi.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  )
}

export default VisiMisi
