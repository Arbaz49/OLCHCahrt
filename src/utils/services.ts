import axios from "axios"
import { chartdata } from "../types/dataType";

const getCandlesdata=async(timeFrame:string,selecetedCoin:unknown)=>{
    try{
        const { data } = await axios.get(`https://api-pub.bitfinex.com/v2/candles/trade%3A${timeFrame}%3A${selecetedCoin}/hist`);
        // console.log(data);
        return data;
    }catch(e:any){
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


  const processChartData=(dataArray:any[]):chartdata[]=>{
    let array: chartdata[] = [];
    let entry: chartdata = {};
    for (let i = 0; i < dataArray.length; i++) {
      entry = {
        x: new Date(dataArray[i][0]),
        y: [dataArray[i][1], dataArray[i][2], dataArray[i][3], dataArray[i][4]],
      };
      array.push(entry);
    }
    return array;
  }

  export {getCandlesdata,getSymbollsData,processChartData}