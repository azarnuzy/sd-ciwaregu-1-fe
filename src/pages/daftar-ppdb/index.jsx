import MainForm from '@/components/FormPPDB/Main'
import Page1 from '@/components/FormPPDB/Page1'
import Page2 from '@/components/FormPPDB/Page2'
import FormProvider, { useFormContext } from '@/context/form-context'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

function FormPpdb() {
  return (
    <MainLayout>
      <FormProvider>
        <MainForm />
      </FormProvider>
    </MainLayout>
  )
}

export default FormPpdb
