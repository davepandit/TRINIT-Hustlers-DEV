import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className=' flex justify-around p-2 shadow-md bg-gray-100 sticky top-0 w-full z-20'>
            <div>
                <h2 className='font-bold text-3xl'><Link to={'/'}>Test Formatter📒</Link></h2>
            </div>
            <div className='flex gap-x-4'>
                <button className='bg-black text-white rounded-3xl px-4 py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out'><Link to={'/signup'}>Signup</Link></button>
                <button className='bg-black text-white rounded-3xl px-4 py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out'><Link to={'/login'}>Login</Link></button>
            </div>


        </div>
    </>
  )
}

export default Navbar