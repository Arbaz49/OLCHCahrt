import axios from "axios"
import { BASE_URL } from "./Constants";
import { processChartData } from "./ProcessData";
import { CoinsType, NewType } from "../types/dataType";






export const getCandlesData = async (timeFrame: string, selecetedCoin: string,setApiData:React.Dispatch<React.SetStateAction<NewType>>) => {
  try {
    const { data } = await axios.get(`${BASE_URL}candles/trade:${timeFrame}:${selecetedCoin}/hist?limit=330`);
    console.log("api data", data);
   const a= processChartData(data);
      setApiData ({ name: "candleData", data: [...a] }); 
  } catch (e) {
    console.log(e)
  }

}

export const getSymbollsData = async (setCoinsList: React.Dispatch<React.SetStateAction<CoinsType[]>>) => {
  try {
    const { data } = await axios.get(`${BASE_URL}tickers?symbols=ALL`);
    setCoinsList(data)
  } catch (e: any) {
    console.log(e.message);
  }
};

// export { getCandlesData, getSymbollsData }