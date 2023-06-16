import React from "react";
import "./App.css";
import { useState } from "react";
import { Initial_SelectedCoin, Initial_TimeFrame } from "./utils/Constants";
import AppRoutes from "./routes/Routes";

const Home: React.FC = () => {
  const [timeFrame, setTimeFrame] = useState<string>(Initial_TimeFrame);
  const [selectedCoin, setSelectedCoin] =
    useState<string>(Initial_SelectedCoin);
  return (
    <>
  <AppRoutes
     timeFrame={timeFrame}
     selectedCoin={selectedCoin}
     setTimeFrame={setTimeFrame}
     setSelectedCoin={setSelectedCoin}
  />
    </>
  );
};
export default Home;
