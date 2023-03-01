import React, {createContext, useState, useEffect} from 'react'
import Web3 from 'web3'

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    var web3 = new Web3(new Web3.providers.HttpProvider('http://99.80.123.81:8545'));

    const [account,setAccount] = useState('')
    const [balance,setBalance] = useState('')
    const [menu, setMenu] =useState ('Assets')

        const getWallet = async () => {
            const wallet = await web3.eth.accounts.wallet
            if(wallet.wallet == null){

                web3.eth.accounts.wallet.add('e0154ad5a34d80375e5d602c89db8b2a5c1aa165c9e12c4a9675c8b50b8adb5b');

            }
            // console.log(wallet.length)
            // for(var i = 0; i<= wallet.length ;i++ ){
            //     console.log(wallet[i])
            // }
            
            return wallet
        }

    useEffect(() =>{
        const getBal = async () => {
            const bal = await web3.eth.getBalance(account)
            return( await web3.utils.fromWei(bal, 'ether'))
        }
        getBal().then((e) => {
            setBalance(e)
        })
    }, [account])
    
    return (
        <AppContext.Provider value={{
            account, setAccount, balance, setBalance, getWallet
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
