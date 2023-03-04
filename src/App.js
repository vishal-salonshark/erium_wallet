import React, { useState } from 'react'
import Erium from './components/Erium'
import { BsChevronDown } from 'react-icons/bs'
import MyAccount from './components/MyAccount'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppContextProvider } from './AppContext'
import CreateAccount from './components/CreateAccount'
import ImportAccount from './components/ImportAccount'
import Login from './components/Login'
import CreateNewAccount from './components/CreateNewAccount'
import Home from './components/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/Home',
      element: <Home />,
    },
    {
      path: '/CreateNewAccount',
      element: <CreateNewAccount />,
    },
    {
      path: '/Erium',
      element: <Erium />,
    },
    {
      path: '/CreateAccount',
      element: <CreateAccount />,
    },
    {
      path: '/ImportAccount',
      element: <ImportAccount />,
    },
    {
      path: '',
      element: <MyAccount />,
    },
  ])

  const [showMyAccount, setShowMyAccount] = useState(false)
  const handleOnClose = () => {
    setShowMyAccount(false)
  }

  return (
    <AppContextProvider>
    <React.StrictMode>
      <div className="w-96 h-[37rem] flex flex-col text-white  bg-[#030214] justify-start items-center border-2 border-gray-300 ">
        <div className="h-20 w-full bg-gray-100 flex flex-row justify-between items-center p-2 gap-2">
          <div className="w-10 h-10 flex justify-center items-center rounded-full text-black bg-white text-xs">
            <a href='/'>LOGO</a>
          </div>
          <div className="h-10 flex justify-center items-center ">
            {' '}
            <div className="h-10 flex text-sm text-black font-light justify-center items-center border-[1px] gap-2 px-3 border-gray-400 rounded-full">
              Erium Network <BsChevronDown className="w-3 h-3" />
            </div>{' '}
          </div>
          <div
            className="w-10 h-10 rounded-full border-[2px] border-blue-500 flex justify-center items-center bg-white"
            onClick={() => {
              setShowMyAccount(true)
            }}
          ></div>
          <MyAccount onClose={handleOnClose} visible={showMyAccount} />
        </div>

        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
    </AppContextProvider>
  )
}

export default App
