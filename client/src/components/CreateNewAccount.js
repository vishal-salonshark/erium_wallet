/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import {  Link } from 'react-router-dom'
import {MdOutlineError} from 'react-icons/md'
import axios from 'axios'
const CreateNewAccount = () => {
    
  const [_email, setEmail] = useState()
    const [_password, setPassword] = useState()
    const [_confirmPass, setConfirmPass] = useState()
    const [_userid, setUserid] =useState()
    const [result, setResult] = useState()
    const [_warrning , setWarrning] = useState(false)
    const [errMessage, setErrMessage] = useState()
    const [_disable, setDisable] = useState(true)

    useEffect(() => {

      const confirmPassHandler = (e) =>{
  
        if(_password === _confirmPass){
          setWarrning(false)
          setDisable(false)

        }else if (_password ==null && _confirmPass == null) {
          setWarrning(false)
          setDisable(true)
        } 
        else if (_password !== _confirmPass) {
          setWarrning(true)
          setErrMessage('The password you entered is not matching\n please re-enter the password ')
          setDisable(true)
        } 
      }
      confirmPassHandler()
    }, [_confirmPass])
  
  useEffect(() => {
    const regEx = /[0-9a-zA-Z]{8,}$/g;
    if (regEx.test(_password)) {
      setWarrning(false)
     } else if(_password === undefined) {
      setWarrning(false)
      setDisable(true)
    } else if (!regEx.test(_password) && _password !== "") {
      setWarrning(true)
      setErrMessage("Password atlest should be 8 charecter long");
      setDisable(true)
    }

  }, [_password])
  

  useEffect(() =>{

    const rgExp = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2-8}])?/g;
    if (rgExp.test(_email)) { 
      setWarrning(false) 
      var ind =_email.indexOf("@");
      setUserid(_email.slice(0,ind));
    } else if(_email ==null ) {
      setWarrning(false)
      setDisable(true)
    } else if (!rgExp.test(_email) && _email !== "") {
      setWarrning(true)
      setErrMessage("Invalid Email ID");
      setDisable(true)
    }
    },[_email])


    const onSubmit = async () =>{
        try {
          await axios.put('http://localhost:3001/signUp', {
                email : _email,
                userid : _userid,
                password : _password,
              })
              .then((response) => {
                console.log(response.data.result)
                setResult(response.data.result)
              })
              .catch((error) => {
                console.log(error)
              })
        } catch (error) {
          console.log(error)
        }  

    }

    return (
    <div className='form text-white text-lg flex flex-col justify-center items-center'>
       <div className='w-80 h-20 flex justify-center items-center'>
      <label className=' text-2xl '>Create New Wallet</label>
      </div>
      <div className='text-base flex flex-col justify-center items-center'>
      <input type="email" className='align-middle border-2 border-[#89CDB3] rounded-lg bg-transparent p-4 placeholder-[#89cdb36b] m-2 w-80 h-12' name="accountName" placeholder='Email ID' onChange={ (e) => {setEmail(e.target.value);}} />
      <input type="password" className='align-middle border-2 border-[#89CDB3] rounded-lg bg-transparent p-4 placeholder-[#89cdb36b] m-2 w-80 h-12' autoComplete='off' name="accountName" placeholder='New Password' onChange={ (e) => setPassword(e.target.value)} />
      <input type="password" className='align-middle border-2 border-[#89CDB3] rounded-lg bg-transparent p-4 placeholder-[#89cdb36b] m-2 w-80 h-12' autoComplete='off' name="accountName" placeholder='Confirm Password' onChange={ (e) => setConfirmPass(e.target.value)} />
      </div>
      <div className=' flex flex-col justify-center items-center py-5'>
        {
        _warrning === true ?<div className=' flex flex-row justify-start items-center w-80 min-h-14 border-[1px] bg-yellow-200 bg-opacity-20 p-2 mb-5 border-yellow-300 rounded-md'>
        <MdOutlineError className='text-base text-yellow-500'/>
        <label className='text-xs text-yellow-300 ml-2 '>{errMessage}</label>
        </div>: ""
        }
        {
          result === 'success' ? <div className=' flex flex-row justify-start items-center w-80 min-h-14 border-[1px] bg-blue-200 bg-opacity-20 p-2 mb-5 border-blue-300 rounded-md'>
          <MdOutlineError className='text-base text-blue-500'/>
          <div className='flex flex-col justify-center items-start text-xs text-blue-300 ml-2 '><label>Account Created Successfully</label> <Link className='text-blue-500 hover:underline' to={'/'}> Please click here to Login</Link></div>
          </div> : ""
        }
        <div className='w-full mb-10  '>
      <Link to={'/'}><button type="button" className='text-[#89CDB3] w-36 h-14 border-2 border-[#89CDB3] rounded-full'>Cancel</button></Link>
      <button type="submit" className='text-white w-36 ml-5 h-14 bg-[#89CDB3] border-2 border-[#89CDB3] hover:bg-opacity-20 hover:text-[#89CDB3] rounded-full disabled:bg-opacity-10 disabled:border-gray-400 disabled:text-gray-400' disabled={_disable} onClick={() => onSubmit()}>Create</button>
        </div>
      <label className='text-base text-white'>already have account? <Link className='text-blue-500 hover:underline' to={'/'}>Login</Link></label>
      </div>
    </div>
  )
}

export default CreateNewAccount
