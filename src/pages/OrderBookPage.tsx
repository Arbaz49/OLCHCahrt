import React, {useState } from "react";
import OrderBook from "../components/OrderBook";
import {useSearchParams } from "react-router-dom";
import CoinsTable from "../components/CoinsTable";
import Header from "../components/Header";
interface IProps {
  setSelectedCoin: React.Dispatch<React.SetStateAction<string>>;
  selectedCoin:string
}
const OrderBookPage = (props: IProps) => {

  const [queryParameters]= useSearchParams();
  const [chanId,setChanId] = useState(0);
 const coin= queryParameters.get("symbol") || undefined

  return (
    <>
      <Header selectedCoin={props.selectedCoin}/>
      <div style={{ display: "flex", width: "70vw", marginLeft: "200px" }}>
        <CoinsTable setSelectedCoin={props.setSelectedCoin} chanId={chanId} />
        <OrderBook selectedCoin={coin} setChanId={setChanId}  />
      </div>
 
    </>
  );
};
export default OrderBookPage;
