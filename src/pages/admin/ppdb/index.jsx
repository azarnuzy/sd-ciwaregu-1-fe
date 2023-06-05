import SocialMedia from '@/components/Navbar/SocialMedia'
import Pagination from '@/components/Table/Pagination'
import Table from '@/components/Table/Table'
import { useAuth } from '@/context/auth-context'
import AdminLayout from '@/layouts/AdminLayout'
import { TrashIcon } from '@heroicons/react/24/solid'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function AdminPPDB() {
  const [data, setData] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const recordsPerPage = 10
  const [isLoading, setIsLoading] = useState(false)
  const { token } = useAuth()
  const [verifiedData, setVerifiedData] = useState([])

  useEffect(() => {
    const getHasilPPDB = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/hasilPpdb/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setData(response.data.data)
          // console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getHasilPPDB()
  }, [token, verifiedData])

  // Calculate pagination values
  const filteredData = data?.filter((item) =>
    item.namaLengkap.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const totalRecords = filteredData?.length
  const totalPages = Math.ceil(totalRecords / recordsPerPage)
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentData = filteredData?.slice(indexOfFirstRecord, indexOfLastRecord)

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  // Handle search term change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  return (
    <>
      <SocialMedia />
      <AdminLayout>
        <h1 className='font-bold text-2xl my-2'>Hasil PPDB</h1>
        <div className='mb-4'>
          <input
            type='text'
            placeholder='Search by name...'
            value={searchTerm}
            onChange={handleSearch}
            className='border border-gray-300 rounded px-4 py-2 w-full'
          />
        </div>
        <div className='overflow-scroll  scrollbar-thumb-light-red scrollbar-thin scrollbar-track-slate-200 lg:scrollbar-track-transparent scrollbar-thumb-rounded max-h-[60vh]'>
          <Table
            data={currentData}
            setData={setData}
            currentPage={currentPage}
            setVerifiedData={setVerifiedData}
          />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </AdminLayout>
    </>
  )
}

export default AdminPPDB
