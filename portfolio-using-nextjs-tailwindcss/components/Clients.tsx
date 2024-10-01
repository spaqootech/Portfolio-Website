import React from 'react'
import Feedback from './Feedback'

const Clients = () => {
  return (
    <div className="py-10">
    <h1 className="text-gray-300 text-3xl font-bold mb-5">Hear from My Clients</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Feedback src='/assets/review1.png'/>
      <Feedback src='/assets/review2.png'/>
      <Feedback src='/assets/review3.png'/>
      <Feedback src='/assets/review4.png'/>
    </div>
  </div>
  )
}

export default Clients