import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const CreateNewAccount = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPass, setConfirmPass] = useState()

    useEffect(() => {
        console.log(email)
        console.log(password)
        console.log(confirmPass)
    }, [confirmPass])
  return (
    <div className='form text-white text-lg flex flex-col justify-center items-center'>
       <div className='w-80 h-20 flex justify-center items-center'>
      <label className=' text-2xl '>Create New Wallet</label>
      </div>
      <div className='text-base flex flex-col justify-center items-center'>
      <input type="email" className='align-middle border-2 border-[#89CDB3] rounded-lg bg-transparent p-4 placeholder-[#89cdb36b] m-2 w-80 h-12' name="accountName" placeholder='Email ID' onChange={ (e) => setEmail(e.target.value.toLowerCase())} />
      <input type="password" className='align-middle border-2 border-[#89CDB3] rounded-lg bg-transparent p-4 placeholder-[#89cdb36b] m-2 w-80 h-12' name="accountName" placeholder='New Password' onChange={ (e) => setPassword(e.target.value)} />
      <input type="password" className='align-middle border-2 border-[#89CDB3] rounded-lg bg-transparent p-4 placeholder-[#89cdb36b] m-2 w-80 h-12' name="accountName" placeholder='Confirm Password' onChange={ (e) => setConfirmPass(e.target.value)} />
      </div>
      <div className=' flex flex-col justify-center items-center py-10'>
        <div className='w-full mb-10  '>
      <button type="reset" className='text-[#89CDB3] w-36 h-14 border-2 border-[#89CDB3] rounded-full'>Reset</button>
      <Link className=' ml-5' to={'/'}><button className='text-white w-36  h-14 bg-[#89CDB3] border-2 border-[#89CDB3] hover:bg-opacity-20 hover:text-[#89CDB3] rounded-full'>Create</button></Link>
        </div>
      
      <label className='text-base text-white'>already have account? <Link className='text-blue-500 hover:underline' to={'/'}>Login</Link></label>
      </div>
    </div>
  )
}

export default CreateNewAccount
