import { useFormContext } from '@/context/FormContext'
import { useForm } from 'react-hook-form'
import Page1 from './Page1'
import Page2 from './Page2'

function MainForm() {
  const { page } = useFormContext()
  return <>{page === 1 ? <Page1 /> : <Page2 />}</>
}

export default MainForm
