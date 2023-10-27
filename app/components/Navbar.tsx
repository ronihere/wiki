import React from 'react'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <section className='flex items-center justify-between h-fit p-4 w-full bg-slate-800'>
          <div className='text-6xl text-gray-100 font-bold'>
              WikiDepia🚀
          </div>
          <Searchbar/>
    </section>
  )
}

export default Navbar
