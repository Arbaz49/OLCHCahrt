import React, { useEffect, useState } from 'react'
import { getSymbollsData } from '../utils/services';
import CoinsTable from './CoinsTable';
import { CoinsType, IProps } from '../types/dataType';


const SymbollsList = (props : IProps) => {
  const [coinsList, setCoinsList] = useState<CoinsType>(["",0,0,0,0,0,0,0,0,0,0]);
  
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
