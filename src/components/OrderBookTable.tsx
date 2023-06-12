/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react/jsx-no-comment-textnodes */
// /* eslint-disable react/react-in-jsx-scope */
// // import React,{useEffect} from 'react';
// // <<<<<<< HEAD

// import { OrderProps } from "../types/DataType";
// import { useEffect} from "react";
// import { WS_URL } from "../utils/Constants";
// import {
//   // asksArray,
//   asksMap,
//   // bidsArray,
//   bidsMap,
//   updateMap,
// } from "../utils/OrderBookservice";
// const w = new WebSocket(WS_URL);

// export default function OrderBookTable({ selectedCoin }: OrderProps) {
//   // const bidsMap=new Map<number,[number,number,number]>()

//   // const [asksData, setAsksData] = useState<any[]>([]);

//   useEffect(() => {
//     const msg = JSON.stringify({
//       event: "subscribe",
//       channel: "book",
//       symbol: selectedCoin,
//     });
//     w.onopen = (): void => {
//       w.send(msg);
//     };
//     w.onmessage = (a: MessageEvent<string>): void => {
//       const _array = JSON.parse(a.data);
//       // console.log('socketArray',_array);
//       if (Array.isArray(_array) && _array[1] !== "hb") {
//         updateMap(_array[1]);
//       }
//     };
//   }, []);
//   // console.log("asksdata", asksMap);
//   // console.log("bidsarray", bidsArray);
//   return (

//     <>
//     {/* <button>Back To Home</button> */}
//       <div style={{ display: "flex",width:"40vw",margin:"auto" }}>
//         <table border={0} style={{padding:"10px"}}>
//           <tr style={{ backgroundColor: "aqua" }}>
//             <td>Count</td>
//             <td>Amount</td>
//             <td>Total</td>
//             <td>price</td>
//           </tr>

//           {[...bidsMap].reverse().slice(1, 21).map(([key,value], index) => {
//             return (
//               <>
//                 {index > 0 && (
//                   <tr>
//                     <td>{value[0]}</td>
//                     <td>{value[1]}</td>
//                     <td>{value[2]}</td>
//                     <td>{value[3]}</td>
//                   </tr>
//                 )}
//               </>
//             );
//           })}
//         </table>
//         {/* <table border={0}style={{}}>
//           <tr style={{ backgroundColor: "aqua" }}>
//             <td>price</td>
//             <td>Total</td>
//             <td>Amount</td>
//             <td>Count</td>
//           </tr>

//           {asksArray.slice(1, 21).map((ele:any, index) => {
//             return (
//               <>
//                 {index > 0 && (
//                   <tr>
//                     <td>{ele[3]}</td>
//                     <td>{ele[2]}</td>
//                     <td>{ele[1]}</td>
//                     <td>{ele[0]}</td>
//                   </tr>
//                 )}
//               </>
//             );
//           })}
//         </table> */}
//       </div>
//     </>

//   )}

import React, { useEffect, useState } from "react";
import {
  Index_Of_Amount,
  Index_Of_Count,
  Index_Of_Price,
  Index_Of_Total,
  OrderProps,
} from "../types/DataType";
import { WS_URL } from "../utils/Constants";
import { updateMap } from "../utils/OrderBookservice";
import { useParams } from "react-router-dom";
// import { bidsMap, updateMap } from "../utils/OrderBookservice";

const w = new WebSocket(WS_URL);

export default function OrderBookTable({ selectedCoin }: OrderProps) {
  // const [asksData, setAsksData] = useState<any[]>([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const bidsMap = new Map<number, [number, number, number, number]>();
  const asksMap = new Map<number, [number, number, number, number]>();
  const [bidsMapData, setBidsMapData] = useState<Map<number, [number, number, number, number]>>(bidsMap);
  const [bidstest, setbidsTest] = useState<any[]>([]);
const {coinid}=useParams();

  
  const [wsEvent, setWsEvent] = useState("subscribe");
  const [chanId, setChanId] = useState(0);
  const [wsMessage, setWsMessage] = useState({
    event: wsEvent,
    channel: "book",
    symbol: coinid,
    chanId: chanId,
  });
  useEffect(() => {
    const msg = JSON.stringify(wsMessage);
    w.onopen = (): void => {
      w.send(msg);
    };
    w.onmessage = (a: MessageEvent<string>): void => {
      const _array = JSON.parse(a.data);
      setChanId(_array[0]);
      if (Array.isArray(_array) && _array[1] !== "hb") {
        updateMap(_array[1], asksMap, bidsMap);
      }
      setbidsTest([...bidstest, ...bidsMap]);
    };
w.onclose=()=>{
  w.close();
}

  }, [asksMap, bidsMap, coinid,selectedCoin]);
  console.log("bidsmapkeys", [...bidstest]);
  return (
    <>
      <div style={{ display: "flex", width: "40vw", margin: "auto" }}>
        <table className="Mytable" border={0} style={{ padding: "10px" }}>
          <tr style={{ backgroundColor: "aqua" }}>
            <td style={{ height: "30px" }}>Count</td>
            <td style={{ height: "30px" }}>Amount</td>
            <td style={{ height: "30px" }}>Total</td>
            <td style={{ height: "30px" }}>Price</td>
          </tr>
          {[...bidstest]
             .sort(function (a, b) {
              if (a[1][3] === b[1][3]) {
                return 0;
              } else {
                return a[1][3] < b[1][3] ? 1 : -1;
              }
            })
            .slice(1, 21)
            .map(([key, value], index) => (
              <tr key={key + index}>
                <td>{value[Index_Of_Count]}</td>
                <td>{value[Index_Of_Amount]}</td>
                <td>{value[Index_Of_Total]}</td>
                <td>{value[Index_Of_Price]}</td>
              </tr>
            ))}
        </table>
        <table className="Mytable" border={0} style={{}}>
          <tr style={{ backgroundColor: "aqua" }}>
            <td>Price</td>
            <td>Total</td>
            <td>Amount</td>
            <td>Count</td>
          </tr>
          {[...bidstest]
            .sort(function (a, b) {
              if (a[1][3] === b[1][3]) {
                return 0;
              } else {
                return a[1][3] < b[1][3] ? -1 : 1;
              }
            })
            .slice(1, 21)
            .map(([key, value], index) => (
              <tr key={key + index}>
                <td>{value[Index_Of_Price]}</td>
                <td>{value[Index_Of_Total]}</td>
                <td>{value[Index_Of_Amount]}</td>
                <td>{value[Index_Of_Count]}</td>
              </tr>
            ))}
        </table>
      </div>
      {/* to close ws connection */}
      <button onClick={() => w.close()}>close connection</button>
    </>
  );
}
