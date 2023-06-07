import React from "react";
import "./App.css";
import Chart from "./components/Chart";
import SymbolList from "./components/SymbolList";
import { useState } from "react";
import { Initial_SelectedCoin, Initial_TimeFrame } from "./utils/Constants";
import OrderBookTable from "./components/OrderBookTable";
import ChartContainer from "./components/ChartContainer";
import Loader from "./components/Loader";

const App: React.FC = () => {
  const [timeFrame, setTimeFrame] = useState<string>(Initial_TimeFrame);
  const [selectedCoin, setSelectedCoin] =
    useState<string>(Initial_SelectedCoin);
    const [loading,setLoading]=useState<boolean>(false)
    
  return (
    <>
      <div className="container">
      <SymbolList
          timeFrame={timeFrame}
          selectedCoin={selectedCoin}
          setTimeFrame={setTimeFrame}
          setSelectedCoin={setSelectedCoin}
          />
    {
      loading ? (<Loader/>):(
        <>
        <ChartContainer
        setloading={setLoading}
        timeFrame={timeFrame}
        selectedCoin={selectedCoin}
        setTimeFrame={setTimeFrame}
        setSelectedCoin={setSelectedCoin}/>
   
    
        </>
      )
    }
    {/* <Loader/> */}
  
      </div>
    </>
  );
};
export default App;
