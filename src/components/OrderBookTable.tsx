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
import { OrderProps } from "../types/DataType";
import { WS_URL } from "../utils/Constants";
import {  asksMap, bidsMap, updateMap } from "../utils/OrderBookservice";
import Header from "./Header";

const w = new WebSocket(WS_URL);

export default function OrderBookTable({ selectedCoin }: OrderProps) {
  const [asksData, setAsksData] = useState<any[]>([]);

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
      if (Array.isArray(_array) && _array[1] !== "hb") {
        updateMap(_array[1]);
        // setAsksData([...asksArray]);
      }
    };
  }, []);

  return (
    <>
      <button onClick={() => console.log("Back to Home")}>Back To Home</button>
      <div style={{ display: "flex", width: "40vw", margin: "auto" }}>
        <table border={0} style={{ padding: "10px" }}>
          <tr style={{ backgroundColor: "aqua" }}>
            <td>Count</td>
            <td>Amount</td>
            <td>Total</td>
            <td>Price</td>
          </tr>
          {[...bidsMap].reverse().slice(1, 21).map(([key, value], index) => (
            <tr key={key}>
              <td>{value[0]}</td>
              <td>{value[1]}</td>
              <td>{value[2]}</td>
              <td>{value[3]}</td>
            </tr>
          ))}
        </table>
        <table border={0} style={{}}>
          <tr style={{ backgroundColor: "aqua" }}>
            <td>Price</td>
            <td>Total</td>
            <td>Amount</td>
            <td>Count</td>
          </tr>
          {[...bidsMap].reverse().slice(1, 21).map(([key, value], index) => (
            <tr key={key}>
              <td>{value[0]}</td>
              <td>{value[1]}</td>
              <td>{value[2]}</td>
              <td>{value[3]}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
