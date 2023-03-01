import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='text-white text-lg flex flex-col justify-center items-center'>
      <div className='w-80 h-20 flex justify-center items-center'>
      <label className=' text-2xl '>Welcome To Erium Wallet</label>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <input type="text" className='align-middle border-2 border-[#89CDB3] rounded-lg bg-transparent p-4 placeholder-[#89cdb36b] m-2 w-80 h-14' name="accountName" placeholder='Email ID' />
      <input type="text" className='align-middle border-2 border-[#89CDB3] rounded-lg bg-transparent p-4 placeholder-[#89cdb36b] m-2 w-80 h-14' name="accountName" placeholder='Password'  />
      </div>
      <div className=' flex flex-col justify-center items-center py-10'>
      <button className='text-white w-36 mb-5 h-14 bg-[#89CDB3] border-2 border-[#89CDB3] hover:bg-opacity-20 hover:text-[#89CDB3] rounded-full'><Link to={'/Erium'}>Login</Link></button>
      <label className='text-base text-white'>Doesn't have account? <Link className='text-blue-500 hover:underline' to={'/CreateNewAccount'}>Create new account</Link></label>
      </div>
    </div>
  )
}

export default Login