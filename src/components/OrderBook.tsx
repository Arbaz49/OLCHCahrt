/* eslint-disable react/react-in-jsx-scope */
import OrderBookTable from "./OrderBookTable";
import { OrderProps } from "../types/DataType";


const OrderBook = ({ selectedCoin }: OrderProps) => {
  return (
    <div style={{display:"flex", textAlign: "center",width:"70vw",margin:"auto" }}>
      {/* need to pass setselectedcoin function as prop */}
      {/* <CoinsTable /> */}
      <div>
      <h3>OrderBook</h3>
      <div>
        <h3>{selectedCoin?.slice(1,4)} / {selectedCoin?.slice(4,selectedCoin.length)}</h3>
      </div>
      <OrderBookTable selectedCoin={selectedCoin} />
      </div>
    </div> 
  );
};
export default OrderBook;
