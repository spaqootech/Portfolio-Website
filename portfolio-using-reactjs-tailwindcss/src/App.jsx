import React from 'react'
import AboutCart from './component/AboutCart'
import Feedback from './component/Feedback'

function App() {
  return (
    <main className='p-5 md:p-10 lg:px-20'>
      
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-md lg:text-2xl font-semibold">Spaqoo Tech</h1>
        <ul className="hidden md:block md:flex flex-col md:flex-row justify-between items-center gap-2 md:gap-3 md:gap-5 lg:gap-10">
          <div className="text-lg text-gray-100">Home</div>
          <div className="text-lg text-gray-100">About</div>
          <div className="text-lg text-gray-100">Work</div>
          <div className="text-lg text-gray-100">Contact</div>
        </ul>
        <div className="flex justify-end relative items-center hidden">
          <button className="">=</button>
          <ul className="absolute top-10 right-15 w-[440px] z-10 bg-[#0E0E10] flex flex-col justify-between gap-10">
          <div className="text-lg text-gray-100">Home</div>
          <div className="text-lg text-gray-100">About</div>
          <div className="text-lg text-gray-100">Work</div>
          <div className="text-lg text-gray-100">Contact</div>
        </ul>
        </div>
      </nav>
      {/* Navbar */}



      {/* Header */}
      <header className="p-10 md:p-20 lg:p-32 flex flex-col justify-center items-center gap-3 relative">
        <p className="text-md lg:text-2xl">Hi, I'm Spaqoo</p>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-200">Building products & brands</h1>
        <img src="/assets/computer.png" alt="" className='w-[500px]'/>
        <img src="/assets/header-img1.png" alt="" className='w-10 md:w-32 lg:w-48 absolute left-10 top-10'/>
        <img src="/assets/header-img2.png" alt="" className='w-10 md:w-32 lg:w-48 absolute right-10 top-10'/>
        <img src="/assets/header-img3.png" alt="" className='w-10 md:w-32 lg:w-48 absolute left-10 bottom-10'/>
        <img src="/assets/header-img4.png" alt="" className='w-10 md:w-32 lg:w-48 absolute right-10 bottom-10'/>
      </header>
      {/* Header */}


      {/* About */}
      <section className="py-5 md:py-10">
        <h1 classtext-lg md:Name="text-xl md:text-3xl font-bold mb-5">About me</h1>
        <div className="flex flex-col md:flex-row gap-3 md:gap-5">
          <div className="w-full md:w-4/6 flex flex-col gap-3 md:gap-5">
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            <AboutCart source="/assets/grid1.png"/>
            <AboutCart source="/assets/grid2.png"/>
          </div>
          <AboutCart source="/assets/grid3.png"/>
          </div>
          <div className="w-full md:w-2/6 flex flex-col md:flex-row md:flex-col gap-3 md:gap-5">
            <AboutCart source="/assets/about-img4.png"/>
            <AboutCart source="/assets/grid4.png"/>
          </div>
        </div>
      </section>
      {/* About */}



      {/* Work */}
      <section className="py-5 md:py-10">
        <div className="text-md lg:text-2xl font-bold mb-5">My Selected Work</div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-5 justify-between items-center">
          <div className="p-5 rounded-xl h-[500px] w-full md:w-3/6 bg-[url('/public/assets/spotlight1.png')] bg-cover bg-no-repeat flex flex-col justify-between items-start">
          <div className=" rounded-lg shadow p-3 border border-gray-700">
            <img src="/public/assets/project-logo1.png" className='h-8' alt="" />
          </div>
          <h1 className="text-md lg:text-2xl font-bold">Potcaster - AI Postcaster Platform</h1>
          <p className="text-gray-500 text-sm mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde facere amet nostrum voluptate omnis velit sequi minima, libero consequatur voluptatibus cupiditate praesentium sapiente magni! Alias facere consequatur quisquam tempore inventore.
          </p>
          <p className="text-gray-500 text-sm mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde facere amet nostrum voluptate omnis velit sequi minima, libero consequatur voluptatibus cupiditate praesentium sapiente magni! Alias facere consequatur quisquam tempore inventore.
          </p>
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex gap-2">
                <div className=" rounded-lg shadow p-2 border border-gray-700">
                <img src="/public/assets/react.svg" className='h-4' alt="" />
              </div>
                <div className=" rounded-lg shadow p-2 border border-gray-700">
                <img src="/public/assets/tailwindcss.png" className='h-4' alt="" />
              </div>
                <div className=" rounded-lg shadow p-2 border border-gray-700">
                <img src="/public/assets/typescript.png" className='h-4' alt="" />
              </div>
                <div className=" rounded-lg shadow p-2 border border-gray-700">
                <img src="/public/assets/framer.png" className='h-4' alt="" />
              </div>
            </div>
            <div className="flex justify-end items-center gap-2">
              <p classtext-lg md:Name="text-xl">Check Live Site</p>
              <img src="/public/assets/arrow-up.png" className='h-4' alt="" />
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="p-3 rounded-full flex justify-center items-center bg-[#0E0E10]">
            <img src="/public/assets/left-arrow.png" className='h-4' alt="" />
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="p-1 rounded-full bg-gray-800"></div>
              <div className="p-1 rounded-full bg-gray-300"></div>
              <div className="p-1 rounded-full bg-gray-800"></div>
              <div className="p-1 rounded-full bg-gray-800"></div>
              <div className="p-1 rounded-full bg-gray-800"></div>
            </div>
            <div className="p-3 rounded-full flex justify-center items-center bg-[#0E0E10]">
            <img src="/public/assets/right-arrow.png" className='h-4' alt="" />
            </div>
          </div>
          </div>
          <div className="p-5 rounded-xl h-[500px] w-full md:w-3/6 bg-[url('/public/assets/work-computer.png')] bg-cover bg-no-repeat">2</div>
        </div>
      </section>
      {/* Work */}




      {/* Clients */}
      <div className="py-5">
        <h1 className="text-md lg:text-2xl font-bold mb-5">Hear from My Clients</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <Feedback source="/assets/review1.png"/>
          <Feedback source="/assets/review2.png"/>
          <Feedback source="/assets/review3.png"/>
          <Feedback source="/assets/review4.png"/>
        </div>
      </div>
      {/* Clients */}


      {/* Experiences */}
      <div className="py-5 md:py-10">
        <h1 className="text-md lg:text-2xl font-bold mb-5 ">My Work Experiences</h1>
        <div className="flex flex-col md:flex-row justif-between items-center gap-3 md:gap-5">
          <div className="w-full md:w-2/6 h-[500px] p-3 rounded-lg bg-[url('/public/assets/experience.png')] bg-cover bg-no-repeat"></div>
          <div className="w-full md:w-4/6 md:h-[500px] p-3 rounded-lg flex">
          <div className="w-1/6 p-2 flex flex-col justify-between items-center">
          <img src="/public/assets/framer.svg" className='h-12 bg-[#0E0E10] w-12 rounded-lg' alt="" /> 
          <div className="w-[1px] bg-[#0E0E10] h-20"></div>
          <img src="/public/assets/figma.svg" className='h-12 bg-[#0E0E10] w-12 rounded-lg' alt="" /> 
          <div className="w-[1px] bg-[#0E0E10] h-20"></div>
          <img src="/public/assets/notion.svg" className='h-12 bg-[#0E0E10] w-12 rounded-lg' alt="" /> 
          <div className="w-[1px] bg-transparent h-20"></div>
          </div>
          <div className="w-5/6 p-5 flex flex-col bg-[#0E0E10]">
          
          <h1 classtext-lg md:Name="text-xl font-bold">Framer</h1>
          <p classtext-lg md:Name="text-xl text-gray-500">Lead Developer - 2022 -Present</p>
          <p className="text-gray-500 text-sm mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, omnis distinctio eum animi voluptatem eaque, quisquam nulla debitis molestias est perferendis harum vitae. Dolorum, doloremque laboriosam quod consectetur dolore eum.
          </p>

          
          <h1 classtext-lg md:Name="text-xl font-bold">Figma</h1>
          <p classtext-lg md:Name="text-xl text-gray-500">Lead Developer - 2022 -Present</p>
          <p className="text-gray-500 text-sm mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, omnis distinctio eum animi voluptatem eaque, quisquam nulla debitis molestias est perferendis harum vitae. Dolorum, doloremque laboriosam quod consectetur dolore eum.
          </p>

          
          <h1 classtext-lg md:Name="text-xl font-bold">Notion</h1>
          <p classtext-lg md:Name="text-xl text-gray-500">Lead Developer - 2022 -Present</p>
          <p className="text-gray-500 text-sm mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, omnis distinctio eum animi voluptatem eaque, quisquam nulla debitis molestias est perferendis harum vitae. Dolorum, doloremque laboriosam quod consectetur dolore eum.
          </p>
          </div>
          </div>
        </div>
      </div>
      {/* Experiences */}





      {/* Lets Talk */}
      <div className="rounded-xl bg-[url('/public/assets/terminal.png')] bg-contain bg-no-repeat md:h-[700px] bg-center flex justify-center items-start p-10 md:p-20 lg:py-32">
      <div className="w-full md:w-4/6">
      <h1 className="text-lg md:text-xl md:text-3xl font-bold">Let's Talk</h1>
      <p className="hidden md:blocktext-gray-500 text-xs md:text-lg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas? Voluptate possimus sunt, dolorum aperiam nam quos quae ex modi culpa, recusandae sed dignissimos minus nihil unde. Inventore, consequatur neque!
      </p>

      <div className="py-1 md:py-3">
        <div className="text-gray-500 text-xs md:text-lg">Full Name</div>
        <input type="text" placeholder='Spaqoo Tech' className="text-gray-500 p-1 md:p-3 rounded-lg bg-[#0E0E10] w-full" />
      </div>

      <div className="py-1 md:py-3">
        <div className="text-gray-500 text-xs md:text-lg">Email</div>
        <input type="text" placeholder='Spaqoo Tech' className="text-gray-500 p-1 md:p-3 rounded-lg bg-[#0E0E10] w-full" />
      </div>

      <div className="py-1 md:py-3">
        <div className="text-gray-500 text-xs md:text-lg">Your Comment</div>
        <input type="text" placeholder='Spaqoo Tech' className="text-gray-500 p-1 md:p-3 rounded-lg bg-[#0E0E10] w-full" />
      </div>

      <button className="p-1 md:p-3 w-full font-semibold rounded-sm md:rounded-lg bg-gray-700">
        Send Message
      </button>
      </div>

      </div>
      {/* Lets Talk */}



      {/* Footer */}
      <footer className="flex  flex-col md:flex-row gap-3 justify-between items-center  my-10">
        <p className="text-gray-500">Terms & Condition | Privacy Policy</p>
        <div className="flex justify-center items-center gap-3">
          <img src="/public/assets/twitter.svg" className='h-10 rounded-full bg-[#0E0E10] p-2' alt="" />
          <img src="/public/assets/github.svg" className='h-10 rounded-full bg-[#0E0E10] p-2' alt="" />
          <img src="/public/assets/instagram.svg" className='h-10 rounded-full bg-[#0E0E10] p-2' alt="" />
        </div>
        <p className="text-gray-500">2024 Spaqoo Tech All rights reserved.</p>
      </footer>
      {/* Footer */}

    </main>
  )
}

export default App