import React from 'react'
import {TfiClose} from 'react-icons/tfi'
import {AiOutlinePlus} from 'react-icons/ai'
import {BiArrowToBottom} from 'react-icons/bi'
import {TbPlugConnected, TbMessageCircle, TbSettings} from 'react-icons/tb'

const MyAccount = ({visible, onClose}) => {
    const handleOnClose = (e) =>{
        if(e.target.id === 'MyAccount'){
            onClose()
        }
    }
    if(!visible) return null
  return (
    <div onClick={handleOnClose} id='MyAccount' className="fixed inset-0 p-2 opacity-90 flex items-center justify-center">
    <div className="bg-white  rounded  w-80">
        <div className='flex felx-row justify-between items-center p-2 text-lg border-b-[1px] border-gray-300'>
            <label>My Account</label>
            <TfiClose className='w-4 h-4 text-gray-600 font-light' onClick={onClose}/>
        </div>

      <div className="h-28 mt-2 px-2 overflow-auto scrollbar-none ">
        <button className='h-14 w-full p-3 mt-2 flex flex-row justify-start items-center rounded-lg focus:border-2 focus:border-blue-500'>
        <div className='w-8 h-8 mx-1 rounded-full border-[2px] border-blue-500 flex justify-center items-center bg-white'></div>
        <div className='p-3'>
            <label className='text-sm flex flex-col justify-center items-start'>Account 01<small> 0 ETH</small></label>
        </div>
        </button>
        
        <button className='h-14 w-full p-3 mt-2 flex flex-row justify-start items-center rounded-lg focus:border-2 focus:border-blue-500'>
        <div className='w-8 h-8 mx-1 rounded-full border-[2px] border-blue-500 flex justify-center items-center bg-white'></div>
        <div className='p-3'>
            <label className='text-sm flex flex-col justify-center items-start'>Account 01<small> 0 ETH</small></label>
        </div>
        </button>

        <button className='h-14 w-full p-3 mt-2 flex flex-row justify-start items-center rounded-lg focus:border-2 focus:border-blue-500'>
        <div className='w-8 h-8 mx-1 rounded-full border-[2px] border-blue-500 flex justify-center items-center bg-white'></div>
        <div className='p-3'>
            <label className='text-sm flex flex-col justify-center items-start'>Account 01<small> 0 ETH</small></label>
        </div>
        </button>

        <button className='h-14 w-full p-3 mt-2 flex flex-row justify-start items-center rounded-lg focus:border-2 focus:border-blue-500'>
        <div className='w-8 h-8 mx-1 rounded-full border-[2px] border-blue-500 flex justify-center items-center bg-white'></div>
        <div className='p-3'>
            <label className='text-sm flex flex-col justify-center items-start'>Account 01<small> 0 ETH</small></label>
        </div>
        </button>

        <button className='h-14 w-full p-3 mt-2 flex flex-row justify-start items-center rounded-lg focus:border-2 focus:border-blue-500'>
        <div className='w-8 h-8 mx-1 rounded-full border-[2px] border-blue-500 flex justify-center items-center bg-white'></div>
        <div className='p-3'>
            <label className='text-sm flex flex-col justify-center items-start'>Account 01<small> 0 ETH</small></label>
        </div>
        </button>
      </div>

      <div className='mb-2 p-2 border-y-[1px] border-gray-400'>
        <div className='flex flex-row justify-start items-center gap-3 p-2 text-gray-600 hover:bg-[#89cdb372]'>
            <AiOutlinePlus className='w-6 h-6'/>
            <label className='text-black text-base font-light'>Create Account</label>
        </div>

        <div className='flex flex-row justify-start items-center gap-3 p-2 text-gray-600 hover:bg-[#89cdb372]'>
            <BiArrowToBottom className='w-6 h-6 font-extralight'/>
            <label className='text-black text-base font-light'>Import Account</label>
        </div>

        <div className='flex flex-row justify-start items-center gap-3 p-2 text-gray-600 hover:bg-[#89cdb372]'>
            <TbPlugConnected className='w-6 h-6'/>
            <label className='text-black text-base font-light'>Connect a hardware wallet</label>
        </div>
      </div>

      <div className=' p-2'>
      <div className='flex flex-row justify-start items-center gap-4 m-1  text-gray-600 hover:bg-[#89cdb372]'>
            <TbMessageCircle className='w-6 h-6'/>
            <label className='text-black text-base font-light'>Support</label>
        </div>
        <div className='flex flex-row justify-start items-center gap-4 m-1  text-gray-600 hover:bg-[#89cdb372]'>
            <TbSettings className='w-6 h-6'/>
            <label className='text-black text-base font-light'>Settings</label>
        </div>
      </div>

    </div>
  </div>
  )
}

export default MyAccount