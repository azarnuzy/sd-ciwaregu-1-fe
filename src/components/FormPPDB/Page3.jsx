import { useFormContext } from '@/context/form-context'
import React, { useEffect, useState } from 'react'
import InputText from '../Form/InputText'
import { dataPage2, pendidikan } from '@/utils/form'
import SelectItem from '../Form/SelectItem'
import RadioButton from '../Form/RadioButton'
import axios from 'axios'
import { useRouter } from 'next/router'
import LoadingSpinner from '../Loading/LoadingSpinner'
import { useAuth } from '@/context/auth-context'

function Page3() {
  const { kelengkapanData, register, handleSubmit, errors, previousPage } =
    useFormContext()
  const [isLoading, setIsLoading] = useState(false)

  const { token } = useAuth()
  const router = useRouter()

  const onSubmit = (data) => {
    setIsLoading(true)
    const postData = async () => {
      try {
        const formData = new FormData()
        formData.append('namaLengkap', kelengkapanData.namaLengkap)
        formData.append('namaPanggilan', kelengkapanData.namaPanggilan)
        formData.append('jenisKelamin', kelengkapanData.jenisKelamin)
        formData.append('tempatLahir', kelengkapanData.tempatLahir)
        formData.append('tanggalLahir', kelengkapanData.tanggalLahir)
        formData.append('agama', kelengkapanData.agama)
        formData.append('tinggiBadan', kelengkapanData.tinggiBadan)
        formData.append('beratBadan', kelengkapanData.beratBadan)
        formData.append('alamat', kelengkapanData.alamat)
        formData.append('rt', kelengkapanData.rt)
        formData.append('rw', kelengkapanData.rw)
        formData.append('kelurahan', kelengkapanData.kelurahan)
        formData.append('kecamatan', kelengkapanData.kecamatan)
        formData.append('kabupaten', kelengkapanData.kabupaten)
        formData.append('provinsi', kelengkapanData.provinsi)
        formData.append('kodePos', kelengkapanData.kodePos)
        formData.append('noTelp', kelengkapanData.noHp)
        formData.append('asalMuasal', kelengkapanData.asalMuasal)
        formData.append('sekolahAsal', kelengkapanData.namaAsalSekolah)
        formData.append('namaAyah', kelengkapanData.ayahName)
        formData.append('pendidikanAyah', kelengkapanData.ayahPendidikan)
        formData.append('pekerjaanAyah', kelengkapanData.ayahPekerjaan)
        formData.append('penghasilanAyah', kelengkapanData.penghasilanAyah)
        formData.append('namaIbu', kelengkapanData.ibuName)
        formData.append('pendidikanIbu', kelengkapanData.ibuPendidikan)
        formData.append('pekerjaanIbu', kelengkapanData.ibuPekerjaan)
        formData.append('penghasilanIbu', kelengkapanData.penghasilanIbu)
        formData.append('namaWali', null)
        formData.append('pendidikanWali', null)
        formData.append('pekerjaanWali', null)
        formData.append('penghasilanWali', null)
        formData.append('pasFotoUrl', kelengkapanData.pasPhoto[0])
        formData.append('aktaUrl', kelengkapanData.akteLahir[0])
        formData.append('kkUrl', kelengkapanData.kartuKeluarga[0])
        // Send POST request
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/v1/ppdb`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`,
            },
          }
        )
        // console.log(response.data)
        router.push('/daftar-ppdb/success')
      } catch (error) {
        console.error(error)
      }

      setIsLoading(false)
    }

    postData()
  }

  useEffect(() => {
    // console.log(kelengkapanData)
  }, [kelengkapanData])

  return (
    <div className='flex justify-center items-center flex-col'>
      <LoadingSpinner
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <h2 className='my-8 max-w-lg font-bold text-center text-3xl mb-5 tracking-wider'>
        Formulir PPDB SD Negeri Ciwaregu
      </h2>
      <div className='border border-solid bg-origin-blue h-2 w-16 flex justify-center'></div>
      <form
        className='w-full my-8 px-8 sm:px-16 py-20 rounded-xl bg-white grid grid-cols-4 gap-5 shadow '
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className='col-span-4 uppercase tracking-wide text-gray-700 text-lg font-bold '>
          Identitas Keluarga
        </h3>
        {dataPage2.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className=' col-span-4'>
                <InputText
                  type={'text'}
                  name={item.nameInput.name}
                  label={item.nameInput.label}
                  placeholder={item.nameInput.placeholder}
                  errors={errors}
                  id={item.nameInput.id}
                  params={{ required: true }}
                  errorText={item.nameInput.errorText}
                  register={register}
                />
              </div>
              <div className=' col-span-4'>
                <SelectItem
                  id={item.pendidikanInput.id}
                  register={register}
                  errors={errors}
                  data={item.pendidikanInput.data}
                  errorText={item.pendidikanInput.errorText}
                  label={item.pendidikanInput.label}
                  defaultValue={item.pendidikanInput.defaultValue}
                />
              </div>
              <div className=' col-span-4'>
                <SelectItem
                  id={item.pekerjaanInput.id}
                  register={register}
                  errors={errors}
                  data={item.pekerjaanInput.data}
                  errorText={item.pekerjaanInput.errorText}
                  label={item.pekerjaanInput.label}
                  defaultValue={item.pekerjaanInput.defaultValue}
                />
              </div>
              <div className='col-span-4'>
                <RadioButton
                  data={item.penghasilanInput.data}
                  register={register}
                  errors={errors}
                  label={item.penghasilanInput.label}
                  errorText={item.penghasilanInput.errorText}
                  name={item.penghasilanInput.id}
                />
              </div>
            </React.Fragment>
          )
        })}
        <div className='col-span-4 gap-3 flex justify-end items-center'>
          <button
            className='justify-self-end bg-white text-origin-blue border-1 border-origin-blue border-solid border font-medium rounded-lg px-3 py-3'
            onClick={() => {
              previousPage()
            }}
          >
            Sebelumnya
          </button>
          <button
            className='justify-self-end bg-origin-blue text-white font-medium rounded-lg px-10 py-3'
            type='submit'
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page3
