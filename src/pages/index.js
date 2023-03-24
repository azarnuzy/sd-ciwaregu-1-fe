import { Inter } from '@next/font/google'
import LandingPage from './LandingPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <LandingPage />
    </div>
  )
}
