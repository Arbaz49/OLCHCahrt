import React, { useEffect } from 'react'
import OrderBookTable from './OrderBookTable';
// const ws = require('ws')
// import ws from 'ws';
const w = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
interface IProps{
    selectedCoin:string
}
const OrderBook = ({selectedCoin}:IProps) => {
    // useEffect(()=>{
    //     let msg = JSON.stringify({ 
    //         event: 'subscribe', 
    //         channel: 'book', 
    //         symbol: 'tBTCUSD' 
    //       })
    //     w.onopen = () => {
    //             w.send(msg);
    //         };
    //         w.onmessage=(a:{})=>{
    //             console.log("socket data",a)
    // }},[])
  return (
    <div style={{textAlign:"center"}}>
      OrderBook
      <div>
        selected : {selectedCoin}
      </div>
      <OrderBookTable/>
    </div>
  )
}

export default OrderBook
