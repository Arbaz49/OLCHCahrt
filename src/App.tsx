import React from "react";
import "./App.css";
import { useState } from "react";
import { Initial_SelectedCoin, Initial_TimeFrame } from "./utils/Constants";
import { Route, Routes } from "react-router-dom";
import OrderBookPage from "./pages/OrderBookPage";
import ChartPage from "./pages/ChartPage";

const Home: React.FC = () => {
  const [timeFrame, setTimeFrame] = useState<string>(Initial_TimeFrame);
  const [selectedCoin, setSelectedCoin] =
    useState<string>(Initial_SelectedCoin);
  return (
    <>
      <Routes>
        <Route
          path="/"
          Component={() => (
            <>
              <ChartPage
                timeFrame={timeFrame}
                selectedCoin={selectedCoin}
                setTimeFrame={setTimeFrame}
                setSelectedCoin={setSelectedCoin}
              />
            </>
          )}
        />
        <Route
          path="/orderbook"
          Component={() => (
            <OrderBookPage
              selectedCoin={selectedCoin}
              setSelectedCoin={setSelectedCoin}
            />
          )}
        />
      </Routes>
    </>
  );
};
export default Home;
