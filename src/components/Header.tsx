import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoAnalyticsSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
interface IProps {
  selectedCoin: string;
}
const Header = (props: IProps) => {
  const navigate = useNavigate();
  const navigateFunc = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
    } else {
      navigate(`/orderbook`);
    }
  };
  return (
    <div className="header">
      <h2>OLCH Chart</h2>
      <div>
        {window.location.pathname === "/orderbook" && (
          <AiFillHome
            onClick={navigateFunc}
            style={{ fontSize: "30px", cursor: "pointer" }}
          />
        )}
        {window.location.pathname === "/" && (
          <IoAnalyticsSharp
            onClick={navigateFunc}
            style={{ fontSize: "30px", cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
