let InitialTimeFrame = "30m";
let InitialSelectedCoin = "tBTCUSD";
let BASE_URL="https://api-pub.bitfinex.com/v2/";
let WS_URL='wss://api-pub.bitfinex.com/ws/2';
let buttonsData = [
  {
    lable: "1h",
    value: "1m",
  },
  {
    lable: "1d",
    value: "15m",
  },
  {
    lable: "1w",
    value: "1h",
  },
  {
    lable: "1y",
    value: "1D",
  },
  {
    lable: "3y",
    value: "1W",
  },
];

export { InitialTimeFrame, InitialSelectedCoin, buttonsData,BASE_URL,WS_URL };
