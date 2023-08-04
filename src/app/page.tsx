import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
    </main>
  )
}
