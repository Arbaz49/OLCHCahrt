/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/react-in-jsx-scope */
// import React,{useEffect} from 'react';

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
  );
}
