import React from 'react'
import OrderBookTable from './OrderBookTable';

interface IProps{
    selectedCoin:string
}
const OrderBook = ({selectedCoin}:IProps) => {

              return (
    <div style={{textAlign:"center"}}>
      OrderBook
      <div>
        selected : {selectedCoin}
      </div>
      <OrderBookTable selectedCoin={selectedCoin}/>
    </div>
  )
}

export default OrderBook
