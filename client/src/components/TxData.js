/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useEffect } from "react";
import AppContext from "../AppContext";
import { BsArrowUpRightCircle, BsArrowDownLeftCircle } from "react-icons/bs";
const TxData = () => {
  const { txData, getTxData, _address } = useContext(AppContext);
  useEffect(() => {
    getTxData()
  }, []);

  return (
    <div className="text-white ">
      {/*  <label className='text-base mt-5 text-gray-300 '>No Activity Yet...!</label> */}
      {
        txData?
        txData.map((element ,index) => {
       return(
        element.transactions.from === _address.toLowerCase()? 
       <div className="w-80 h-16 mb-2 border-2 border-gray-400 rounded-lg px-3 gap-8 flex flex-row justify-start items-center" key={index}>
          <BsArrowUpRightCircle className="w-8 h-8 text-blue-500 " />
          <div className="flex flex-col justify-center items-start">
            <label className="text-lg">Send</label>
            <p className="flex flex-row text-sm text-blue-500 ">
              To :
              <p className="w-40 text-gray-300 truncate">
                {" "}
                {element.transactions.to}
              </p>
            </p>
          </div>
        </div>
        :element.transactions.to === _address.toLowerCase()?
        <div className="w-80 h-16 mb-2 border-2 border-gray-400 rounded-lg px-3 gap-8 flex flex-row justify-start items-center" key={index}>
        <BsArrowDownLeftCircle className="w-8 h-8 text-green-500 " />
        <div className="flex flex-col justify-center items-start">
          <label className="text-lg">Recive</label>
          <p className="flex flex-row text-sm text-green-500 ">
            From :
            <p className="w-40 text-gray-300 truncate">
              {element.transactions.from}
            </p>
          </p>
        </div>
      </div>
      :<div></div>
        )
        })
      : <label className='text-base mt-5 text-gray-300 '>No Activity Yet...!</label>
    }

    </div>
  );
};

export default TxData;
