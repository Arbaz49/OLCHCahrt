/* eslint-disable react/react-in-jsx-scope */
import App from "../App";
import OrderBookPage from "../pages/OrderBookPage";

// import App from "../App"
export const routes= [
    {
      path: "/",
      // element:
      // eslint-disable-next-line react/react-in-jsx-scope
      // <App/>
    },
    {
      path: "/orderbook/:coinid",
      // element:<OrderBookPage/>,
    },
  ]