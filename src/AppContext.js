/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';
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
    const [ethBalance,setETHBalance] = useState('')
    const [txRecipt, setTxRecipt] = useState()
    const [tokenBalances, setTokenBalances] = useState({})
    const [txData,setTxData] = useState()
    const [showMyAccount, setShowMyAccount] = useState(false)

    const handleMyAccountClick = () => {
      setShowMyAccount(true)
    }
  
    const handleMyAccountClose = () => {
      setShowMyAccount(false)
    }

    // const [showMyAccount, setShowMyAccount] = useState(false)
    
    // const handleOnClose = () => {
    // setShowMyAccount(false)
    // }


    const web3 = new Web3(new Web3.providers.HttpProvider('http://99.80.123.81:8545'));


     const setToWallet =  async (account) =>{
         // Define the key-value pair you want to add to local storage
        const key = account.address;
        const privateKey = account.privateKey
        const value = JSON.stringify(account);
        await web3.eth.accounts.wallet.add(privateKey);
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
    const getTxData = () => {
      axios.get(`http://localhost:3001/tarnsactionsList`).then((response)=>{
        setTxData(response.data)
       })
    }
       
      useEffect(() => {
       console.log(txData)
     }, [txData])
     
     useEffect(() =>{
      if(_address){
        const getBal = async () => {
          const bal = await web3.eth.getBalance(_address)
          return( await web3.utils.fromWei(bal, 'ether'))
      }
      getBal().then((e) => {
        setETHBalance(e)
      })}
     }, [_address])

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
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [{"name":"","type":"string"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [{"name":"","type":"string"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{"name":"","type":"address"}],
            "name": "balanceOf",
            "outputs": [{"name":"","type":"uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];

    useEffect(() => {
      const fetchData = async () => {
        let tokenData = {}
        for (const [token, address] of Object.entries(tokenAddresses)) {
          const contract = new web3.eth.Contract(contractAbi, address)
          const symbol = await contract.methods.symbol().call()
          const balance = await contract.methods.balanceOf(_address).call()
          tokenData[token] = {
            address, // Add address field to the tokenData object
            symbol,
            balance: web3.utils.fromWei(balance, 'ether'),
            
          }
        }
        setTokenBalances(tokenData)
      }
    
      if (_address) {
        console.log(_address)
        fetchData()
      }
    }, [_address])

    // const getTx =async (address)=>{
    //    // Get all pending transactions for the address
    //    const pendingTxs = await web3.eth.getPendingTransactions();
      
    //   console.log(`Found ${pendingTxs.length} pending transactions for ${address}`);
      
    //   // Get all confirmed transactions for the address
    //   const confirmedTxs = [];
      
    //   const blockNumber = await web3.eth.getBlockNumber();
      
    //   for (let i = 0; i <= blockNumber; i++) {
    //     const block = await web3.eth.getBlock(i, true);
      
    //     if (block && block.transactions) {
    //       block.transactions.forEach((tx) => {
    //         if (tx.from.toLowerCase() === address.toLowerCase() || tx.to.toLowerCase() === address.toLowerCase()) {
    //           confirmedTxs.push(tx);
    //         }
    //       });
    //     }
    //   }
      
    //   console.log(`Found ${confirmedTxs.length} confirmed transactions for ${address}`);
    // }

    // useEffect(() => {
    //   if(_address){
    //     getTx(_address)
    //   }
    // },[_address])
    
    const getAccoountByPrivateKey = async () => {
        
      console.log(privateKey)
        const account = await web3.eth.accounts.wallet.add(privateKey);
        setToWallet(account)
        
        setAccount(account)
        
        setAddress(account.address)
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
            setAddress(jsonData[i].address)
            setStorageLength(localStorage.length)
        }
        // const account = await web3.eth.accounts.wallet.add(jsonData[0].privateKey);
        // console.log(account)
        } catch (error) {
          console.error(error);
        }
      };

      const sendTx = async (sendTo, _address, amount, gasPrice, gasLimit) => {
        if (sendTo !== undefined && _address !== undefined) {
          try {
            const fromAddress = _address; // use provided address or fallback to default
            console.log('From:', fromAddress);
            console.log('To:', sendTo);
            console.log('Amount:', amount);
            
            const amountInWei = web3.utils.toWei(amount, 'ether');

            const txObject = {
              from: fromAddress,
              to: sendTo,
              value: amountInWei
            };
      
            if (gasPrice) {
              txObject.gasPrice = gasPrice;
            }
      
            if (gasLimit) {
              txObject.gas = gasLimit;
            }

            const pk = JSON.parse(localStorage.getItem(_address))

            const signedTx = await web3.eth.accounts.signTransaction(txObject, pk.privateKey);
            console.log('Signed Transaction:', signedTx);
      
            const sentTx = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            console.log('Transaction Hash:', sentTx);
            setTxRecipt(sentTx)
            getTxData()
            return sentTx;
          } catch (error) {
            console.error(error);
            throw error; // re-throw error to be handled by caller
          }
        }
      }

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
        sendTx,
        ethBalance,setETHBalance,
        tokenBalances, setTokenBalances,
        txRecipt, setTxRecipt,
        showMyAccount, setShowMyAccount,
        handleMyAccountClick,
        handleMyAccountClose,
        txData, getTxData,
     };

  return (
    <AppContext.Provider value={value}> {children} </AppContext.Provider>
  );
};

export default AppContext;