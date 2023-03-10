/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import {BsThreeDotsVertical, BsChevronDown, BsArrowUpRight} from 'react-icons/bs'
import {BiImport} from 'react-icons/bi'
import{MdArrowForwardIos} from 'react-icons/md'
import { AiOutlineSwap } from 'react-icons/ai'
import AccountBal from './AccountBal'
import Web3 from 'web3'
import AppContext from '../AppContext'
import { Link } from 'react-router-dom'
import TxData from './TxData'

const Erium =  () => {
    var web3 = new Web3(new Web3.providers.HttpProvider('http://99.80.123.81:8545'));
    const {_address} = useContext(AppContext)
    const [balance,setBalance] = useState('')

    useEffect(() =>{
        const getBal = async () => {
            const bal = await web3.eth.getBalance(_address)
            return( await web3.utils.fromWei(bal, 'ether'))
        }
        getBal().then((e) => {
            setBalance(e)
        })
    }, [_address])

    
    const [menu, setMenu] =useState ('Assets')

  return (
    <div className='w-96 h-[32rem]  overflow-auto scrollbar-none flex flex-col justify-start items-center'>
        {/* <div className='h-20 w-full bg-gray-100 flex flex-row justify-between items-center p-2 gap-2'>
            <div className='w-10 h-10 flex justify-center items-center rounded-full  bg-white text-xs'>LOGO</div>
            <div className='h-10 flex justify-center items-center '> <div className='h-10 flex text-sm text-black font-light justify-center items-center border-[1px] gap-2 px-3 border-gray-400 rounded-full'>Erium Network <BsChevronDown className='w-3 h-3'/></div> </div>
            <div className='w-10 h-10 rounded-full border-[2px] border-blue-500 flex justify-center items-center bg-white'></div>
        </div> */}

        <div className='text-white flex justify-start items-center px-2 border-b-[1px] border-gray-300 gap-2 h-16 w-96'>
            <div className='px-1 w-32 h-6 flex rounded-full flex-row justify-center items-center font-light hover:bg-[#fdfdfd21] text-white '>
                <div className='border-[1.5px] w-2 h-2 rounded-full border-white'></div>
            <div className='mx-1  text-xs'> Not Connected</div>
            </div>
            <div className='w-28 my-1 hover:bg-[#fdfdfd21] rounded-md p-1 flex flex-col justify-center items-center text-white '>
                <div className='font-bold'>Account</div>
                <div className=' w-10/12 text-sm  font-light  truncate'>{_address}</div>
            </div>
            <div className=' w-24 m-1 h-14 flex justify-end items-center'>
            <BsThreeDotsVertical className='text-xl font-extrabold w-6 h-6 '/>
            </div>
            
        </div>
        
        <div className='flex flex-col mb-5 justify-center items-center'>
            <div className='w-10 h-10 rounded-full m-2 border-[2px] border-gray-200 flex justify-center items-center bg-white'></div>
            <div className=' w-56 flex justify-center my-2 items-center text-white font-bold text-4xl'><label className='truncate'>{balance}</label> ETH</div>
            <div className=' flex justify-center mb-4 items-center text-gray-200 text-base'>$0.00 USD</div>
            <div className='w-60 h-16  px-4 flex flex-row justify-between items-center gap-2'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-10 h-10 bg-[#89CDB3] rounded-full flex justify-center items-center'><BiImport className='w-6 h-6 text-white font-bold'/></div>
                    <label className='text-sm mt-2 text-[#89CDB3]'>Buy</label>
                </div>
                <Link className='flex flex-col justify-center items-center' to={'/SendTx'}>
                    <div className='w-10 h-10 bg-[#89CDB3] rounded-full flex justify-center items-center'><BsArrowUpRight className='w-5 h-5 text-white font-extrabold'/></div>
                    <label className='text-sm mt-2 text-[#89CDB3]'>Send</label>
                </Link>
                <Link className='flex flex-col justify-center items-center' to={'/swap'}>
                    <div className='w-10 h-10 bg-[#89CDB3] rounded-full flex justify-center items-center'><AiOutlineSwap className='w-6 h-6 text-white font-bold'/></div>
                    <label className='text-sm mt-2 text-[#89CDB3]' >Swap</label>
                </Link>
            </div>
        </div>

        <div className='h-10 w-96 mb-3 flex flex-row justify-center items-center '>
            <button className='w-1/2 p-1  m-[2px] focus:border-b-2 focus:border-[#89CDB3]'>
                <div className='w-full hover:bg-[#fdfdfd21] rounded-xl text-base font-light h-10 flex justify-center items-center text-white' onClick={(e) => setMenu(e.target.textContent)}>Assets</div>
            </button>
            <button className='w-1/2 p-1 m-[2px] focus:border-b-2 focus:border-[#89CDB3]'>
                <div className='w-full hover:bg-[#fdfdfd21] rounded-xl text-base font-light h-10 flex justify-center items-center text-white' onClick={(e) => setMenu(e.target.textContent)}>Activity</div>
            </button>
        </div>

    {menu === 'Assets' ?<AccountBal/>:<TxData/>}

    <div className='w-96 h-8 flex justify-center gap-2 text-sm items-center my-2 text-white'>Need help ? <label className='text-blue-500'> Contact Erium support</label></div>

    </div>
  )
}

export default Erium