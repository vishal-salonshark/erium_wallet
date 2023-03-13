import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import AppContext from '../AppContext'
const TxRecipt = () => {
    const {txRecipt} = useContext(AppContext)
    const navigate = useNavigate()
    return (
        <div className="">
            <h2 className='my-3 mx-2 font-bold '> Transaction Recipt </h2>
          <div className="w-80 h-[19.5rem] p-3  shadow-[#66647e] shadow-md rounded-3xl text-white text-xs overflow-y-auto scrollbar-none">
              {txRecipt ? Object.entries(txRecipt).map(([key, value]) => (
                key !== "logs" && key !== "logsBloom" && key !== "status" && value !== null && (
                    <div className="w-72 h-12  flex justify-start items-center gap-2" key={key}>   
                        <div className='w-40 h-10 flex justify-start items-center text-sm text-white'>{key} :</div>
                        <div className='w-44 h-10  truncate flex justify-start items-center text-xs text-blue-500'> {value}</div>
                    </div>
                )
              )): <div></div>}
          </div>

          <div className=' my-8 flex justify-center items-center'>
          <button className='w-28 h-10 bg-[#89CDB3] font-bold hover:bg-opacity-20 hover:text-[#89CDB3] border-2 border-[#89CDB3] rounded-full' onClick={()=> navigate("/Erium")}> Ok </button>
          </div>
        </div>
      );
    };


export default TxRecipt