import { useFormContext } from '@/context/FormContext'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputText from '../Form/InputText'
import { dataPage2, pendidikan } from '@/utils/form'
import SelectItem from '../Form/SelectItem'
import RadioButton from '../Form/RadioButton'

function Page3() {
  const {
    kelengkapanData,
    setKelengkapanData,
    formData,
    setFormData,
    register,
    handleSubmit,
    getValues,
    errors,
    page,
    previousPage,
  } = useFormContext()

  const onSubmit = (data) => {
    previousPage()
    setKelengkapanData(data)
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
          Identitas Keluarga
        </h3>
        {dataPage2.map((item, i) => (
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
              />
            </div>
          </React.Fragment>
        ))}
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
