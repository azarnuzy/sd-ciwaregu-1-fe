import React, { createContext, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

const FormContext = createContext({})

function FormProvider({ children }) {
  const title = {
    0: 'Formulir 1',
    1: 'Formulir 2',
    2: 'Formulir 3',
  }

  const [page, setPage] = useState(1)

  const [kelengkapanData, setKelengkapanData] = useState({
    asalMuasal: '',
    namaAsalSekolah: '',
    pasPhoto: '',
    akteLahir: '',
    kartuKeluarga: '',
  })

  const [identitasDiri, setIdentitasDiri] = useState({
    namaLengkap: '',
    namaPanggilan: '',
    jenisKelamin: '',
    tempatLahir: '',
    tanggalLahir: '',
    agama: '',
    tinggiBadan: 0,
    beratBadan: 0,
    alamat: '',
    rt: '',
    rw: '',
    KelurahanDesa: '',
    kecamatan: '',
    kabupaten: '',
    provinsi: '',
    kodePos: '',
    noHp: '',
  })

  const [identitasKeluarga, setIdentitasKeluarga] = useState({
    ayah: {
      nama: '',
      pendidikan: '',
      pekerjaan: '',
      penghasilan: '',
    },
    ibu: {
      nama: '',
      pendidikan: '',
      pekerjaan: '',
      penghasilan: '',
    },
    wali: {
      nama: '',
      pendidikan: '',
      pekerjaan: '',
      penghasilan: '',
    },
  })

  const [formData, setFormData] = useState({})

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()

  const nextPage = () => {
    setPage(2)
  }

  const previousPage = () => {
    setPage(1)
  }

  return (
    <FormContext.Provider
      value={{
        kelengkapanData,
        setKelengkapanData,
        identitasDiri,
        setIdentitasDiri,
        identitasKeluarga,
        setIdentitasKeluarga,
        formData,
        setFormData,
        register,
        handleSubmit,
        getValues,
        errors,
        nextPage,
        previousPage,
        page,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider

export const useFormContext = () => useContext(FormContext)
