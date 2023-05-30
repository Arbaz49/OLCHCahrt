import React, { useEffect, useState } from 'react'
import { getSymbollsData } from '../utils/services';
import CoinsTable from './CoinsTable';

const SymbollsList = () => {
  const [coinsList, setCoinsList] = useState<unknown[]>([]);
  const [selcetedCoin,setselcetedCoin]=useState("tBTCUSD")
  useEffect(()=>{
    getSymbollsData().then((data)=>{
        console.log("symbollsdata",data)
        setCoinsList(data);
    })
  },[])

  return (
    <div>
      SymbollsList Component
      <div>
      selected :{selcetedCoin}
      </div>
      <CoinsTable setselcetedCoin={setselcetedCoin} data={coinsList}/>
   
    </div>
  )
}

export default SymbollsList
