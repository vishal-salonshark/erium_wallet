/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, {useContext, useEffect} from 'react'
import {TfiClose} from 'react-icons/tfi'
import {AiOutlinePlus} from 'react-icons/ai'
import {BiArrowToBottom} from 'react-icons/bi'
import {TbPlugConnected, TbMessageCircle, TbSettings} from 'react-icons/tb'
import {GrAdd} from 'react-icons/gr'
import AppContext  from '../AppContext'


const MyAccount = ({visible, onClose}) => {
    const { storageLength ,setStorageLength, _address, setAddress} = useContext(AppContext)
    const handleOnClose = (e) =>{
        if(e.target.id === 'MyAccount'){
            onClose()
        }
    }
    // useEffect(() => {
    //   console.log(_address)      
    // }, [_address])
    
    setStorageLength(localStorage.length)

    
    if(!visible) return null
  
    return (
    <div onClick={handleOnClose} id='MyAccount' className="fixed inset-0 text-black p-2 opacity-90 flex items-center justify-center">
    <div className="bg-white  rounded  w-80">
        <div className='flex felx-row justify-between items-center p-2 text-lg border-b-[1px] border-gray-300'>
            <label>My Account</label>
            <TfiClose className='w-4 h-4 text-gray-600 font-light' onClick={onClose}/>
        </div>

      <div className="h-28 mt-2 px-2 overflow-auto scrollbar-none ">
        {
            storageLength !== 0 ?
            Object.entries(localStorage).map((entries, index) => {
                if(entries[0] !== 'login'){
                return(<button className='h-14 w-full p-3 mt-2 flex flex-row just   ify-start items-center rounded-lg focus:border-2 focus:border-blue-500' onClick={()=>{setAddress(entries[0]); onClose();}}>
                <div className='w-8 h-8 mx-1 rounded-full border-[2px] border-blue-500 flex justify-center items-center bg-white'></div>
                <div className='p-3 w-ful'>
                    <label className='text-sm flex flex-col justify-center items-start'>Account {index}<small className='truncate w-44'>{entries[0]}</small></label>
                </div>
                </button>)
                }else{return null} 
            })
                
              : 
                <button className='h-14 w-full p-3 mt-2 flex flex-row justify-start items-center rounded-lg focus:border-2 focus:border-blue-500'>
                <div className='w-8 h-8 mx-1 rounded-full border-[2px] border-blue-500 flex justify-center items-center bg-white'><GrAdd/></div>
                <div className='p-3'>
                    <label className='text-sm flex flex-col justify-center items-start'><a href='/Home'>Add Account</a></label>
                </div>
                </button>

        }

      </div>

      <div className='mb-2 p-2 border-y-[1px] border-gray-400'>
        <a href='/CreateAccount' className='flex flex-row justify-start items-center gap-3 p-2 text-gray-600 hover:bg-[#89cdb372]'>
            <AiOutlinePlus className='w-6 h-6'/>
            <label className='text-black text-base font-light'>Create Account</label>
            {/* <Link className='text-black text-base font-light' to={'/CreateAccount'}>Create Account</Link> */}
        </a>

        <a href='/ImportAccount' className='flex flex-row justify-start items-center gap-3 p-2 text-gray-600 hover:bg-[#89cdb372]'>
            <BiArrowToBottom className='w-6 h-6 font-extralight'/>
            <label className='text-black text-base font-light'>Import Account</label>
        </a>

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