/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from "react";
import { json } from "react-router-dom";
import Web3 from "web3";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {


    const [privateKey, setPrivateKey] = useState('')
    const [fileContents, setFileContents] = useState('')
    const [account, setAccount] = useState()
    const [_email, setEmail] = useState()
    const [storageLength ,setStorageLength] = useState()
    const [result, setResult] = useState('')
    const [_password, setPassword] = useState()
    const [data, setData] = useState()
    const [_address, setAddress] = useState()
    const web3 = new Web3(new Web3.providers.HttpProvider('http://99.80.123.81:8545'));


     const setToWallet =  (account) =>{
         // Define the key-value pair you want to add to local storage
        const key = account.address;
        const value = JSON.stringify(account);

        // Check if the key exists in local storage
        if (!localStorage.getItem(key)) {
          // If it doesn't exist, add it to local storage
          localStorage.setItem(key, value);
          console.log(key + ' added to local storage');
        } else {
          // If it does exist, log a message to the console
          console.log(key + ' already exists in local storage');
        }
     }
    
    
    const getAccoountByPrivateKey = async () => {
        
      console.log(privateKey)
        const account = await web3.eth.accounts.wallet.add(privateKey);
        setToWallet(account)
        
        setAccount(account)

        setStorageLength(localStorage.length)

        // const jsonData = await web3.eth.accounts.wallet.encrypt('123456789');
        // console.log((jsonData[0]))

        // const data = JSON.stringify(jsonData[0])
        // const blob = new Blob([data], { type: 'application/json' })
        // const url = URL.createObjectURL(blob)
        // const link = document.createElement('a')
        // link.href = url
        // link.download = 'myFile.json'
        // document.body.appendChild(link)
        // link.click()
        // document.body.removeChild(link)

    }

    const getAccoountByEncreptedKey = async () => {
        try {
            console.log(fileContents)
        const jsonData = await web3.eth.accounts.wallet.decrypt([fileContents], '123456789');
        console.log(jsonData.length)
        for(let i=0; i<jsonData.length; i++){
            // console.log(jsonData[i])
            setToWallet(jsonData[i])
            setStorageLength(localStorage.length)
        }
        // const account = await web3.eth.accounts.wallet.add(jsonData[0].privateKey);
        // console.log(account)
        } catch (error) {
          console.error(error);
        }
      };


    const value = {
        privateKey, 
        setPrivateKey,
        fileContents, 
        setFileContents,
        account,
        setAccount,
        getAccoountByPrivateKey,
        getAccoountByEncreptedKey,
        _email, 
        setEmail,
        _password, setPassword,
        data, setData,
        result, setResult,
        storageLength ,setStorageLength,
        _address, setAddress,
     };

  return (
    <AppContext.Provider value={value}> {children} </AppContext.Provider>
  );
};

export default AppContext;