import React, { useEffect, useState } from 'react'
// import Web3 from 'web3/types'

const SignTx = () => {
    const [sendTo, setSendTo] = useState()

    const sendTx = async () => {
        if(sendTo !== undefined){

            // const tx = await web3.eth.sendTransaction({
            //     from: _address,
            //     to: sendTo,
            //     value: '1000000000000000'
            // })
            
            console.log(sendTo)
        }
    }
  return (
    <div className=''>
      <div className=' flex flex-col justify-center my-3 items-start px-5'>
        <label className='m-2 px-2' >Send To</label>
        <input type="text" className='align-middle border-2 border-[#89CDB3] rounded-lg bg-transparent p-4 placeholder-[#89cdb36b] m-2 w-80 h-14' name="accountName" placeholder='Send To' onChange={(e) => setSendTo(e.target.value)}  />
      </div>
      <div className='flex px-8 py-2 flex-row justify-between items-center'>
        <label className='text-base font-semibold '>Asset :</label>
        <div className='w-56 h-14 bg-white border-[#89CDB3] border-2 rounded-md flex items-center p-3'>
            <div className='w-8 h-8 rounded-full border-2 border-blue-500'></div>
            <div className='flex flex-col justify-center items-start mx-3'>
            <label className='text-sm text-black'>ETH</label>
            <label className='text-xs text-gray-400'>Balance : 78.56420579ETH</label>
            </div>
        </div>
      </div>
      <div className='flex px-8 py-2 flex-row justify-between items-center'>
        <label className='text-base font-semibold '>Amount :</label>
        <div className='w-56 h-14 bg-white border-[#89CDB3] border-2 rounded-md px-3 py-2 flex flex-col justi items-start'>
        <div className='w-48 flex felx-row justify-start items-center'><input type={'text'} placeholder="0" className='h-6 w-40  text-black outline-none'/> <label className='text-sm text-black'>ETH</label></div>
        <label className='text-xs text-gray-400 '>$0.00 USD</label>
        </div>
      </div>
      <div className='w-56 ml-32 flex flex-row justify-around items-center'>
        <div className='flex flex-col justify-center items-start'>
            <label className=' text-xs my-2'>Gas price (GWEI)</label>
            <input type="number" className='border-[#89CDB3] w-20 pl-2 border-2 bg-transparent rounded-md ' placeholder=''/>
        </div>
        <div className='flex flex-col justify-center items-start'>
            <label className=' text-xs my-2'>Gas limit</label>
            <input type="number" className='border-[#89CDB3] w-20 pl-2 border-2 bg-transparent rounded-md' />
        </div>
      </div>

      <div className='h-24 my-2 mx-8 px-5 border-[#89CDB3] border-2 rounded-lg flex flex-row '>
        <div className=' w-1/2 mb-6 flex flex-col justify-center items-start '>
        <label className='text-sm'>Gas <small className='text-sm'>(estimated)</small></label>
        </div>
        <div className='w-1/2 flex flex-col justify-center items-start'>
            <label className='text-sm'><label className='text-sm font-light'>$0.03</label> 0.00021 ETH</label>
            <label className='text-sm font-light'><label className='text-sm font-semibold'>Max fee:</label > 0.00021 ETH</label>
        </div>
      </div>
      <div className=' h-14'>
        <button></button>
        <button></button>
      </div>
    </div>
  )
}

export default SignTx
