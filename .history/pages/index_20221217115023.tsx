import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Hero, Services } from '../components'
import Navbar from '../components/Navbar'


const Home: NextPage = () => {
  return (
    <div className="bg-[url('/images/bg_2.jpg')]">
      <Head>
        <title>Avantos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Services />
     
    </div>
  )
}

export default Home
