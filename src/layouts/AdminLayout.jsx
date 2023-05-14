import HeadComponent from '@/components/Head/HeadComponents'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function AdminLayout() {
  return (
    <div className='flex w-full'>
      <HeadComponent />
      <Sidebar />
    </div>
  )
}

export default AdminLayout
