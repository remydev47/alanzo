import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image
        src='/images/logo.png'
        alt='Alanzo'
        height={60}
        width={150} 
      />
    </div>
  )
}

export default Logo