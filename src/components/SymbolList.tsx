import React, { useEffect, useState } from 'react'
import { getSymbollsData } from '../utils/services';
import CoinsTable from './CoinsTable';
import { CoinsType, IProps } from '../types/dataType';


const SymbollsList = (props : IProps) => {
  const [coinsList, setCoinsList] = useState<CoinsType[]>([["",0,0,0,0,0,0,0,0,0,0]]);
  
  useEffect(()=>{
 getSymbollsData(setCoinsList);
  },[])
  return (
    <div>
      <h2>
      SymbolsList Component
      </h2>
      <div>
        <h4>
      Selected :{props.selectedCoin}
        </h4>
      </div>
      <CoinsTable setselcetedCoin={props.setSelectedCoin} data={coinsList}/>
   
    </div>
  )
}

export default SymbollsList
