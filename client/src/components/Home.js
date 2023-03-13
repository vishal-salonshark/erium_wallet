import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-2xl py-20 flex flex-col justify-center items-center text-white '>
        <label className=' mb-10'>Welcome to Erium Wallet</label>
        <button className='w-60 h-10 mb-5 rounded-full bg-blue-500 border-2 border-blue-500 hover:bg-opacity-20 text-base text-white'><Link to={"/CreateAccount"}>Create New Address</Link></button>
        <button className='w-60 h-10 mb-5 rounded-full bg-blue-500 border-2 border-blue-500 hover:bg-opacity-20 text-base text-white'><Link to={"/ImportAccount"}>Import Existing Address</Link></button>
    </div>
  )
}

export default Home