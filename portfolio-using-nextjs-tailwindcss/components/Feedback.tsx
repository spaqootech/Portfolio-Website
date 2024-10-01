import React from 'react'

const Feedback = ({src}) => {
  return (
    <div className="p-5 rounded-xl bg-gray-900 flex flex-col gap-2">
        <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos molestias, laborum provident, aperiam in quia odio, dolore delectus molestiae itaque alias quo labore atque. Cumque eum ea sint aliquid nesciunt.
        </p>
        <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
                <img src={src} alt="" className='h-16'/>
                <div className="">
                <h1 className="text-xl font-bold">Spaqoo Tech</h1>
                <p className="text-xl text-gray-500">CEO</p>
                </div>
                </div>
                <div className="flex gap-2">
                <img src="/assets/star.png" alt="" className='h-5'/>
                <img src="/assets/star.png" alt="" className='h-5'/>
                <img src="/assets/star.png" alt="" className='h-5'/>
                <img src="/assets/star.png" alt="" className='h-5'/>
                <img src="/assets/star.png" alt="" className='h-5'/>
                </div>
        </div>
    </div>
  )
}

export default Feedback