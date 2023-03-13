/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {MdOutlineError} from 'react-icons/md'
import AppContext  from '../AppContext'
import axios from 'axios';


const Login = () => {
  const { _email, setEmail, _password, setPassword, data, setData, result, setResult, setAddress } = useContext(AppContext)
  // const [_email, setEmail] = useState()
  // const [_password, setPassword] = useState()
  // const [data, setData] = useState()
  const [_disabled, setDisabled] = useState(true)
  // const [result, setResult] = useState()
  const [_warrning , setWarrning] = useState(false)
  const [errMessage, setErrMessage] = useState()


  const navigate = useNavigate();
  

  useEffect(() => {
    // localStorage.setItem('login', false);
    if( localStorage.getItem('login') === "true"){
      if(localStorage.length === 1){
        navigate("/Home");
      }else{
        navigate("/Erium")
        Object.entries(localStorage)[0][0] === 'login'? setAddress(Object.entries(localStorage)[1][0]): setAddress(Object.entries(localStorage)[0][0])
      }
    }
  }, [])
  

  function onLogin() {

    axios.get(`http://localhost:3001/login/${_email}`).then((response)=>{
        setData(response.data)
    })

  }

  useEffect( () => {
    
    if(_email === undefined && _password === undefined){
      setWarrning(false)
      setDisabled(true)
     }
     else if(data && _email === data[0]?.email && _password === data[0]?.password){

      setResult('success')
      localStorage.setItem('login', true);
      if(localStorage.length === 1){
        navigate("/Home");
      }else{
        navigate("/Erium")
        Object.entries(localStorage)[0][0] === 'login'? setAddress(Object.entries(localStorage)[1][0]): setAddress(Object.entries(localStorage)[0][0])
      }
      
     } 
     else{
      setWarrning(true)
      localStorage.setItem('login', false);
      setErrMessage("Invalid email or password !!! ")
     }
  }, [data])

  useEffect(() =>{

    const rgExp = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2-8}])?/g;
    if (rgExp.test(_email)) { 
      setWarrning(false) 
    } else if(_email ==null ) {
      setWarrning(false)
      setDisabled(true)
    } else if (!rgExp.test(_email) && _email !== "") {
      setWarrning(true)
      setErrMessage("Invalid Email ID");
      setDisabled(true)
    }
    },[_email])

  useEffect(() => {
    const regEx = /[0-9a-zA-Z]{8,}$/g;
    if (regEx.test(_password)) {
      setWarrning(false)
      setDisabled(false)
     } else if(_password === undefined ) {
      setWarrning(false)
      setDisabled(true)
    } else if (!regEx.test(_password) && _password !== "") {
      setWarrning(true)
      setErrMessage("Password atlest should be 8 charecter long");
      setDisabled(true)
    }
  }, [_password])
  

  return (
    <div className='text-white text-lg flex flex-col justify-center items-center'>
      <div className='w-80 h-20 flex justify-center items-center'>
      <label className=' text-2xl '>Welcome To Erium Wallet</label>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <input type="email" className='align-middle border-2 border-[#89CDB3] rounded-lg bg-transparent p-4 placeholder-[#89cdb36b] m-2 w-80 h-14' name="accountName" placeholder='Email ID' onChange={ (e) => setEmail(e.target.value)} />
      <input type="password" className='align-middle border-2 border-[#89CDB3] rounded-lg bg-transparent p-4 placeholder-[#89cdb36b] m-2 w-80 h-14' autoComplete='off' name="accountName" placeholder='Password'  onChange={ (e) => setPassword(e.target.value)}/>
      </div>
      <div className=' flex flex-col justify-center items-center py-10'>
      {
        _warrning === true ?<div className=' flex flex-row justify-start items-center w-80 min-h-14 border-[1px] bg-yellow-200 bg-opacity-20 p-2 mb-5 border-yellow-300 rounded-md'>
      <MdOutlineError className='text-base text-yellow-500'/>
        <label className='text-xs text-yellow-300 ml-2 '>{errMessage}</label>
        </div>: ""
        }
        {
          result === 'success' ? <div className=' flex flex-row justify-start items-center w-80 min-h-14 border-[1px] bg-blue-200 bg-opacity-20 p-2 mb-5 border-blue-300 rounded-md'>
          <MdOutlineError className='text-base text-blue-500'/>
          <div className='flex flex-col justify-center items-start text-xs text-blue-300 ml-2 '>Loged in Successfully</div>
          </div> : ""
        }
      <button disabled={_disabled} className='text-white w-36 mb-5 h-14 bg-[#89CDB3] border-2 border-[#89CDB3] hover:bg-opacity-20 hover:text-[#89CDB3] rounded-full disabled:bg-opacity-20 disabled:text-gray-400 disabled:border-gray-400' onClick={() =>onLogin()}>Login</button>
      <label className='text-base text-white'>Doesn't have account? <Link className='text-blue-500 hover:underline' to={'/CreateNewAccount'} >Create new account</Link></label>
      </div>
    </div>
  )}

export default Login