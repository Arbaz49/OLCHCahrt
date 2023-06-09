/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/react-in-jsx-scope */
// import React,{useEffect} from 'react';
<<<<<<< HEAD

import { OrderProps } from "../types/DataType";
import { useEffect} from "react";
import { WS_URL } from "../utils/Constants";
import {
  asksArray,
  asksMap,
  bidsArray,
  updateMap,
} from "../utils/OrderBookservice";
// import { getOrderBookData } from '../utils/Services';
const w = new WebSocket(WS_URL);

export default function OrderBookTable({ selectedCoin }: OrderProps) {
  // const bidsMap=new Map<number,[number,number,number]>()

  // const [asksData, setAsksData] = useState<any[]>([]);

  useEffect(() => {
    const msg = JSON.stringify({
      event: "subscribe",
      channel: "book",
      symbol: selectedCoin,
    });
    w.onopen = (): void => {
      w.send(msg);
    };
    w.onmessage = (a: MessageEvent<string>): void => {
      const _array = JSON.parse(a.data);
      // console.log('socketArray',_array);
      if (Array.isArray(_array) && _array[1] !== "hb") {
        updateMap(_array[1]);
      }
    };
  }, [bidsArray,asksArray]);
  console.log("asksdata", asksMap);
  console.log("bidsarray", bidsArray);
  return (
  
    <>
    {/* <button>Back To Home</button> */}
      <div style={{ display: "flex",width:"40vw",margin:"auto" }}>
        <table border={0} style={{padding:"10px"}}>
          <tr style={{ backgroundColor: "aqua" }}>
            <td>Count</td>
            <td>Amount</td>
            <td>Total</td>
            <td>price</td>
          </tr> 

          {bidsArray.reverse().slice(1, 21).map((ele:any, index) => {
            return (
              <>
                {index > 0 && (
                  <tr>
                    <td>{ele[0]}</td>
                    <td>{ele[1]}</td>
                    <td>{ele[2]}</td>
                    <td>{ele[3]}</td>
                  </tr>
                )}
              </>
            );
          })}
        </table>
        <table border={0}style={{}}>
          <tr style={{ backgroundColor: "aqua" }}>
            <td>price</td>
            <td>Total</td>
            <td>Amount</td>
            <td>Count</td>
          </tr>

          {asksArray.slice(1, 21).map((ele:any, index) => {
            return (
              <>
                {index > 0 && (
                  <tr>
                    <td>{ele[3]}</td>
                    <td>{ele[2]}</td>
                    <td>{ele[1]}</td>
                    <td>{ele[0]}</td>
                  </tr>
                )}
              </>
            );
          })}
        </table>
      </div>
    </>
=======
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { OrderProps } from '../types/DataType';
import { useEffect, useState } from 'react';
import { WS_URL } from '../utils/Constants';
import { bidsMap, updateBookMap } from '../utils/OrderBookServices';
// import { getOrderBookData } from '../utils/Services';
const w = new WebSocket(WS_URL);

export default function OrderBookTable({selectedCoin}:OrderProps) {
  
// const bidsMap: Map<number, [number, number, number, number]> = new Map();
// const asksMap: Map<number, [number, number, number, number]> = new Map();
  const [bookData,setBookData] = useState (bidsMap)
  console.log("keys",Object.entries(bookData))
  useEffect(()=>{
      let msg = JSON.stringify({ 
          event: 'subscribe', 
          channel: 'book',
          symbol: selectedCoin 
        })
      w.onopen = ():void => {
              w.send(msg);
          };
          w.onmessage=(a: MessageEvent<string>):void=>{
            const _array=JSON.parse(a.data);
            console.log("socketArray",_array);
  if(Array.isArray(_array) && _array[1]!=="hb" ){
    updateBookMap(_array[1]);


  }
  // console.log("entries",Object.entries(askBidsMap)[0])
  // setBookData({...askBidsMap})
  console.log("mybidsMap",Object.entries(bookData))
  // console.log("obj",askBidsMap)
            }
             },[])
  return (
    <>
    {/* <TableContainer component={Paper} sx={{}}  style={{width:"900px",margin:"auto",overflowX:"hidden",height
    :"800px",textAlign:"center"}}>
      <Table  size={"small"} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='cell' >Count</TableCell>
            <TableCell className='cell' >Amount</TableCell>
            <TableCell className='cell' >Total</TableCell>
            <TableCell className='cell' >Price</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(bookData).reverse().slice(0,21).map((order:any,index) => {
            console.log("order",order)
            return(
              <TableRow
              // key={order[0]}
              key={index}
              >
              <TableCell className='cell' align="left">{order[1][1]}</TableCell>
              <TableCell className='cell' align="left">{order[1][2]}</TableCell>
              <TableCell className='cell' align="left">{index===0?order[1][2]:order[1][2] }</TableCell>
              <TableCell className='cell' align='left'>
                {order[1][0]}
              </TableCell>


            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer> */}


    <table border={0} style={{border:"1px solid red"}}>
    <tr style={{backgroundColor:"aqua"}} >
      <th style={{padding:"10px"}}>Count</th>
      <th style={{padding:"10px"}}>Amount</th>
      <th style={{padding:"10px"}}>Total</th>
      <th style={{padding:"10px"}}>Price</th>

    </tr>
    {
      Object.entries(bidsMap).map((ele)=>{
        alert(ele)
        return(
          <tr>
          <td>January</td>
          <td>$100</td>
          <td>$100</td>
          <td>$100</td>

        </tr>
        )
      })
    }
 
  
  </table>
          </>
>>>>>>> 66c181701b327a31d959d1f5c9fc6cfa3e5cd5ca
  );
}
