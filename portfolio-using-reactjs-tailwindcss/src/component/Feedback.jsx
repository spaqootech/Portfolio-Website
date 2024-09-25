import React from 'react'

const Feedback = ({source}) => {
  return (
    <div className="p-10 rounded-xl bg-[#0E0E10]">
        <p className="text-md text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sunt autem consectetur laudantium laborum sint rerum recusandae ad! Tempora aliquam quidem obcaecati nesciunt! Cumque odit hic sit iusto iste excepturi.
        </p>
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <img src={source} className='h-12' alt="" />
                <div className="">
                    <h1 className="text-lg font-bold">Spaqoo Tech</h1>
                    <p className="text-md text-gray-400">Software Engineer</p>
                </div>
            </div>
            <div className="flex gap-2">
                <img src="/assets/star.png" className='h-4' alt="" />
                <img src="/assets/star.png" className='h-4' alt="" />
                <img src="/assets/star.png" className='h-4' alt="" />
                <img src="/assets/star.png" className='h-4' alt="" />
                <img src="/assets/star.png" className='h-4' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Feedback