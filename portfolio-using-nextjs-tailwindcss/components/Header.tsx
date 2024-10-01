import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center text-center gap-2 h-[600px] lg:h-[700px] relative">
    <h1 className="text-xl">Hi We are SPaqoo Tech</h1>
    <p className="text-4xl lg:text-5xl font-bold text-gray-300">Building products & brands</p>
    <Image src={"/assets/computer.png"} alt="Logo" width={500} height={200}/>
    <img src={"/assets/header-img1.png"} className='h-12 md:h-30 absolute top-5 md:top-10 left-10' alt="Logo" />
    <img src={"/assets/header-img2.png"} className='h-12 md:h-30 absolute top-5 md:top-10 right-10' alt="Logo" />
    <img src={"/assets/header-img3.png"} className='h-12 md:h-30 absolute bottom-10 left-5 md:left-10' alt="Logo" />
    <img src={"/assets/header-img4.png"} className='h-12 md:h-30 absolute bottom-10 right-1 md:right-10' alt="Logo" />
  </header>

  )
}

export default Header