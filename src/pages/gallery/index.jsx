import GalleryPage from '@/components/Gallery/index'
import HeaderComponent from '@/components/LandingPage/HeaderComponent'
import MainLayout from '@/layouts/MainLayout'

export default function LandingPage() {
  return (
    <>
      <MainLayout>
        <GalleryPage/>
      </MainLayout>
    </>
  )
}
