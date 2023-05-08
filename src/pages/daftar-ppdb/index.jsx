import Page1 from '@/components/FormPPDB/Page1'
import FormProvider from '@/context/FormContext'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

function FormPpdb() {
  const { handleSubmit, control } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <MainLayout>
      <FormProvider>
        <Page1 />
      </FormProvider>
    </MainLayout>
  )
}

export default FormPpdb
