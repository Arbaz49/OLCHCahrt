import axios from "axios"






const getCandlesdata = async (timeFrame: string, selecetedCoin: string) => {


  try {
    const { data } = await axios.get(`https://api-pub.bitfinex.com/v2/candles/trade:${timeFrame}:${selecetedCoin}/hist?end=1685511000000&limit=330`);
    console.log("api data", data);
    return data;
  } catch (e:any) {
    console.log(e.message);
  }

}


const getSymbollsData = async () => {
  try {
    const { data } = await axios.get("https://api-pub.bitfinex.com/v2/tickers?symbols=ALL");
    return data;
  } catch (e: any) {
    console.log(e.message);
  }
};




export { getCandlesdata, getSymbollsData }