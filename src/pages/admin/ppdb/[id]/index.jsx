import SocialMedia from '@/components/Navbar/SocialMedia'
import { useAuth } from '@/context/auth-context'
import AdminLayout from '@/layouts/AdminLayout'
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
import WideLayout from '@/layouts/WideLayout'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function DetailStudent() {
  const [data, setData] = useState()
  const [keluarga, setKeluarga] = useState()
  const [berkas, setBerkas] = useState()
  const { token } = useAuth()
  const router = useRouter()

  // console.log(router.query)
  useEffect(() => {
    if (router.query.id) {
      const getDetail = async () => {
        await axios
          .get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/v1/ppdb/${router.query.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            //   setData(response.data?.data)
            const { data } = response.data
            const {
              noPendaftaran,
              namaLengkap,
              namaPanggilan,
              jenisKelamin,
              tempatLahir,
              tanggalLahir,
              agama,
              tinggiBadan,
              beratBadan,
              alamat,
              rt,
              rw,
              kelurahan,
              kecamatan,
              kabupaten,
              provinsi,
              kodePos,
              noTelp,
              asalMuasal,
              sekolahAsal,
              keluarga,
              berkas,
            } = data
            //   console.log(response.data)
            setData([
              { label: 'No. Pendaftaran', value: noPendaftaran },
              { label: 'Nama Lengkap', value: namaLengkap },
              { label: 'Nama Panggilan', value: namaPanggilan },
              { label: 'Jenis Kelamin', value: jenisKelamin },
              { label: 'Tempat Lahir', value: tempatLahir },
              { label: 'Tanggal Lahir', value: tanggalLahir },
              { label: 'Agama', value: agama },
              { label: 'Tinggi Badan', value: tinggiBadan + ' cm' },
              { label: 'Berat Badan', value: beratBadan + ' kg' },
              { label: 'Alamat', value: alamat },
              { label: 'RT/RW', value: rt + '/' + rw },
              { label: 'Kelurahan', value: kelurahan },
              { label: 'Kecamatan', value: kecamatan },
              { label: 'Kabupaten', value: kabupaten },
              { label: 'Provinsi', value: provinsi },
              { label: 'Kode Pos', value: kodePos },
              { label: 'No. Telepon', value: noTelp },
              { label: 'Asal Muasal', value: asalMuasal },
              { label: 'Sekolah Asal', value: sekolahAsal },
              { label: 'Kabupaten', value: kabupaten },
              // { label: 'Keluarga', value: keluarga },
              // { label: 'Berkas', value: berkas },
            ])
            setKeluarga(keluarga)
            setBerkas(berkas)
          })
          .catch((error) => {
            console.log(error)
          })
      }

      getDetail()
    }
  }, [router.query.id, token])

  return (
    <>
      <EmptyLayout>
        <div className='container mx-auto p-3 '>
          <div className='shadow-xl border-[1px]  border-solid border-slate-200 rounded p-4  md:p-8 md:mx-16 bg-white mb-10 flex gap-2'>
            <table className='w-full border-collapse'>
              <tbody>
                <tr>
                  <td
                    colSpan={3}
                    className='px-4 py-[2px] text-xl font-bold'
                  >
                    Identitas Peserta Didik
                  </td>
                </tr>
                <tr>
                  <td colSpan='3'>
                    <hr className='border-gray-300 my-2' />
                  </td>
                </tr>
                {data?.map((row, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td className='px-4 py-[2px] font-bold'>{row.label}</td>
                      <td className='px-4 py-[2px] font-bold'>:</td>
                      <td className='px-4 py-[2px]'>{row.value}</td>
                    </tr>
                    <tr>
                      <td colSpan='3'>
                        <hr className='border-gray-300 my-2' />
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            <div className='flex flex-col w-full'>
              <table className='w-full h-fit border-collapse'>
                <tbody>
                  <tr>
                    <td
                      colSpan={3}
                      className='px-4 py-[2px] text-xl font-bold'
                    >
                      Identitas Keluarga
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='3'>
                      <hr className='border-gray-300 my-2' />
                    </td>
                  </tr>
                  <tr>
                    <td className='px-4 py-[2px] font-bold'>Nama Ayah</td>
                    <td className='px-4 py-[2px] font-bold'>:</td>
                    <td className='px-4 py-[2px]'>{keluarga?.namaAyah}</td>
                  </tr>
                  <tr>
                    <td colSpan='3'>
                      <hr className='border-gray-300 my-2' />
                    </td>
                  </tr>
                  <tr>
                    <td className='px-4 py-[2px] font-bold'>Pendidikan Ayah</td>
                    <td className='px-4 py-[2px] font-bold'>:</td>
                    <td className='px-4 py-[2px]'>
                      {keluarga?.pendidikanAyah}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='3'>
                      <hr className='border-gray-300 my-2' />
                    </td>
                  </tr>
                  <tr>
                    <td className='px-4 py-[2px] font-bold'>Pekerjaan Ayah</td>
                    <td className='px-4 py-[2px] font-bold'>:</td>
                    <td className='px-4 py-[2px]'>{keluarga?.pekerjaanAyah}</td>
                  </tr>
                  <tr>
                    <td colSpan='3'>
                      <hr className='border-gray-300 my-2' />
                    </td>
                  </tr>
                  <tr>
                    <td className='px-4 py-[2px] font-bold'>
                      Penghasilan Ayah
                    </td>
                    <td className='px-4 py-[2px] font-bold'>:</td>
                    <td className='px-4 py-[2px]'>
                      {keluarga?.penghasilanAyah}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='3'>
                      <hr className='border-gray-300 my-2' />
                    </td>
                  </tr>
                  <tr>
                    <td className='px-4 py-[2px] font-bold'>Nama Ibu</td>
                    <td className='px-4 py-[2px] font-bold'>:</td>
                    <td className='px-4 py-[2px]'>{keluarga?.namaIbu}</td>
                  </tr>
                  <tr>
                    <td colSpan='3'>
                      <hr className='border-gray-300 my-2' />
                    </td>
                  </tr>
                  <tr>
                    <td className='px-4 py-[2px] font-bold'>Pendidikan Ibu</td>
                    <td className='px-4 py-[2px] font-bold'>:</td>
                    <td className='px-4 py-[2px]'>{keluarga?.pendidikanIbu}</td>
                  </tr>
                  <tr>
                    <td colSpan='3'>
                      <hr className='border-gray-300 my-2' />
                    </td>
                  </tr>
                  <tr>
                    <td className='px-4 py-[2px] font-bold'>Pekerjaan Ibu</td>
                    <td className='px-4 py-[2px] font-bold'>:</td>
                    <td className='px-4 py-[2px]'>{keluarga?.pekerjaanIbu}</td>
                  </tr>
                  <tr>
                    <td colSpan='3'>
                      <hr className='border-gray-300 my-2' />
                    </td>
                  </tr>
                  <tr>
                    <td className='px-4 py-[2px] font-bold'>Penghasilan Ibu</td>
                    <td className='px-4 py-[2px] font-bold'>:</td>
                    <td className='px-4 py-[2px]'>
                      {keluarga?.penghasilanIbu}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='3'>
                      <hr className='border-gray-300 my-2' />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className='w-full  border-collapse'>
                <tbody>
                  <tr>
                    <td className='px-4 py-2 font-bold'>Pas Foto</td>
                    <td className='px-4 py-2 font-bold'>:</td>
                    <td className='px-4 py-2'>
                      <Link
                        href={berkas?.pasFotoUrl || '#'}
                        target='_blank'
                        rel='noreferrer'
                      >
                        View File
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className='px-4 py-2 font-bold'>Akta Kelahiran</td>
                    <td className='px-4 py-2 font-bold'>:</td>
                    <td className='px-4 py-2'>
                      <Link
                        href={berkas?.aktaUrl || '#'}
                        target='_blank'
                        rel='noreferrer'
                      >
                        View File
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className='px-4 py-2 font-bold'>Kartu Keluarga</td>
                    <td className='px-4 py-2 font-bold'>:</td>
                    <td className='px-4 py-2'>
                      <Link
                        href={berkas?.kkUrl || '#'}
                        target='_blank'
                        rel='noreferrer'
                      >
                        View File
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </EmptyLayout>
    </>
  )
}

export default DetailStudent
