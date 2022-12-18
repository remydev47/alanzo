import React from 'react'
import styles from '../styles'

const Services = () => {
  return (
    <section className={`${styles.paddings} bg-[url('/images/bg_2.jpg')] sm:py-16 lg:py-24`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
       <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-xl font-bold font-serif leading-tight text-white lg:text-3xl">What We Offer</h2>
       </div>

       <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">

        <div className="overflow-hidden bg-[#092341] shadow-xl border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
             <div className='flex flex-col'>
               <h1 className='text-3xl font-semibold text-white'>Catering Services</h1>
             </div>
             <h2 className='font-normal text-xl font-serif text-white text-center mt-2'>
               Wouldn't you Like to be a Guest at your own Party !
             </h2>
             <p className='text-xl text-white text-center font-bold'>
               MON-FRI: 08:00-17:00
             </p>
             <p className='text-xl text-white text-center font-bold'>
               SAT-SUN: 10:00-17:00
             </p>
          </div>   
        </div>

       </div>
      </div>
    </section>
  )
}

export default Services