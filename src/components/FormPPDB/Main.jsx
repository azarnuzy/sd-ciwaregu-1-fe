import { useFormContext } from '@/context/FormContext'
import { useForm } from 'react-hook-form'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

function MainForm() {
  const { page } = useFormContext()
  return (
    <>
      {page === 1 && <Page1 />}
      {page === 2 && <Page2 />}
      {page === 3 && <Page3 />}
    </>
  )
}

export default MainForm
