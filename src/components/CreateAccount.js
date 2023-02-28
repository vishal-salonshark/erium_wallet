import React from 'react'

const CreateAccount = () => {
  return (
    <div className='w-96 text-white'>
      <div className=' flex flex-col justify-center my-5 items-start px-5'>
        <label className='m-2 px-2' >Account Name</label>
        <input type="text" className='align-middle border-2 border-[#89CDB3] rounded-lg bg-transparent p-4 placeholder-[#89cdb36b] m-2 w-80 h-14' name="accountName" placeholder='Account Name' />
      </div>
      <div className=' flex justify-around items-center' >
        <button className='text-[#89CDB3] w-36 h-14 border-2 border-[#89CDB3] rounded-full'>Cancel</button>
        <button className='text-white w-36 h-14 bg-[#89CDB3] border-2 border-[#89CDB3] hover:bg-opacity-20 hover:text-[#89CDB3] rounded-full'>Create</button>
      </div>
    </div>
  )
}

export default CreateAccount
