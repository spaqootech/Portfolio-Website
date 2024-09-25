import React from 'react'

const AboutCart = ({source}) => {
  return (
    <div className="p-2 rounded-lg bg-[#0E0E10]">
        <img src={source} className='h-90 mx-auto w-full' alt="" />
        <div className="text-lg font-bold px-3">Hi every One</div>
        <p className="text-sm text-gray-500 px-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt voluptates accusamus quo pariatur eius quisquam odit, tempora deleniti delectus totam, numquam hic. Rem pariatur, placeat vel maiores adipisci quasi mollitia.
        </p>
    </div>
  )
}

export default AboutCart