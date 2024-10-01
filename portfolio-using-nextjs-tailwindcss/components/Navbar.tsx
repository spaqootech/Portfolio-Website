import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
        <h1 className="md:text-2xl font-bold">SPaqoo Tech</h1>
        <ul className="flex justify-between items-center gap-3 md:gap-10">
          <div className="lg:text-xl text-gray-300">Home</div>
          <div className="lg:text-xl text-gray-300">About</div>
          <div className="lg:text-xl text-gray-300">Work</div>
          <div className="lg:text-xl text-gray-300">Contact</div>
        </ul>

      </nav>
  )
}

export default Navbar