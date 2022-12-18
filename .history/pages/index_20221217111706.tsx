import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Hero, Services } from '../components'


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
