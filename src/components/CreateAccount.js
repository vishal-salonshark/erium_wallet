/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Web3 from 'web3'

const CreateAccount = () => {
  var web3 = new Web3(new Web3.providers.HttpProvider('http://99.80.123.81:8545'));
  const [accName , setAccName] = useState('')
  
  const  createNewAcc = async () => {

    const newAccount = await web3.eth.accounts.create()
    // console.log(newAccount)
    const walletAdd = await web3.eth.accounts.wallet.add(newAccount);
    const wallet = await web3.eth.accounts.wallet;
    for(var i = 0; i<= wallet.length ;i++ ){
      console.log(wallet[i])
    }
    console.log(wallet.length)
  }

  
  return (
    <div className='w-96 text-white'>
      <div className=' flex flex-col justify-center my-5 items-start px-5'>
        <label className='m-2 px-2' >Account Name</label>
        <input type="text" className='align-middle border-2 border-[#89CDB3] rounded-lg bg-transparent p-4 placeholder-[#89cdb36b] m-2 w-80 h-14' name="accountName" placeholder='Account Name' onChange={(e) => {setAccName(e.target.value)}}  />
      </div>
      <div className=' flex justify-around items-center' >
        <button className='text-[#89CDB3] w-36 h-14 border-2 border-[#89CDB3] rounded-full'>Cancel</button>
        <button className='text-white w-36 h-14 bg-[#89CDB3] border-2 border-[#89CDB3] hover:bg-opacity-20 hover:text-[#89CDB3] rounded-full' onClick={() => createNewAcc()}>Create</button>
      </div>
    </div>
  )
}

export default CreateAccount
