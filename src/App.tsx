import React from "react";
import "./App.css";
import SymbolList from "./components/SymbolList";
import { useState } from "react";
import { Initial_SelectedCoin, Initial_TimeFrame } from "./utils/Constants";
import ChartContainer from "./components/ChartContainer";
import { Route, Routes, useNavigate } from "react-router-dom";
import OrderBookPage from "./pages/OrderBookPage";
import Header from "./components/Header";

const Home: React.FC = () => {
  const [timeFrame, setTimeFrame] = useState<string>(Initial_TimeFrame);
  const [selectedCoin, setSelectedCoin] =
    useState<string>(Initial_SelectedCoin);

  const navigate = useNavigate();
  const navigateToOrderPage = () => {
    navigate(`/orderbook/${selectedCoin}`);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="container">
                <SymbolList
                  timeFrame={timeFrame}
                  selectedCoin={selectedCoin}
                  setTimeFrame={setTimeFrame}
                  setSelectedCoin={setSelectedCoin}
                />
                  <ChartContainer
                    timeFrame={timeFrame}
                    selectedCoin={selectedCoin}
                    setTimeFrame={setTimeFrame}
                    setSelectedCoin={setSelectedCoin}
                  />
              </div>
              <button onClick={navigateToOrderPage} className="redirectBtn">
                Go to OrderPage
              </button>
            </>
          }
        />
        <Route
          path="/orderbook/:coinid"
          element={<OrderBookPage setSelectedCoin={setSelectedCoin} />}
        />
      </Routes>
    </>
  );
};
export default Home;
