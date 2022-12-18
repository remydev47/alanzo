import React from 'react'

const services=[
  {
    image:'/images/3.png',
    title:'Wine & Dine',
    description:'',
  },
  {
    image:'/images/7.jpg',
    title:'Special Events',
    description:'',
  },
  {
    image:'/images/6.jpg',
    title:'Wedding & Galas',
    description:'',
  },
  {
    image:'/images/5.jpg',
    title:'Cooporate Events',
    description:'',
  },
  {
    image:'/images/8.jpg',
    title:'Cooking Classes',
    description:'',
  },
]

const Catering = () => {
  return (
    <section className="bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
       <div className="max-w-2xl mx-auto text-center">
        <h2 className="italic font-serif text-4xl leading-tight text-gray-600">Featured Services</h2>
       </div>
       <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
        {services.map((item, i) => (
          <div className="overflow-hidden bg-white border-gray-300 rounded-md">             
            <div className="flex flex-col items-center justify-center">
           
              <img
               src={item.image} 
               className="w-full"
             />
             
             <h2 className='font-bold font-serif text-xl text-gray-400 italic text-center mt-2'>
               {item.title}
             </h2>
             <p className='text-xl font-serif text-gray-300 text-center '>
              {item.description}
             </p>
            </div>                     
          </div>
        ))}
       </div>


      </div>
    </section>
  )
}

export default Catering