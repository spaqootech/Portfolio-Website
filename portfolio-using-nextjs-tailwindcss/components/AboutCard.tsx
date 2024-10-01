import Image from 'next/image'
import React from 'react'

const AboutCard = ({src ,title}) => {
  return (
    <div className="p-2 lg:p-5 bg-gray-900 rounded-xl">
        <Image src={src} alt="Logo" width={737} height={200} className='h-80 w-100'/>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-500 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt voluptatum, quae incidunt pariatur debitis, laboriosam eius velit laudantium tempore laborum ex 
        </p>
    </div>
  )
}

export default AboutCard