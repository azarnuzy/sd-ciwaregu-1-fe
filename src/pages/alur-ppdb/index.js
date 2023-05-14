import MainLayout from '@/layouts/MainLayout'
import Image from 'next/image'
import React from 'react'

function AlurPPDB() {
  return (
    <>
      <MainLayout>
        <div className='flex justify-center items-center flex-col'>
          <h2 className='my-8 max-w-lg font-bold text-center text-3xl mb-5 tracking-wider'>
            Alur Pendaftaran Peserta Didik Baru SD Negeri Ciwaregu
          </h2>
          <div className='border border-solid bg-origin-blue h-2 w-16 flex justify-center'></div>
          <div className='max-w-4xl w-full justify-between flex items-center gap-10'>
            <div className='flex flex-col gap-8 justify-center items-center w-[200px]'>
              <Image
                src={'/images/alur1.svg'}
                alt='alur ppdb ke-1: Calon peserta didik baru menyiapkan berkas persyaratan'
                width={200}
                height={200}
              />
              <p className='font-bold text-center'>
                Calon peserta didik baru menyiapkan berkas persyaratan
              </p>
            </div>
            <div className='flex items-center justify-center'>
              <Image
                src={'/images/arrow.svg'}
                alt='arrow'
                width={197}
                height={0}
              />
            </div>
            <div className='flex flex-col gap-8 justify-center items-center w-[200px]'>
              <Image
                src={'/images/alur2.svg'}
                alt='alur ppdb ke-2: Calon peserta didik baru mengakses laman situs SDN CIwaregu
'
                width={200}
                height={200}
              />
              <p className='font-bold text-center'>
                Calon peserta didik baru mengakses laman situs SDN CIwaregu
              </p>
            </div>
          </div>
          <div className='flex justify-end max-w-4xl w-full my-4'>
            <div className='flex items-center justify-center w-[200px]'>
              <Image
                src={'/images/arrow3.svg'}
                alt='arrow'
                className='h-[150px]'
                width={153}
                height={0}
              />
            </div>
          </div>
          <div className='max-w-4xl w-full justify-between flex items-center gap-10'>
            <div className='flex flex-col gap-8 justify-center items-center w-[200px]'>
              <Image
                src={'/images/alur3.svg'}
                alt='alur ppdb ke-1: Calon peserta didik baru melakukan pendaftaran akun terlebih dahulu kemudian mengisi form pendaftaran peserta didik baru secara online'
                width={200}
                height={200}
              />
              <p className='font-bold text-center'>
                Calon peserta didik baru melakukan pendaftaran akun terlebih
                dahulu kemudian mengisi form pendaftaran peserta didik baru
                secara online
              </p>
            </div>
            <div className='flex items-center justify-center'>
              <Image
                src={'/images/arrow2.svg'}
                alt='arrow'
                width={197}
                height={0}
              />
            </div>
            <div className='flex flex-col gap-8 justify-center items-center w-[200px]'>
              <Image
                src={'/images/alur4.svg'}
                alt='alur ppdb ke-1: Calon peserta didik baru mengunggah dokumen persyaratan'
                width={200}
                height={200}
              />
              <p className='font-bold text-center'>
                Calon peserta didik baru mengunggah dokumen persyaratan
              </p>
            </div>
          </div>
          <div className='flex max-w-4xl w-full my-4'>
            <div className='flex items-center justify-center w-[200px]'>
              <Image
                src={'/images/arrow3.svg'}
                alt='arrow'
                className='h-[150px]'
                width={153}
                height={0}
              />
            </div>
          </div>
          <div className='max-w-4xl w-full justify-between flex items-center gap-10'>
            <div className='flex flex-col gap-8 justify-center items-center w-[200px]'>
              <Image
                src={'/images/alur5.svg'}
                alt='alur ppdb ke-5: Calon peserta didik baru mengunduh bukti pendaftaran'
                width={200}
                height={200}
              />
              <p className='font-bold text-center'>
                Calon peserta didik baru mengunduh bukti pendaftaran
              </p>
            </div>
            <div className='flex items-center justify-center'>
              <Image
                src={'/images/arrow.svg'}
                alt='arrow'
                width={197}
                height={0}
              />
            </div>
            <div className='flex flex-col gap-8 justify-center items-center w-[200px]'>
              <Image
                src={'/images/alur6.svg'}
                alt='alur ppdb ke-6: Operator melakukan verifikasi berkas persyaratan
'
                width={200}
                height={200}
              />
              <p className='font-bold text-center'>
                Operator melakukan verifikasi berkas persyaratan
              </p>
            </div>
          </div>
          <div className='flex justify-end max-w-4xl w-full my-4'>
            <div className='flex items-center justify-center w-[200px]'>
              <Image
                src={'/images/arrow3.svg'}
                alt='arrow'
                className='h-[150px]'
                width={153}
                height={0}
              />
            </div>
          </div>
          <div className='flex justify-end max-w-4xl w-full my-4'>
            <div className='flex flex-col gap-4 items-center justify-center w-[200px]'>
              <Image
                src={'/images/alur7.svg'}
                alt='alur ppdb ke-6: Operator melakukan verifikasi berkas persyaratan'
                className='h-[150px]'
                width={153}
                height={0}
              />
              <p className='font-bold text-center'>
                Operator melakukan verifikasi berkas persyaratan
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default AlurPPDB
