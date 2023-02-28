import React, { useState, useEffect } from 'react'
import { BiChevronDown } from 'react-icons/bi'
const ImportAccount = () => {
    const [options, setOptions] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const [selected, setSelected] = useState('')
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')

    useEffect(() => {
        const data = [{ option: 'PrivateKey' }, { option: 'JsonFile' }]
        setOptions(data)
    }, [])

    return (
        <div className='text-white  '>
            <div className=' flex flex-col justify-center items-start px-5 py-3 border-b-[1px] border-gray-300'>
                <label className='text-3xl mb-3 font-semibold'>Import account</label>
                <p className='text-justify text-sm'>Imported accounts will not be associated with your originally created Erium account Secret Recovery Phrase. Learn more about imported accounts <small className='text-blue-500 text-base underline mx-1'>here</small> </p>
            </div>
            <div className=' mt-5 h-16 flex justify-between items-center'>
                <label className='w-30 px-3 h-10 mx-5 text-base text-gray-300 font-normal flex justify-start items-center'>Select Type </label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`bg-white flex flex-col items-center justify-center rounded-md mx-5 text-black w-1/2 h-9 ${!selected && 'text-gray-700'
                        }`}
                >
                    <div className='flex w-36 flex-row justify-between items-center'>

                        {selected
                            ? selected?.length > 25
                                ? selected?.substring(0, 25) + '...'
                                : selected
                            : 'Select Option'}
                        <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
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
                </div>
            </div>

            <div className='text-3xl text-white flex justify-center items-center mt-1'>
                {selected == 'PrivateKey' ?
                    <div className=' mx-5 '>
                        <label className='p-3 mb-5 text-base font-normal text-gray-300'>Enter your private key string here :</label>
                        <input type="text" className='align-middle border-2 border-[#89CDB3] rounded-lg bg-transparent p-4 placeholder-[#89cdb36b] m-2 w-80 h-14' name="PrivateKey" id="" />
                        <div className=' flex justify-around items-center mt-6' >
                            <button className='text-[#89CDB3] text-base w-36 h-14 border-2 border-[#89CDB3] rounded-full'>Cancel</button>
                            <button className='text-white text-base w-36 h-14 bg-[#89CDB3] border-2 border-[#89CDB3] hover:bg-opacity-20 hover:text-[#89CDB3] rounded-full'>Import</button>
                        </div>
                    </div>
                    : <div className='text-base mt-2 flex flex-col justify-center items-center'>
                        <label className='text-sm'>Used by a variety of different clients</label>
                        <label className='text-sm text-blue-500'>File import not working? Click here!</label>
                        <input type="file" className=' file:bg-transparent file:w-32 file:rounded-full file:hover:bg-[#89cdb353] file:hover:text-white file:h-10 file:border-2 file:text-[#89CDB3] my-5 file:mx-3 file:text-base file:border-[#89CDB3]' name="" id="" />
                        <input type="text" className='align-middle border-2 border-[#89CDB3] rounded-md bg-transparent p-4 placeholder-[#89cdb36b] m-2 w-80 h-14' name="Password" id="" placeholder='Enter Password' />
                        <div className=' flex justify-between items-center gap-6 mt-3' >
                            <button className='text-[#89CDB3] text-base w-36 h-14 border-2 border-[#89CDB3] rounded-full'>Cancel</button>
                            <button className='text-white text-base w-36 h-14 bg-[#89CDB3] border-2 border-[#89CDB3] hover:bg-opacity-20 hover:text-[#89CDB3] rounded-full'>Import</button>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default ImportAccount
