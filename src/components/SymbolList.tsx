import React, { useEffect, useState } from 'react'
import { getSymbollsData } from '../utils/services';
import CoinsTable from './CoinsTable';

interface IProps {
  timeFrame : string;
  selectedCoin : string;
  setTimeFrame :  React.Dispatch<React.SetStateAction<string>>; 
  setSelectedCoin :  React.Dispatch<React.SetStateAction<string>>; 
}

const SymbollsList = (props : IProps) => {
  const [coinsList, setCoinsList] = useState<unknown[]>([]);
  
  useEffect(()=>{
    (async()=>{
const data=await    getSymbollsData()
setCoinsList(data);
    })()
  },[])

  return (
    <div>
      SymbollsList Component
      <div>
      selected :{props.selectedCoin}
      </div>
      <CoinsTable setselcetedCoin={props.setSelectedCoin} data={coinsList}/>
   
    </div>
  )
}

export default SymbollsList
