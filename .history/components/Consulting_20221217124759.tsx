import React from 'react'

const Consulting = () => {
  return (
    <section className="mt-16 relative py-10 overflow-hidden sm:py-16 lg:py-24 xl:py-32">
    <div className="absolute inset-0">
      <img className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="/images/welcome.png" alt="" />
   </div>
  <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
     <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
         <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Restaurant Consulting services</h2>
         <p className="mt-4 text-2xl text-[#fff] font-serif font-semibold">
          Alanzo, along with his team, offers culinary and management services. We have the experience to provide concept development strategies and best practice principles in order to achieve maximum sales performance.
         </p>
  
      </div>   
  </div>
  </section>
  )
}

export default Consulting