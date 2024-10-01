import React from 'react'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <section>
    <h1 className="text-3xl font-bold text-gray-300 mb-5">About me</h1>
    <div className="flex gap-5 flex-col md:flex-row">
      <div className="flex gap-5 md:w-4/6 flex-col">
      <div className="grid gap-5 grid-cols-2">
        <AboutCard src={"/assets/grid1.png"} title="Hi I'm Spaqoo"/>
        <AboutCard src={"/assets/grid2.png"} title="Hi I'm Ali"/>
      </div>
      <AboutCard src={"/assets/grid3.png"} title="Hi I'm Meer"/>
      </div>
      <div className="flex flex-col  gap-5 md:w-2/6">
      <AboutCard src={"/assets/about-img4.png"} title="Hi I'm Hello"/>
      <AboutCard src={"/assets/grid4.png"} title="Hi I'm Spaqoo"/>
      </div>
    </div>
  </section>
  )
}

export default About