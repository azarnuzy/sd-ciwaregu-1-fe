import Footer from '@/components/Footer/Footer'
import About from '@/components/LandingPage/About'
import Gallery from '@/components/LandingPage/Gallery'
import HeaderComponent from '@/components/LandingPage/HeaderComponent'
import Ppdb from '@/components/LandingPage/Ppdb'
import Program from '@/components/LandingPage/Program'
import Stat from '@/components/LandingPage/Stat'
import VisiMisi from '@/components/LandingPage/VisiMisi'
import SocialMedia from '@/components/Navbar/SocialMedia'

export default function LandingPage() {
  return (
    <>
      <SocialMedia />
      <HeaderComponent />
      <About />
      <Stat />
      <Program />
      <Ppdb />
      <VisiMisi />
      <Gallery />
      <Footer />
    </>
  )
}
