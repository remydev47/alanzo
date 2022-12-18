import React from 'react'

const Aboutus = () => {
  return (
    <section className="py-6 bg-[#fff] sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
       <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
          <div className="">
                <h1 className='text-4xl font-semibold text-black text-center'>EXPERIENCE THE SUBLIME!</h1>
                <h2 className="text-4xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
                  <img src='/images/spoon.png' />
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600 font-semibold">
                Chef Alanzo prepares and serves exquisite dinners to parties from two to 200 at your home, business or private catering event. His blend of French-Mediterranean cuisine draws on a lifetime of skills and the knowledge that all meals, no matter how large or how small, are special events among family and friends
                </p>
          </div>
       </div>
      </div>
    </section>
  )
}

export default Aboutus