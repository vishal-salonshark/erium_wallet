/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import AppContext from '../AppContext'
// import Web3 from 'web3/types'

const SignTx = () => {
  const {sendTx , tokenBalances, _address} = useContext(AppContext)
    const [sendTo, setSendTo] = useState()
    const [amount, setAmount] = useState()
    const [gasPrice, setGasPrice] = useState()
    const [gasLimit, setGasLimit] = useState('21000')

    // const [options, setOptions] = useState(null)
    // const [inputValue, setInputValue] = useState('')
    // const [selected, setSelected] = useState('')
    // const [open, setOpen] = useState(false)

    const navigate = useNavigate();
  //   useEffect(() => {
  //     console.log(tokenBalances)
  //     const data = [{ option: 'PrivateKey' }, tokenBalances]
  //     console.log(data)
  //     setOptions(data)
  // }, [tokenBalances])

  return (
    <div className=''>
      <div>
        <label className='text-white p-2 text-sm font-semibold'>{_address}</label>
      </div>
      <Form>
      <div className=' flex flex-col justify-center my-3 items-start px-5'>
        <label className='m-2 px-2' >Send To</label>
        <input type="text" className='align-middle border-2 border-[#89CDB3] rounded-lg bg-transparent p-4 placeholder-[#89cdb36b] m-2 w-80 h-14' name="accountName" placeholder='Send To' onChange={(e) => setSendTo(e.target.value)}  />
      </div>
      <div className='flex px-8 py-2 flex-row justify-between items-center'>
        <label className='text-base font-semibold '>Asset :</label>

        {/* <div
                    onClick={() => setOpen(!open)}
                    className={`bg-white flex flex-col items-center justify-center rounded-md mx-5 text-black w-1/2 h-9 ${!selected && 'text-gray-700'
                        }`}
                >
                    <div className='flex w-36 flex-row justify-between items-center'>

                        {selected
                            ? selected?.length > 25
                                ? selected?.substring(0, 25) + '...'
                                : selected
                            : 'Select Type'}
                    </div>
                    <ul
                        className={`bg-white absolute mt-32 w-40  overflow-y-auto  ${open ? 'max-h-60' : 'max-h-0'
                            } `}
                    >
                        {options?.map((item) => (
                            <li
                                key={item?.option}
                                className={`p-2 text-sm hover:bg-[#89CDB3] hover:text-black
            ${item?.option?.toLowerCase() === selected?.toLowerCase() &&
                                    'bg-[#89CDB3] text-black'
                                    }
            ${item?.option?.toLowerCase().startsWith(inputValue)
                                        ? 'block'
                                        : 'hidden'
                                    }`}
                                onClick={() => {
                                    if (
                                        item?.option?.toLowerCase() !== selected.toLowerCase()
                                    ) {
                                        setSelected(item?.option)
                                        setOpen(false)
                                        setInputValue('')
                                    }
                                }}
                            >
                                {item?.option}
                            </li>
                        ))}
                    </ul>
        </div> */}

        <div className='w-56 h-14 bg-white border-[#89CDB3] border-2 rounded-md flex items-center p-3'>
            <div className='w-8 h-8 rounded-full border-2 border-blue-500'></div>
            <div className='flex flex-col justify-center items-start mx-2'>
            <label className='text-sm text-black'>ETH</label>
            <label className='text-xs w-36 text-gray-400 font-semibold'>Balance : <label className='text-xs w-6 truncate font-normal'> 783.025</label> ETH</label>
            </div>
        </div>


      </div>
      <div className='flex px-8 py-2 flex-row justify-between items-center'>
        <label className='text-base font-semibold '>Amount :</label>
        <div className='w-56 h-14 bg-white border-[#89CDB3] border-2 rounded-md px-3 py-2 flex flex-col justi items-start'>
        <div className='w-48 flex felx-row justify-start items-center'><input type={'text'} placeholder="0" className='h-6 w-40  text-black outline-none' onChange={(e) => setAmount(e.target.value)}/> <label className='text-sm text-black'>ETH</label></div>
        <label className='text-xs text-gray-400 '>$0.00 USD</label>
        </div>
      </div>
      <div className='w-56 ml-32 flex flex-row justify-around items-center'>
        <div className='flex flex-col justify-center items-start'>
            <label className=' text-xs my-2'>Gas price (GWEI)</label>
            <input type="number" className='border-[#89CDB3] w-20 pl-2 border-2 bg-transparent rounded-md ' placeholder='' onChange={(e) => setGasPrice(e.target.value)}/>
        </div>
        <div className='flex flex-col justify-center items-start'>
            <label className=' text-xs my-2'>Gas limit</label>
            <input type="number" className='border-[#89CDB3] w-20 pl-2 border-2 bg-transparent rounded-md' placeholder='21000' onChange={(e) => setGasLimit(e.target.value)} />
        </div>
      </div>

      <div className='h-24 my-2 mx-8 px-5 border-[#89CDB3] border-2 rounded-lg flex flex-row '>
        <div className=' w-2/5 mb-6 flex flex-col justify-center items-start '>
        <label className='text-sm'>Gas <small className='text-sm'>(estimated)</small></label>
        </div>
        <div className='w-7/12 flex flex-col justify-center items-start'>
            <label className='text-sm px-2'><label className='text-sm font-light'>$0.03</label> 0.00021 ETH</label>
            <label className='text-sm px-2 font-light'><label className='text-sm font-semibold'>Max fee:</label > 0.00021 ETH</label>
        </div>
      </div>
      <div className=' h-14 flex flex-row justify-around items-center'>
        <button type='reset' className='w-28 h-10 text-[#89CDB3] border-2 border-[#89CDB3] rounded-full'>Reset</button>
        <button type='submit' className='w-28 h-10 bg-[#89CDB3] font-bold hover:bg-opacity-20 hover:text-[#89CDB3] border-2 border-[#89CDB3] rounded-full' onClick={() => {sendTx(sendTo, _address, amount, gasPrice, gasLimit); navigate("/txRecipt")}}>Send</button>
      </div>
      </Form>
    </div>
  )
}

export default SignTx
