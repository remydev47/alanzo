import React from 'react'
import styles from '../styles'

const Services = () => {
  return (
    <section className={`${styles.paddings} bg-[url('/images/bg_2.jpg')] sm:py-16 lg:py-24`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
       <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-xl font-bold  leading-tight text-white lg:text-3xl">What We Offer</h2>
       </div>
      </div>
    </section>
  )
}

export default Services