import React from 'react'
import {TfiClose} from 'react-icons/tfi'
const MyAccount = ({visible, onClose}) => {
    const handleOnClose = (e) =>{
        if(e.target.id === 'MyAccount'){
            onClose()
        }
    }
    if(!visible) return null
  return (
    <div onClick={handleOnClose} id='MyAccount' className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
    <div className="bg-white p-2 rounded w-80">
        <div className='flex felx-row justify-between items-center p-2 text-lg border-b-[1px] border-gray-600'>
            <label>My Account</label>
            <TfiClose className='w-4 h-4 font-light' onClick={onClose}/>
        </div>
      <div className="text-center">
        
      </div>
    </div>
  </div>
  )
}

export default MyAccount