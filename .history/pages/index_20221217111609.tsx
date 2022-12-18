import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Services from '../components/Services'

const Home: NextPage = () => {
  return (
    <div className="bg-primary-black">
      <Head>
        <title>Avantos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services />
     
    </div>
  )
}

export default Home
