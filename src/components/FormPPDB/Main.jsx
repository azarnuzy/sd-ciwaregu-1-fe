import { useFormContext } from '@/context/form-context'
import { useForm } from 'react-hook-form'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import { useEffect } from 'react'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/router'

function MainForm() {
  const { token, setPreviousPath } = useAuth()
  const router = useRouter()

  if (!token) {
    setPreviousPath('/daftar-ppdb')
    router.push('/login')
  }

  const { page } = useFormContext()
  return (
    <>
      {page === 1 && token && <Page1 />}
      {page === 2 && token && <Page2 />}
      {page === 3 && token && <Page3 />}
    </>
  )
}

export default MainForm
