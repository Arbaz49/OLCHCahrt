/* eslint-disable react/react-in-jsx-scope */
import OrderBookTable from "./OrderBookTable";
interface OrderProps {
  selectedCoin: string|undefined;
  setChanId:React.Dispatch<React.SetStateAction<number>>;
}

const OrderBook = ({ selectedCoin,setChanId }: OrderProps) => {
  return (
    <div style={{display:"flex", textAlign: "center",width:"70vw" }}>
      <div>
      <h3>OrderBook</h3>
      <div>
        <h3>{selectedCoin?.slice(1,4)} / {selectedCoin?.slice(4,selectedCoin.length)}</h3>
      </div>
      <OrderBookTable setChanId={setChanId} selectedCoin={selectedCoin} />
      </div>
    </div> 
  );
};
export default OrderBook;
