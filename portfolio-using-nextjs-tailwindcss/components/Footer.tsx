import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-3 justify-between items-center my-5">
    <p className="text-gray-500">Terms & Conditions | Privacy Policy</p>

    <div className="flex justify-center items-center gap-2">
<img src="/assets/github.svg" className='h-10 bg-gray-900 rounded-full p-2' alt="" />
<img src="/assets/twitter.svg" className='h-10 bg-gray-900 rounded-full p-2' alt="" />
<img src="/assets/instagram.svg" className='h-10 bg-gray-900 rounded-full p-2' alt="" />
    </div>

    <p className="text-gray-500">2024 Spaqoo. All Rights Reserved</p>
  </footer>
  )
}

export default Footer