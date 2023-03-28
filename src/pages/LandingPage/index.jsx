import About from '@/components/LandingPage/About'
import HeaderComponent from '@/components/LandingPage/HeaderComponent'
import Program from '@/components/LandingPage/Program'
import Stat from '@/components/LandingPage/Stat'
import SocialMedia from '@/components/Navbar/SocialMedia'

export default function LandingPage() {
  return (
    <>
      <SocialMedia />
      <HeaderComponent />
      <About />
      <Stat />
      <Program />
    </>
  )
}
