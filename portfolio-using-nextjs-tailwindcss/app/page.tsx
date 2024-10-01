import About from '@/components/About'
import Clients from '@/components/Clients'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LetsTalk from '@/components/LetsTalk'
import Navbar from '@/components/Navbar'
import Work from '@/components/Work'
import React from 'react'
const page = () => {
  return (
    <main className='p-3 md:p-10 lg:px-20 flex flex-col gap-5'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Clients/>
      <Experience/>
      <LetsTalk/>
    <Footer/>
    </main>
  )
}

export default page