import React from 'react'

const Work = () => {
  return (
    <div className="py-10">
    <h1 className="text-3xl font-bold text-gray-300 mb-5">My Selected Work</h1>
    <div className="flex gap-5 flex-col md:flex-row">
      <div className="md:w-3/6 p-5 rounded-xl h-[500px] flex flex-col justify-between items-start  bg-[url('/assets/spotlight1.png')] bg-repeat bg-cover bg-center">
      <img src="/assets/project-logo1.png" className='h-10 border-gray-900 p-2 rounded-lg' alt="" />
      <h1 className="text-2xl font-bold">Podcaster - AI Podcast Platform</h1>
      <p className="text-gray-500 text-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium minima tenetur quisquam ipsa voluptatum maxime ullam ipsam exercitationem. Distinctio explicabo dicta unde laborum quam, accusantium corporis! Magnam, reiciendis cupiditate.
      </p>
      <p className="text-gray-500 text-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium minima tenetur quisquam ipsa voluptatum maxime ullam ipsam exercitationem. Distinctio explicabo dicta unde laborum quam, accusantium corporis! Magnam, reiciendis cupiditate.
      </p>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between items-center gap-2">
<img src="/assets/react.svg" className='h-8 border-gray-900 p-2 rounded-lg' alt="" />
<img src="/assets/tailwindcss.png" className='h-8 border-gray-900 p-2 rounded-lg' alt="" />
<img src="/assets/typescript.png" className='h-8 border-gray-900 p-2 rounded-lg' alt="" />
<img src="/assets/framer.png" className='h-8 border-gray-900 p-2 rounded-lg' alt="" />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl">Check Live Site</p>
<img src="/assets/arrow-up.png" className='h-8 p-2' alt="" />
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
<img src="/assets/left-arrow.png" className='h-8 bg-gray-900 rounded-full p-2' alt="" />
<div className="flex justify-center items-center gap-2">
<div className="w-[10px] h-[10px] bg-gray-800 rounded-full"></div>
<div className="w-[10px] h-[10px] bg-gray-300 rounded-full"></div>
<div className="w-[10px] h-[10px] bg-gray-800 rounded-full"></div>
<div className="w-[10px] h-[10px] bg-gray-800 rounded-full"></div>
<div className="w-[10px] h-[10px] bg-gray-800 rounded-full"></div>
</div>
<img src="/assets/right-arrow.png" className='h-8 bg-gray-900 rounded-full p-2' alt="" />
      </div>
      </div>
      <div className="md:w-3/6 p-5 rounded-xl h-[500px] bg-[url('/assets/work-computer.png')] bg-repeat bg-cover bg-center">
      </div>
    </div>
  </div>
  )
}

export default Work