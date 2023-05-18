import { useState } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState([])

  const handleMenuClick = (index) => {
    setActiveMenu((prevActiveMenus) => {
      const isActive = prevActiveMenus.includes(index)
      if (isActive) {
        return prevActiveMenus.filter((activeMenu) => activeMenu !== index)
      } else {
        return [...prevActiveMenus, index]
      }
    })
  }

  const menuItems = [
    {
      title: 'Dashboard',
      subMenu: [
        { title: 'Akun User', url: 'admin/user-account' },
        { title: 'List Guru & Staff', url: 'admin/guru-staff' },
        { title: 'List Gallery', url: 'admin/gallery' },
        { title: 'List Program Sekolah', url: 'admin/program' },
        { title: 'Statistik', url: 'admin/statistik' },
        { title: 'Hasil PPDB', url: 'admin/ppdb' },
      ],
    },
    {
      title: 'Akun User',
      subMenu: [
        { title: 'Informasi Akun', url: 'admin/informasi-akun' },
        { title: 'Edit Akun', url: 'admin/edit-akun' },
      ],
    },
    { title: 'Beranda' },
    { title: 'Profil' },
  ]

  return (
    <div className='w-64 bg-light-red text-white font-semibold shadow-lg h-[calc(100vh-60px)]'>
      <Link
        href={'/'}
        className='px-4 my-2 w-full text-2xl font-bold italic inline-block'
      >
        SDN Ciwaregu
      </Link>
      <div className='w-full h-[1px] bg-slate-100 my-2'></div>
      <ul>
        {menuItems.map((menuItem, index) => (
          <>
            <li key={index}>
              <button
                className='flex items-center w-full gap-2 py-2 px-4 focus:outline-none'
                onClick={() => handleMenuClick(index)}
              >
                <Image
                  src={'/images/darhboard.svg'}
                  alt='icon menu'
                  width={18}
                  height={18}
                />
                <div className='w-full  flex gap-1 items-center'>
                  <span>{menuItem.title}</span>
                  {menuItem.subMenu && <ChevronDownIcon className='w-4' />}
                </div>
              </button>
              {menuItem.subMenu && (
                <Transition
                  show={activeMenu.includes(index)}
                  enter='transition duration-300 ease-out'
                  enterFrom='transform opacity-0 translate-y-2'
                  enterTo='transform opacity-100 translate-y-0'
                  leave='transition duration-200 ease-in'
                  leaveFrom='transform opacity-100 translate-y-0'
                  leaveTo='transform opacity-0 translate-y-2'
                >
                  <ul className='pl-11 mt-2 flex flex-col gap-2'>
                    {menuItem.subMenu.map((subMenuItem, subIndex) => {
                      return (
                        <li key={subIndex}>
                          <Link href={`/${subMenuItem.url}`}>
                            <span>{subMenuItem.title}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </Transition>
              )}
            </li>
            <div className='w-full h-[1px] bg-slate-100 my-2'></div>
          </>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
