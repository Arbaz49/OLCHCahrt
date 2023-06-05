import React from "react";
import OrderBookTable from "./OrderBookTable";

interface IProps {
  selectedCoin: string;
}
const OrderBook = ({ selectedCoin }: IProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>OrderBook</h3>
      <div>
        <h3>Selected : {selectedCoin}</h3>
      </div>
      <OrderBookTable selectedCoin={selectedCoin} />
    </div>
  );
};

export default OrderBook;
