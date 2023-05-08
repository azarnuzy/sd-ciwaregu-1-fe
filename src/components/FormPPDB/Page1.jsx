import { useFormContext } from '@/context/FormContext'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const agamaIndonesia = [
  'Islam',
  'Kristen Protestan',
  'Katolik',
  'Hindu',
  'Buddha',
  'Konghucu',
]

function Page1() {
  const { kelengkapanData, setKelengkapanData } = useFormContext()

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

  console.log(formData?.pasPhoto !== undefined)
  const onSubmit = (data) => {
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
        <div className=' col-span-4'>
          <label className='form-title'>Asal Muasal</label>
          <div className='flex justify-start flex-wrap gap-5 '>
            <div className='flex gap-3 items-center justify-center'>
              <input
                type='radio'
                id='rumahTangga'
                value='Rumah Tangga'
                {...register('asalMuasal', { required: true })}
              />
              <label
                className=' tracking-wide'
                htmlFor='rumahTangga'
              >
                Rumah Tangga
              </label>
            </div>
            <div className='flex gap-3 items-center justify-center'>
              <input
                type='radio'
                id='TKPaud'
                value='TK/Paud'
                {...register('asalMuasal', { required: true })}
              />
              <label
                className=' tracking-wide'
                htmlFor='TKPaud'
              >
                TK/Paud
              </label>
            </div>
            <div className='flex gap-3 items-center justify-center'>
              <input
                type='radio'
                id='Pindahan'
                value='Pindahan'
                {...register('asalMuasal', { required: true })}
              />
              <label
                className=' tracking-wide'
                htmlFor='Pindahan'
              >
                Pindahan
              </label>
            </div>
          </div>
          {errors.asalMuasal && (
            <span role='alert'>Asal Muasal Pendaftar Harus diisi</span>
          )}
        </div>
        <div className=' col-span-4'>
          <label
            className='form-title'
            htmlFor='name'
          >
            Nama Asal Sekolah
          </label>
          <input
            placeholder='Masukan Nama Asal Sekolah'
            type='text'
            className='form-container'
            id='namaAsalSekolah'
            {...register('namaAsalSekolah', { required: true })}
          />
          {errors.namaAsalSekolah && (
            <span role='alert'>
              Nama Asal Sekolah Harus Diisi, jika kosong silahkan isi dengan '-'
            </span>
          )}
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <label
            className='form-title'
            htmlFor='pasPhoto'
          >
            Upload Pas Photo 3x4
          </label>
          <div className='relative bg-white text-gray-700 border border-gray-200 rounded   leading-tight focus:outline-none shadow-sm'>
            <input
              type='file'
              id='pasPhoto'
              className='absolute text-gray-700  inset-0 w-full h-full opacity-0 cursor-pointer'
              {...register('pasPhoto', {
                required: true,
                onChange: (e) => {
                  handleInputChange(e)
                },
              })}
            />
            <div
              className={`flex ${
                formData?.pasPhoto !== undefined
                  ? 'justify-between'
                  : 'justify-end'
              }  items-center pl-4 w-full`}
            >
              {formData?.pasPhoto && (
                <span className='text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis'>
                  {formData?.pasPhoto[0]?.name}
                </span>
              )}

              <label
                className=' cursor-pointer bg-gray-200 text-gray-700 border border-gray-200 px-4 py-2 rounded-md inline-flex   items-center space-x-2'
                htmlFor='pasPhoto'
              >
                <span>Browse</span>
              </label>
            </div>
            {errors.pasPhoto && (
              <span role='alert'>Pas Photo Harus Diunggah</span>
            )}
          </div>
        </div>

        <div className='col-span-4 sm:col-span-2'>
          <label
            className='form-title'
            htmlFor='kartuKeluarga'
          >
            Surat Keterangan/Akte Lahir
          </label>
          <div className='relative bg-white text-gray-700 border border-gray-200 rounded   leading-tight focus:outline-none shadow-sm'>
            <input
              type='file'
              id='kartuKeluarga'
              className='absolute text-gray-700  inset-0 w-full h-full opacity-0 cursor-pointer'
              {...register('kartuKeluarga', {
                required: true,
                onChange: (e) => {
                  handleInputChange(e)
                },
              })}
            />
            <div
              className={`flex ${
                formData?.kartuKeluarga !== undefined
                  ? 'justify-between'
                  : 'justify-end'
              }  items-center pl-4 w-full`}
            >
              {formData?.kartuKeluarga && (
                <span className='text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis'>
                  {formData?.kartuKeluarga[0]?.name}
                </span>
              )}

              <label
                className=' cursor-pointer bg-gray-200 text-gray-700 border border-gray-200 px-4 py-2 rounded-md inline-flex   items-center space-x-2'
                htmlFor='kartuKeluarga'
              >
                <span>Browse</span>
              </label>
            </div>
            {errors.kartuKeluarga && (
              <span role='alert'>Kartu Keluarga Harus Diunggah</span>
            )}
          </div>
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <label
            className='form-title'
            htmlFor='akteLahir'
          >
            Kartu Keluarga
          </label>
          <div className='relative bg-white text-gray-700 border border-gray-200 rounded   leading-tight focus:outline-none shadow-sm'>
            <input
              type='file'
              id='akteLahir'
              className='absolute text-gray-700  inset-0 w-full h-full opacity-0 cursor-pointer'
              {...register('akteLahir', {
                required: true,
                onChange: (e) => {
                  handleInputChange(e)
                },
              })}
            />
            <div
              className={`flex ${
                formData?.akteLahir !== undefined
                  ? 'justify-between'
                  : 'justify-end'
              }  items-center pl-4 w-full`}
            >
              {formData?.akteLahir && (
                <span className='text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis'>
                  {formData?.akteLahir[0]?.name}
                </span>
              )}

              <label
                className=' cursor-pointer bg-gray-200 text-gray-700 border border-gray-200 px-4 py-2 rounded-md inline-flex   items-center space-x-2'
                htmlFor='akteLahir'
              >
                <span>Browse</span>
              </label>
            </div>
            {errors.akteLahir && (
              <span role='alert'>
                Surat Keterangan/Akte Lahir Harus Diunggah
              </span>
            )}
          </div>
        </div>
        <h3 className='col-span-4 uppercase tracking-wide text-gray-700 text-lg font-bold '>
          Identitas Calon Peserta Didik
        </h3>
        <div className='col-span-4'>
          <label
            className='form-title'
            htmlFor='namaLengkap'
          >
            Nama Lengkap
          </label>
          <input
            placeholder='Masukan Nama Lengkap'
            type='text'
            className='form-container'
            id='namaLengkap'
            {...register('namaLengkap', { required: true })}
          />
          {errors.namaLengkap && (
            <span role='alert'>Nama Lengkap Harus Diisi</span>
          )}
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <label
            className='form-title'
            htmlFor='namaPanggilan'
          >
            Nama Panggilan
          </label>
          <input
            placeholder='Masukan Nama Panggilan'
            type='text'
            className='form-container'
            id='namaPanggilan'
            {...register('namaPanggilan', { required: true })}
          />
          {errors.namaPanggilan && (
            <span role='alert'>Nama Panggilan Harus Diisi</span>
          )}
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <label className='form-title'>Jenis Kelamin</label>
          <div className='flex justify-start gap-5 '>
            <div className='  flex gap-4 items-center'>
              <input
                type='radio'
                id='lakiLaki'
                value='Laki-Laki'
                {...register('jenisKelamin', { required: true })}
              />
              <label
                className=' tracking-wide '
                htmlFor='lakiLaki'
              >
                Laki-Laki
              </label>
            </div>
            <div className=' flex gap-4 items-center'>
              <input
                type='radio'
                id='perempuan'
                value='Perempuan'
                {...register('jenisKelamin', { required: true })}
              />
              <label
                className=' tracking-wide '
                htmlFor='perempuan'
              >
                Perempuan
              </label>
            </div>
          </div>
          {errors.jenisKelamin && (
            <span role='alert'>Jenis Kelamin Harus diisi</span>
          )}
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <label
            className='form-title'
            htmlFor='tempatLahir'
          >
            Tempat Lahir
          </label>
          <input
            placeholder='Masukan Tempat Lahir'
            type='text'
            className='form-container'
            id='tempatLahir'
            {...register('tempatLahir', { required: true })}
          />

          {errors.tempatLahir && (
            <span role='alert'>Tempat Lahir Harus Diisi</span>
          )}
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <label
            className='form-title'
            htmlFor='tanggalLahir'
          >
            Tanggal Lahir
          </label>
          <input
            type='date'
            className='form-container'
            id='tanggalLahir'
            {...register('tanggalLahir', { required: true })}
          />
          {errors.tanggalLahir && (
            <span role='alert'>Tanggal Lahir Harus Diisi</span>
          )}
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <label
            className='form-title'
            htmlFor='agama'
          >
            Agama{' '}
          </label>
          <select
            className='form-container cursor-pointer'
            id='agama'
            {...register('agama', { required: true })}
          >
            <option
              value='Islam'
              disabled
            >
              Masukan Agama
            </option>
            {agamaIndonesia.map((item, i) => (
              <option
                value={item}
                key={i}
              >
                {item}
              </option>
            ))}
          </select>
          {errors.agama && <span role='alert'>Agama Harus Diisi</span>}
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <label
            className='form-title'
            htmlFor='beratBadan'
          >
            Berat Badan
          </label>
          <input
            placeholder='Masukan Berat Badan'
            type='text'
            className='form-container'
            id='beratBadan'
            {...register('beratBadan', { required: true })}
          />
          {errors.beratBadan && (
            <span role='alert'>Berat Badan Harus Diisi</span>
          )}
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <label
            className='form-title'
            htmlFor='tinggiBadan'
          >
            Tinggi Badan
          </label>
          <input
            placeholder='Masukan Tinggi Badan'
            type='text'
            className='form-container'
            id='tinggiBadan'
            {...register('tinggiBadan', { required: true })}
          />
          {errors.tinggiBadan && (
            <span role='alert'>Tinggi Badan Harus Diisi</span>
          )}
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <label
            className='form-title'
            htmlFor='alamat'
          >
            Alamat
          </label>
          <input
            placeholder='Masukan Alamat'
            type='text'
            className='form-container'
            id='alamat'
            {...register('alamat', { required: true })}
          />
          {errors.alamat && <span role='alert'>Alamat Harus Diisi</span>}
        </div>

        <div className='col-span-4 sm:col-span-1'>
          <label
            className='form-title'
            htmlFor='rt'
          >
            RT{' '}
          </label>
          <input
            placeholder='Masukan RT'
            type='text'
            className='form-container'
            id='rt'
            {...register('rt', { required: true })}
          />
          {errors.rt && <span role='alert'>RT Harus Diisi</span>}
        </div>
        <div className='col-span-4 sm:col-span-1'>
          <label
            className='form-title'
            htmlFor='rw'
          >
            RW{' '}
          </label>
          <input
            placeholder='Masukan RW'
            type='text'
            className='form-container'
            id='rw'
            {...register('rw', { required: true })}
          />
          {errors.rw && <span role='alert'>RW Harus Diisi</span>}
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <label
            className='form-title'
            htmlFor='kelurahanDesa'
          >
            Kelurahan/Desa{' '}
          </label>
          <input
            placeholder='Masukan Kelurahan/Desa'
            type='text'
            className='form-container'
            id='kelurahanDesa'
            {...register('kelurahanDesa', { required: true })}
          />
          {errors.kelurahanDesa && (
            <span role='alert'>Kelurahan/Desa Harus Diisi</span>
          )}
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <label
            className='form-title'
            htmlFor='kecamatan'
          >
            Kecamatan{' '}
          </label>
          <input
            placeholder='Masukan Kecamatan'
            type='text'
            className='form-container'
            id='kecamatan'
            {...register('kecamatan', { required: true })}
          />
          {errors.kecamatan && <span role='alert'>Kecamatan Harus Diisi</span>}
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <label
            className='form-title'
            htmlFor='kabupaten'
          >
            Kabupaten{' '}
          </label>
          <input
            placeholder='Masukan Kabupaten'
            type='text'
            className='form-container'
            id='kabupaten'
            {...register('kabupaten', { required: true })}
          />
          {errors.kabupaten && <span role='alert'>Kabupaten Harus Diisi</span>}
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <label
            className='form-title'
            htmlFor='provinsi'
          >
            Provinsi{' '}
          </label>
          <input
            placeholder='Masukan Provinsi'
            type='text'
            className='form-container'
            id='provinsi'
            {...register('provinsi', { required: true })}
          />
          {errors.provinsi && <span role='alert'>Provinsi Harus Diisi</span>}
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <label
            className='form-title'
            htmlFor='kodePos'
          >
            Kode Pos{' '}
          </label>
          <input
            placeholder='Masukan Kode Pos'
            type='text'
            className='form-container'
            id='kodePos'
            {...register('kodePos', { required: true })}
          />
          {errors.kodePos && <span role='alert'>Kode Pos Harus Diisi</span>}
        </div>
        <div className='col-span-4 sm:col-span-2'>
          <label
            className='form-title'
            htmlFor='noHP'
          >
            Nomor Handphone{' '}
          </label>
          <input
            placeholder='Masukan Nomor Handphone'
            type='text'
            className='form-container'
            id='noHP'
            {...register('noHP', { required: true })}
          />
          {errors.noHP && <span role='alert'>Nomor Handphone Harus Diisi</span>}
        </div>
        <div
          type='submit'
          className='col-span-4 flex justify-end items-center'
        >
          <button className='justify-self-end bg-origin-blue text-white font-medium rounded-lg px-10 py-3'>
            Selanjutnya
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page1
