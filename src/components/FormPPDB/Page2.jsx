import { useFormContext } from '@/context/FormContext'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import RadioButton from '../Form/RadioButton'
import { agamaIndonesia, asalMuasal, jenisKelamin } from '@/utils/form'
import InputText from '../Form/InputText'
import InputFile from '../Form/InputFile'
import SelectItem from '../Form/SelectItem'

function Page1() {
  const { kelengkapanData, setKelengkapanData, nextPage, previousPage } =
    useFormContext()
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
          Identitas Calon Peserta Didik
        </h3>
        <div className='col-span-4'>
          <InputText
            name={'namaLengkap'}
            type={'text'}
            label={'Nama Lengkap'}
            placeholder={'Masukan Nama Lengkap'}
            errors={errors}
            id={'namaLengkap'}
            params={{ required: true }}
            errorText={' Nama Lengkap Harus Diisi'}
            register={register}
          />
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <InputText
            name={'namaPanggilan'}
            type={'text'}
            label={'Nama Panggilan'}
            placeholder={'Masukan Nama Panggilan'}
            errors={errors}
            id={'namaPanggilan'}
            params={{ required: true }}
            errorText={' Nama Panggilan Harus Diisi'}
            register={register}
          />
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <RadioButton
            data={jenisKelamin}
            register={register}
            errors={errors}
            label={'Jenis Kelamin'}
            errorText={'Jenis Kelamin Harus Diisi'}
          />
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <InputText
            name={'tempatLahir'}
            type={'text'}
            label={'Tempat Lahir'}
            placeholder={'Masukan Tempat Lahir'}
            errors={errors}
            id={'tempatLahir'}
            params={{ required: true }}
            errorText={' Tempat Lahir Harus Diisi'}
            register={register}
          />
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <InputText
            name={'tanggalLahir'}
            type={'date'}
            label={'Tanggal Lahir'}
            placeholder={'Masukan Tanggal Lahir'}
            errors={errors}
            id={'tanggalLahir'}
            params={{ required: true }}
            errorText={' Tanggal Lahir Harus Diisi'}
            register={register}
          />
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <SelectItem
            id={'agama'}
            register={register}
            errors={errors}
            data={agamaIndonesia}
            errorText={'Agama Harus Diisi'}
            label={'Agama'}
            defaultValue={'Pilih Salah Satu'}
          />
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <InputText
            name={'beratBadan'}
            type={'text'}
            label={'Berat Badan'}
            placeholder={'Masukan Berat Badan'}
            errors={errors}
            id={'beratBadan'}
            params={{ required: true }}
            errorText={' Berat Badan Harus Diisi'}
            register={register}
          />
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <InputText
            name={'tinggiBadan'}
            type={'text'}
            label={'Tinggi Badan'}
            placeholder={'Masukan Tinggi Badan'}
            errors={errors}
            id={'tinggiBadan'}
            params={{ required: true }}
            errorText={' Tinggi Badan Harus Diisi'}
            register={register}
          />
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <InputText
            name={'alamat'}
            type={'text'}
            label={'Alamat'}
            placeholder={'Masukan Alamat'}
            errors={errors}
            id={'alamat'}
            params={{ required: true }}
            errorText={' Alamat Harus Diisi'}
            register={register}
          />
        </div>
        <div className='col-span-4 sm:col-span-1'>
          <InputText
            name={'rt'}
            type={'text'}
            label={'RT'}
            placeholder={'Masukan RT'}
            errors={errors}
            id={'rt'}
            params={{ required: true }}
            errorText={' RT Harus Diisi'}
            register={register}
          />
        </div>
        <div className='col-span-4 sm:col-span-1'>
          <InputText
            name={'rw'}
            type={'text'}
            label={'RW'}
            placeholder={'Masukan RW'}
            errors={errors}
            id={'rw'}
            params={{ required: true }}
            errorText={' RW Harus Diisi'}
            register={register}
          />
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <InputText
            name={'kelurahan'}
            type={'text'}
            label={'Kelurahan/Desa'}
            placeholder={'Masukan Kelurahan/Desa'}
            errors={errors}
            id={'kelurahan/desa'}
            params={{ required: true }}
            errorText={' Kelurahan/Desa Harus Diisi'}
            register={register}
          />
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <InputText
            name={'kecamatan'}
            type={'text'}
            label={'Kecamatan'}
            placeholder={'Masukan Kecamatan'}
            errors={errors}
            id={'kecamatan'}
            params={{ required: true }}
            errorText={' Kecamatan Harus Diisi'}
            register={register}
          />
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <InputText
            name={'kabupaten'}
            type={'text'}
            label={'Kabupaten'}
            placeholder={'Masukan Kabupaten'}
            errors={errors}
            id={'kabupaten'}
            params={{ required: true }}
            errorText={' Kabupaten Harus Diisi'}
            register={register}
          />
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <InputText
            name={'provinsi'}
            type={'text'}
            label={'Provinsi'}
            placeholder={'Masukan Provinsi'}
            errors={errors}
            id={'provinsi'}
            params={{ required: true }}
            errorText={' Provinsi Harus Diisi'}
            register={register}
          />
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <InputText
            name={'kodePos'}
            type={'text'}
            label={'Kode Pos'}
            placeholder={'Masukan Kode Pos'}
            errors={errors}
            id={'kodePos'}
            params={{ required: true }}
            errorText={' Kode Pos Harus Diisi'}
            register={register}
          />
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <InputText
            name={'noHp'}
            type={'text'}
            label={'Nomor Handphone'}
            placeholder={'Masukan Nomor Handphone'}
            errors={errors}
            id={'noHp'}
            params={{ required: true }}
            errorText={' Nomor Handphone Harus Diisi'}
            register={register}
          />
        </div>
        <div className='col-span-4 gap-3 flex justify-end items-center'>
          <button
            className='justify-self-end bg-white text-origin-blue border-1 border-origin-blue border-solid border font-medium rounded-lg px-3 py-3'
            type='button'
            onClick={() => {
              previousPage()
            }}
          >
            Sebelumnya
          </button>
          <button
            className='justify-self-end bg-origin-blue text-white font-medium rounded-lg px-10 py-3'
            onClick={() => nextPage()}
          >
            Selanjutnya
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page1
