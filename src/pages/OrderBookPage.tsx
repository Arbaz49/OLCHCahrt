import React, {useState } from "react";
import OrderBook from "../components/OrderBook";
import CoinsTable from "../components/CoinsTable";
import Header from "../components/Header";
interface IProps {
  setSelectedCoin: React.Dispatch<React.SetStateAction<string>>;
  selectedCoin:string
}
const OrderBookPage = (props: IProps) => {
const InitialChanId=-1;
  const [chanId,setChanId] = useState(InitialChanId);

  return (
    <>
      <Header selectedCoin={props.selectedCoin}/>
      <div style={{ display: "flex", width: "70vw", marginLeft: "200px" }}>
        <CoinsTable selectedCoin={props.selectedCoin} setSelectedCoin={props.setSelectedCoin} chanId={chanId} />
        <OrderBook selectedCoin={props.selectedCoin} setChanId={setChanId}  />
      </div>
    </>
  );
};
export default OrderBookPage;
