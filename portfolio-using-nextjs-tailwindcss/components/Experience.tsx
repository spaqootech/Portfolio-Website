import React from 'react'

const Experience = () => {
  return (
    <div className="py-10">
    <h1 className="mb-5 text-3xl font-bold text-gray-300">My Work Experience</h1>
    <div className="flex w-full gap-5 flex-col md:flex-row">
      <div className="h-[500px] rounded-xl p-5 md:w-2/6 bg-[url('/assets/experience.png')] bg-repeat bg-cover bg-center"></div>
      <div className="h-[500px] rounded-xl p-5 md:w-4/6 flex gap-5">
      <div className="w-1/6 flex flex-col justify-between items-center">
<img src="/assets/framer.svg" className='h-16 bg-gray-900 rounded-lg p-2' alt="" />
<div className="h-16 w-[1px] bg-gray-900"></div>
<img src="/assets/figma.svg" className='h-16 bg-gray-900 rounded-lg p-2' alt="" />
<div className="h-16 w-[1px] bg-gray-900"></div>
<img src="/assets/notion.svg" className='h-16 bg-gray-900 rounded-lg p-2' alt="" />
<div className="h-16 w-[1px] bg-black border border-black"></div>
    
      </div>
      <div className="w-5/6 flex flex-col justify-between">
      
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Framer</h1>
        <p className="md:text-xl text-gray-500"> LEAD WEB DEVELOPER - 2021 - PRESENT</p>
        <p className="text-xs text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem cupiditate ipsa officia aliquam suscipit temporibus asperiores nobis sint magni rem voluptas aut cumque numquam recusandae, doloribus voluptatum exercitationem quae voluptatem.
        </p>
      </div>

      
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Figma</h1>
        <p className="md:text-xl text-gray-500"> LEAD WEB DEVELOPER - 2021 - PRESENT</p>
        <p className="text-xs text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem cupiditate ipsa officia aliquam suscipit temporibus asperiores nobis sint magni rem voluptas aut cumque numquam recusandae, doloribus voluptatum exercitationem quae voluptatem.
        </p>
      </div>

      
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Notion</h1>
        <p className="md:text-xl text-gray-500"> LEAD WEB DEVELOPER - 2021 - PRESENT</p>
        <p className="text-xs text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem cupiditate ipsa officia aliquam suscipit temporibus asperiores nobis sint magni rem voluptas aut cumque numquam recusandae, doloribus voluptatum exercitationem quae voluptatem.
        </p>
      </div>

      <div className="blank"></div>

      </div>
      </div>
    </div>
  </div>

  )
}

export default Experience