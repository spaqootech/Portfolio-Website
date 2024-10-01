import React from 'react'

const LetsTalk = () => {
  return (
    <div className="bg-[url('/assets/terminal.png')] md:h-[700px] bg-no-repeat bg-contain bg-center flex flex-col py-32 md:gap-10 justify-between items-center">
    <div className="w-full p-10 pt-18 md:p-0 md:w-3/5 flex flex-col md:gap-5">
      <div className="md:text-3xl font-bold text-gray-300">Let's Talk</div>
      <p className="hidden md:block text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus non, id nemo suscipit iusto omnis assumenda unde pariatur iure, perspiciatis exercit
      </p>

      <div className="my-1">
        <p className="text-gray-500 text-xs md:text-lg">Full name</p>
        <input placeholder='Spaqoo Tech' className="w-full p-1 md:p-2 rounded-lg bg-gray-900 text-gray-500" type="text" />
      </div>
      
      <div className="my-1">
        <p className="text-gray-500 text-xs md:text-lg">Email address</p>
        <input placeholder='Spaqootech@gmail.com' className="w-full p-1 md:p-2 rounded-lg bg-gray-900 text-gray-500" type="text" />
      </div>
      
      <div className="my-1">
        <p className="text-gray-500 text-xs md:text-lg">Your Message</p>
        <textarea placeholder='Put your message' className="h-20 w-full p-1 md:p-2 rounded-lg bg-gray-900 text-gray-500"  />
      </div>

      <button className="bg-gray-700 p-1 md:p-3 w-full font-semibold rounded-lg">Send Message</button>
      
    </div>
  </div>

  )
}

export default LetsTalk