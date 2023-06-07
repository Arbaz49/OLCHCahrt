import React from 'react'
import OrderBook from '../components/OrderBook'
import { useParams } from 'react-router-dom'
import SymbollsList from '../components/SymbolList'

const OrderBookPage = () => {
  const {coinid}=useParams()
  // alert(coinid);
  return (
    <div>
      <OrderBook selectedCoin={coinid}/>
      
    {/* <SymbollsList 
        timeFrame={timeFrame}
        setTimeFrame={setTimeFrame}
        setSelectedCoin={setSelectedCoin}s
    selectedCoin={coinid}
    /> */}
    </div>
  )
}

export default OrderBookPage
