/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { processChartData } from "./ProcessData";
import { BASE_URL} from "./Constants";
// const w = new WebSocket(WS_URL);


export const getCandlesData = async (timeFrame: string, selectedCoin: string)=> {
  try {
    const { data } = await axios.get(`${BASE_URL}candles/trade:${timeFrame}:${selectedCoin}/hist?limit=999`);
   const response= processChartData(data);
    return { name: "candleData", data: [...response] }; 
  } catch (e) {
    console.log(e)
  }
}

export const getSymbolsData = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}tickers?symbols=ALL`);
    return data
  } catch (e) {
    console.log(e);
  }
};


