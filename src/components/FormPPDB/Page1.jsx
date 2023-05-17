import { useFormContext } from '@/context/form-context'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import RadioButton from '../Form/RadioButton'
import { agamaIndonesia, asalMuasal, jenisKelamin } from '@/utils/form'
import InputText from '../Form/InputText'
import InputFile from '../Form/InputFile'
import SelectItem from '../Form/SelectItem'

function Page1() {
  const { kelengkapanData, setKelengkapanData, nextPage } = useFormContext()
  const [formData, setFormData] = useState({})

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()

  const handleInputChange = (e) => {
    const { name, files } = e.target

    setFormData({ ...formData, [name]: files })
  }

  const onSubmit = (data) => {
    setKelengkapanData(data)
    nextPage()
  }

  return (
    <div className='flex justify-center items-center flex-col'>
      <h2 className='my-8 max-w-lg font-bold text-center text-3xl mb-5 tracking-wider'>
        Formulir PPDB SD Negeri Ciwaregu
      </h2>
      <div className='border border-solid bg-origin-blue h-2 w-16 flex justify-center'></div>
      <form
        className='w-full my-8 px-8 sm:px-16 py-20 rounded-xl bg-white grid grid-cols-4 gap-5 shadow '
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className='col-span-4 uppercase tracking-wide text-gray-700 text-lg font-bold '>
          Kelengkapan Data Calon Peserta Didik
        </h3>
        <div className=' col-span-4'>
          <RadioButton
            data={asalMuasal}
            register={register}
            errors={errors}
            label={'Asal Muasal'}
            errorText={'Asal Muasal Harus Diisi'}
          />
        </div>
        <div className=' col-span-4'>
          <InputText
            name={'namaAsalSekolah'}
            type={'text'}
            label={'Nama Asal Sekolah'}
            placeholder={'Masukan Nama Asal Sekolah'}
            errors={errors}
            id={'namaAsalSekolah'}
            params={{ required: true }}
            errorText={
              " Nama Asal Sekolah Harus Diisi, jika kosong silahkan isi dengan '-'"
            }
            register={register}
          />
        </div>
        <div className='col-span-4'>
          <InputFile
            id={'pasPhoto'}
            label={'Upload Pas Photo 3x4'}
            params={{
              required: true,
              onChange: (e) => {
                handleInputChange(e)
              },
            }}
            register={register}
            errors={errors}
            formData={formData?.pasPhoto}
            errorText={'Pas Photo Harus Diunggah'}
          />
        </div>
        <div className='col-span-4'>
          <InputFile
            id={'akteLahir'}
            label={'Surat Keterangan/Akte Lahir'}
            params={{
              required: true,
              onChange: (e) => {
                handleInputChange(e)
              },
            }}
            register={register}
            errors={errors}
            formData={formData?.akteLahir}
            errorText={'Surat Keterangan/Akte Lahir Harus Diunggah'}
          />
        </div>
        <div className='col-span-4'>
          <InputFile
            id={'kartuKeluarga'}
            label={'Kartu Keluarga'}
            params={{
              required: true,
              onChange: (e) => {
                handleInputChange(e)
              },
            }}
            register={register}
            errors={errors}
            formData={formData?.kartuKeluarga}
            errorText={'Kartu Keluarga Harus Diunggah'}
          />
        </div>
        <div className='col-span-4 flex justify-end items-center'>
          <button
            className='justify-self-end bg-origin-blue text-white font-medium rounded-lg px-10 py-3'
            type='submit'
          >
            Selanjutnya
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page1
