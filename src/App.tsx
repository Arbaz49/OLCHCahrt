import React from 'react'
import "./App.css"
import Chart from './components/Chart';
import SymbolList from './components/SymbolList';
import { useState } from 'react';
// import { InitialSelectedCoin, InitialTimeFrame } from './utils/Constants';
import OrderBook from './components/OrderBook';
import { InitialSelectedCoin, InitialTimeFrame } from './utils/constants';
const App: React.FC = () => {

  const [timeFrame, setTimeFrame] = useState<string>(InitialTimeFrame);
  const [selectedCoin, setSelectedCoin] = useState<string>(InitialSelectedCoin);

 
  return (
    <>
      <div className="container">
        <SymbolList timeFrame={timeFrame} selectedCoin={selectedCoin} setTimeFrame={setTimeFrame} setSelectedCoin={setSelectedCoin}
        />
        <Chart
        timeFrame={timeFrame} selectedCoin={selectedCoin} setTimeFrame={setTimeFrame} setSelectedCoin={setSelectedCoin}
        />
      </div>
        <OrderBook selectedCoin={selectedCoin}/>
    </>
  );
}

export default App




