/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { processChartData } from "./ProcessData";
import { BASE_URL, WS_URL } from "./Constants";
const w = new WebSocket(WS_URL);


export const getCandlesData = async (timeFrame: string, selectedCoin: string)=> {
  try {
    const { data } = await axios.get(`${BASE_URL}candles/trade:${timeFrame}:${selectedCoin}/hist?limit=999`);
    console.log("api data", data);
   const response= processChartData(data);
    return { name: "candleData", data: [...response] }; 
  } catch (e) {
    console.log(e)
  }
}

export const getSymbollsData = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}tickers?symbols=ALL`);
    return data
  } catch (e: any) {
    console.log(e.message);
  }
};



//get order book data based on selectedCoin from websocket
export const getOrderBookData=(selectedCoin:string)=>{
  const msg = JSON.stringify({ 
            event: 'subscribe', 
            channel: 'book',
            symbol: selectedCoin 
          })
        w.onopen = ():void => {
                w.send(msg);
            };
            w.onmessage=(a: MessageEvent<string>):void=>{
              const orderBookArray=JSON.parse(a.data);
              console.log(orderBookArray);
              return orderBookArray;
 
              }
}
