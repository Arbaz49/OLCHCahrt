import OrderBookTable from "./OrderBookTable";
import { OrderProps } from "../types/DataType";


const OrderBook = ({ selectedCoin }: OrderProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>OrderBook</h3>
      <div>
        <h3>{selectedCoin?.slice(1,4)} / {selectedCoin?.slice(4,selectedCoin.length)}</h3>
      </div>
      <OrderBookTable selectedCoin={selectedCoin} />
    </div>
  );
};

export default OrderBook;
