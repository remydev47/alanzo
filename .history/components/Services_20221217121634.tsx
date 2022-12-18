import React from 'react'
import styles from '../styles'

const Services = () => {
  return (
    <section className={`${styles.paddings} bg-[url('/images/bg_2.jpg')] sm:py-16 lg:py-24 bg-neutral-900/70`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
       <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-xl font-bold font-serif leading-tight text-white lg:text-3xl">What We Offer</h2>
       </div>

       <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">

        <div className="overflow-hidden bg-[url('/images/bg-3.jpg')] shadow-xl border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
             <div className='flex flex-col'>
               <h1 className='text-3xl font-semibold text-black'>Catering Services</h1>
             </div>
             <h2 className='font-normal text-xl font-serif text-black text-center mt-2'>
               Wouldn't you Like to be a Guest at your own Party !
             </h2>
             <p className='text-xl text-black text-center font-bold'>
               MON-FRI: 08:00-21:00
             </p>
             <p className='text-xl text-gray-500 text-center font-bold'>
               SAT-SUN: 10:00-17:00
             </p>
          </div>   
        </div>

        <div className="overflow-hidden bg-[url('/images/bg-4.jpg')] shadow-xl border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
             <div className='flex flex-col'>
               <h1 className='text-3xl font-semibold text-black'>Table Ready Meals</h1>
             </div>
             <h2 className='font-normal text-xl font-serif text-black text-center mt-2'>
               Are You Busy To Cook ? Give Us A Call
             </h2>
             <p className='text-xl text-black text-center font-bold'>
               MON-FRI: 08:00-21:00
             </p>
             <p className='text-xl text-gray-500 text-center font-bold'>
               SAT-SUN: 10:00-17:00
             </p>
          </div>   
        </div>

        <div className="overflow-hidden bg-[url('/images/bg-5.jpg')] shadow-xl border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
             <div className='flex flex-col'>
               <h1 className='text-3xl font-semibold text-black'>Services Menu</h1>
             </div>
             <h2 className='font-normal text-xl font-serif text-black text-center mt-2'>
               Look at Our Serviced Menu !
             </h2>
             <p className='text-xl text-black text-center font-bold'>
               MON-FRI: 08:00-21:00
             </p>
             <p className='text-xl text-gray-500 text-center font-bold'>
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