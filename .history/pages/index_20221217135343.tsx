import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Aboutus, Catering, Consulting, Hero, Services, Testimonials } from '../components'
import Navbar from '../components/Navbar'


const Home: NextPage = () => {
  return (
    <div className="bg-[url('/images/bg_2.jpg')]">
      <Head>
        <title>Avantos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='py-2 px-2'>
      <Hero />
      <Services />
      <Aboutus />
      <Consulting />
      <Catering/>
      <Testimonials/>
      </div>
     
    </div>
  )
}

export default Home
