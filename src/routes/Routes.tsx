import React from 'react'
import { Route, Routes } from "react-router-dom";

import Chartpage from "../pages/ChartPage";
import OrderBookPage from '../pages/OrderBookPage';

interface IProps{
    timeFrame:string,
    selectedCoin:string,
    setTimeFrame:React.Dispatch<React.SetStateAction<string>>,
    setSelectedCoin:React.Dispatch<React.SetStateAction<string>>,
}
const AppRoutes = (props:IProps) => {
  return (
    <Routes>
    <Route
      path="/"
      Component={() => (
        <>
          <Chartpage
            timeFrame={props.timeFrame}
            selectedCoin={props.selectedCoin}
            setTimeFrame={props.setTimeFrame}
            setSelectedCoin={props.setSelectedCoin}
          />
        </>
      )}
    />
    <Route
      path="/orderbook"
      Component={() => (
        <OrderBookPage
          selectedCoin={props.selectedCoin}
          setSelectedCoin={props.setSelectedCoin}
        />
      )}
    />
  </Routes>
    
  )
}

export default AppRoutes
