// import React,{useEffect} from 'react';
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
// import { getOrderBookData } from '../utils/Services';
const w = new WebSocket(WS_URL);

export default function OrderBookTable({selectedCoin}:OrderProps) {
  // let bookDataMap=new Map<number,[number,number,number]>();
  const [bookData,setBookData] = useState ({})
  console.log("keys",Object.entries(bookData))
  let askBidsMap:any={}
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
    if(_array[1][2] > 0){

      askBidsMap[_array[1][0]]=_array[1];
    }
  //  obj= {...obj,obj[_array[1][0]]:_array[1]}
  // console.log("socket1",_array[1])

  }
  console.log("entries",Object.entries(askBidsMap)[0])
  setBookData({...askBidsMap})
  console.log("obj",askBidsMap)
            }
             },[])
  return (
    <TableContainer component={Paper} sx={{}}  style={{width:"900px",margin:"auto",overflowX:"hidden",height
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

      <table>

  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
    </TableContainer>
  );
}
