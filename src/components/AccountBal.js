/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import{MdArrowForwardIos} from 'react-icons/md'

const { ethers } = require("ethers");

const AccountBal = (acc, bal) => {



    // eslint-disable-next-line
    const [errorMessage, setErrorMessage] = useState(null)
    const [defaultAccount, setDefaultAccount] = useState(null)
    const [userBalance, setUserBalance] = useState(null)
    const [tokenBalances, setTokenBalances] = useState({})
    
    const provider = new ethers.providers.JsonRpcProvider('http://99.80.123.81:8545')

    const tokenAddresses = {
        mctk: '0xd33709aD9462FEaF29f32C1db0e1Cf529305282f',
        alpha: '0xf2567A10b2A0EC62990d36516865CFC2b401B07F',
        theta: '0x7adC438a3E0Da710D610e576515899EF17b9119B',
        gamma: '0xb9Ae6CBa61d964A838555d1b3cD4a89b20f40b4A',
        lambda: '0xD376ebe2C747dbC9876C039E7511E867c503877e',
    }

    // The ERC-20 Contract ABI, which is a common contract interface
    // for tokens (this is the Human-Readable ABI format)
    const contractAbi = [
        // Some details about the token
        'function name() view returns (string)',
        'function symbol() view returns (string)',

        // Get the account balance
        'function balanceOf(address) view returns (uint)',

        // Send some of your tokens to someone else
        // 'function transfer(address to, uint amount)',

        // An event triggered whenever anyone transfers to someone else
        // 'event Transfer(address indexed from, address indexed to, uint amount)',
    ]

    useEffect(() => {
        async function fetchData() {
            let tokenData = {}
            for (const [token, address] of Object.entries(tokenAddresses)) {
                const contract = new ethers.Contract(address, contractAbi, provider)
                const symbol = await contract.symbol()
                const balance = await contract.balanceOf(defaultAccount)
                tokenData[token] = {
                    symbol,
                    balance: ethers.utils.formatUnits(balance, 18),
                }
            }
            // console.log(tokenData)
            setTokenBalances(tokenData)
        }
        
        
        const onSub = async (acc) => {
            try {
                // accountChangedHandler(await acc)
                  setDefaultAccount(acc.acc)
                setUserBalance(acc.bal)
            } catch (error) {
                console.log(error)
            }
        }
        onSub(acc)

        if (defaultAccount) {
            fetchData()
        }
    }, [defaultAccount, acc])

    return (

    <div>
        <div className='w-96 h-20 flex items-center px-4 border-y-[1px] border-gray-500 text-white'>
            <div className='w-10 h-10 rounded-full border-[2px] border-[#89CDB3] flex justify-center items-center bg-white' ></div>
            <div className='w-72 h-14 px-4 flex flex-col justify-start items-center'>
                <div className=' flex flex-row font-light gap-2 w-full'><div className='truncate w-28'>{String(userBalance)}</div><small  className='text-sm'> ETH</small></div>
                <div className='w-full text-sm text-gray-500'>$0.00 USD</div>
            </div>
            <div className='w-5 h-20 flex justify-end items-center'> <MdArrowForwardIos className='font-bold text-lg'/></div>
        </div>

        {Object.entries(tokenBalances).map(([token, { symbol, balance }]) => (
        <div className='w-96 h-20 flex items-center px-4 border-b-[1px] border-gray-500 text-white' key={token}>
            <div className='w-10 h-10 rounded-full border-[2px] border-[#89CDB3] flex justify-center items-center bg-white' ></div>
            <div className='w-72 h-14 px-4 flex flex-col justify-start items-center'>
                <div className='w-full flex flex-row font-light gap-2'><div className='truncate w-28'>{balance}</div><small className='text-sm'>{symbol}</small></div>
                <div className='w-full text-sm text-gray-500'>$0.00 USD</div>
            </div>
            <div className='w-5 h-20 flex justify-end items-center'> <MdArrowForwardIos className='font-bold text-lg'/></div>
        </div>
        ))}
    </div>


    )
}

export default AccountBal