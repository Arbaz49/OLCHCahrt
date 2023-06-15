import React, {useState } from "react";
import OrderBook from "../components/OrderBook";
import { useNavigate, useParams } from "react-router-dom";
import CoinsTable from "../components/CoinsTable";
import Header from "../components/Header";
interface IProps {
  setSelectedCoin: React.Dispatch<React.SetStateAction<string>>;
}
const OrderBookPage = (props: IProps) => {
  const { coinid } = useParams();
  const navigate = useNavigate();
  const navigateToOrderPage = () => {
    navigate(`/`);
  };
  const [chanId,setChanId] = useState(0);


  return (
    <>
      <Header/>
      <div style={{ display: "flex", width: "70vw", marginLeft: "200px" }}>
        <CoinsTable setSelectedCoin={props.setSelectedCoin} chanId={chanId} />
        <OrderBook selectedCoin={coinid} setChanId={setChanId}  />
      </div>
      <button onClick={navigateToOrderPage} className="redirectBtn">
        Go To Home
      </button>
    </>
  );
};
export default OrderBookPage;
