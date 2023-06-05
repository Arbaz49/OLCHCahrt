import React from "react";
import "./App.css";
import Chart from "./components/Chart";
import SymbolList from "./components/SymbolList";
import { useState } from "react";
import { Initial_SelectedCoin, Initial_TimeFrame } from "./utils/Constants";

const App: React.FC = () => {
  const [timeFrame, setTimeFrame] = useState<string>(Initial_TimeFrame);
  const [selectedCoin, setSelectedCoin] =
    useState<string>(Initial_SelectedCoin);

  return (
    <>
      <div className="container">
        <SymbolList
          timeFrame={timeFrame}
          selectedCoin={selectedCoin}
          setTimeFrame={setTimeFrame}
          setSelectedCoin={setSelectedCoin}
        />
        <Chart
          timeFrame={timeFrame}
          selectedCoin={selectedCoin}
          setTimeFrame={setTimeFrame}
          setSelectedCoin={setSelectedCoin}
        />
      </div>
    </>
  );
};

export default App;
