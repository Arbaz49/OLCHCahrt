import React, { useEffect, useState } from "react";
import {
  Index_Of_Amount,
  Index_Of_Count,
  Index_Of_Price,
  Index_Of_Total,
  OrderProps,
} from "../types/DataType";
// import { WS_URL } from "../utils/Constants";
import {
  asksMap,
  bidsMap,
  calculateTotal,
  updateMap,
} from "../utils/OrderBookservice";
import { useParams } from "react-router-dom";
import { w } from "./CoinsTable";

// const w = new WebSocket(WS_URL);

export default function OrderBookTable({ selectedCoin ,setChanId}: OrderProps) {
  const [bidsTableData, setBidsTableData] = useState<any[]>([]);
  const [asksTableData, setAsksTableData] = useState<any[]>([]);
  const { coinid } = useParams();
// const handleWsMessage=(coinid:string|undefined,chanId:number)=>{
//   w.send(JSON.stringify({
//     event:"unsubscribe",
//     channel:"book",
//     symbol:coinid,
//     chanId:chanId
//   }));
//   w.send(JSON.stringify({
//     event:"subscribe",
//     channel:"book",
//     symbol:coinid,
//     chanId:0
//   }));
// asksMap.clear();
// bidsMap.clear();

// }
  // const [wsEvent, setWsEvent] = useState("subscribe");
  const [chanId] = useState(0);
  const [wsMessage] = useState({
    event: "subscribe",
    channel: "book",
    symbol: selectedCoin,
    chanId: chanId,
  });
  useEffect(()=>{
// alert(selectedCoin)
asksMap.clear();
bidsMap.clear();
  },[selectedCoin]);


  useEffect(() => {
    const msg = JSON.stringify(wsMessage);
    w.onopen = (): void => {
      w.send(msg);
    };
    w.onmessage = (a: MessageEvent<string>):void=> {
     
      const _array = JSON.parse(a.data);
      setChanId(_array[0]);
      // getChanID(_array[0])
      if (Array.isArray(_array) && _array[1] !== "hb") {
        updateMap(_array[1], asksMap, bidsMap);
       setBidsTableData([...bidsTableData, ...bidsMap]);
       setAsksTableData([...asksTableData, ...asksMap]);
      }
    };
  }, [asksMap, bidsMap, coinid, selectedCoin]);
  const bids = [...bidsTableData];
  const asks = [...asksTableData];
  return (
    <>

      <div style={{ display: "flex", width: "40vw", margin: "auto" }}>
        {/* bids table */}
        <table className="Mytable" border={0} style={{ padding: "5px" }}>
          <tr style={{ backgroundColor: "aqua" }}>
            <td style={{ height: "30px" }}>Count</td>
            <td style={{ height: "30px" }}>Amount</td>
            <td style={{ height: "30px" }}>Total</td>
            <td style={{ height: "30px" }}>Price</td>
          </tr>
          {[...bidsTableData]
            .sort((currentRow, nextRow)=>{
              if (currentRow[1][Index_Of_Price] === nextRow[1][Index_Of_Price]) return 0;
              else return currentRow[1][3] < nextRow[1][3] ? 1 : -1})
            .slice(1, 21)
            .map(([key, value], index) => {
              return (
                <tr key={key + index} style={{}}>
                  <td>{value[Index_Of_Count]}</td>
                  <td>{value[Index_Of_Amount].toFixed(3)}</td>
                  <td>
                    {calculateTotal(
                      index,
                      bids.sort(function (a, b) {
                        if (a[1][3] === b[1][3]) return 0;
                        else return a[1][3] < b[1][3] ? 1 : -1;
                      }),
                      value,
                      "bids"
                    )}
                    {value[Index_Of_Total].toFixed(3)}
                  </td>
                  <td>{value[Index_Of_Price]}</td>
                </tr>
              );
            })}
        </table>

        {/* asks table */}
        <table className="Mytable" border={0} style={{ padding: "10px" }}>
          <tr style={{ backgroundColor: "aqua" }}>
            <td style={{ height: "30px" }}>Price</td>
            <td style={{ height: "30px" }}>Total</td>
            <td style={{ height: "30px" }}>Amount</td>
            <td style={{ height: "30px" }}>Count</td>
          </tr>
          {[...asksTableData]
            .sort(function (currentRow, nextRow) {
              if (currentRow[1][3] === nextRow[1][3]) return 0;
               else  return currentRow[1][3] < nextRow[1][3] ? -1 : 1})
            .slice(1, 21)
            .map(([key, value], index) => (
              <tr key={key + index}>
                <td style={{ width: "300px" }}>{value[Index_Of_Price]}</td>
                <td>
                  {calculateTotal(
                    index,
                    asks.sort(function (a, b) {
                      if (a[1][3] === b[1][3]) {
                        return 0;
                      } else {
                        return a[1][3] < b[1][3] ? -1 : 1;
                      }
                    }),
                    value,
                    "asks"
                  )}
                  {value[Index_Of_Total].toFixed(3)}{" "}
                </td>
                <td>{value[Index_Of_Amount].toFixed(3)}</td>
                <td>{value[Index_Of_Count]}</td>
              </tr>
            ))}
        </table>
      </div>
    </>
  );
}
