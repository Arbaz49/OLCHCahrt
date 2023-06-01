import axios from "axios"
import { BASE_URL } from "./constants";






const getCandlesdata = async (timeFrame: string, selecetedCoin: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}candles/trade:${timeFrame}:${selecetedCoin}/hist?limit=330`);
    console.log("api data", data);
    return data;
  } catch (e:any) {
    console.log(e.message);
  }

}

const getSymbollsData = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}tickers?symbols=ALL`);
    return data;
  } catch (e: any) {
    console.log(e.message);
  }
};

export { getCandlesdata, getSymbollsData }