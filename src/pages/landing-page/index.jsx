import About from '@/components/LandingPage/About'
import Gallery from '@/components/LandingPage/Gallery'
import HeaderComponent from '@/components/LandingPage/HeaderComponent'
import Ppdb from '@/components/LandingPage/Ppdb'
import Program from '@/components/LandingPage/Program'
import Stat from '@/components/LandingPage/Stat'
import VisiMisi from '@/components/LandingPage/VisiMisi'

export default function LandingPage() {
  return (
    <>
      <HeaderComponent />
      <About />
      <Stat />
      <Program />
      <Ppdb />
      <VisiMisi />
      <Gallery />
    </>
  )
}
