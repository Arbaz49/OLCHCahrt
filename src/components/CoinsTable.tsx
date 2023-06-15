/* eslint-disable react/react-in-jsx-scope */
import "../styles/CoinsTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CoinsProps, CoinsType } from "../types/DataType";
import { useEffect, useState } from "react";
import { Initial_Number, WS_URL } from "../utils/Constants";
import { getSymbollsData as getSymbolsData } from "../utils/Services";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { asksMap, bidsMap } from "../utils/OrderBookservice";
export const w = new WebSocket(WS_URL);

export default function CoinsTable({
  selectedCoin,
  setSelectedCoin,
  chanId
}: CoinsProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { coinid } = useParams();
  const coin = coinid || selectedCoin || "tBTCUSD";
  const [coinIndex, setCoinIndex] = useState<string>(coin);
  // <h1>{location.pathname}</h1>
  const handleClick = (coin: string) => {
    setSelectedCoin(coin);
    setCoinIndex(coin);
    if (location.pathname !== "/") {
      navigate(`/orderbook/${coin}`);
    }
    handleWsMessage(chanId);
  };

  const handleWsMessage=(chanId:number)=>{
    
    w.send(JSON.stringify({
      event:"unsubscribe",
      channel:"book",
      symbol:coinid,
      chanId:chanId
    }));
    asksMap.clear() ;
    bidsMap.clear()
    w.send(JSON.stringify({
      event:"subscribe",
      channel:"book",
      symbol:coinid,
      chanId:0
    }));
 
  
  }
  const [coinsData, setCoinsData] = useState<CoinsType[]>([
    [
      "",
      Initial_Number,
      Initial_Number,
      Initial_Number,
      Initial_Number,
      Initial_Number,
      Initial_Number,
      Initial_Number,
      Initial_Number,
      Initial_Number,
      Initial_Number,
    ],
  ]);

  useEffect(() => {
    handleSymbolsData();
  }, []);

  const handleSymbolsData = async () => {
    try {
      const response = await getSymbolsData();
      console.log("Symbolsdata", response);
      setCoinsData(response);
    } catch (e: unknown) {
      console.log(e);
    }
  };
  return (
    <TableContainer className="table" component={Paper}>
      <Table
        className="ListTable"
        sx={{ maxWidth: 100, minHeight: 300 }}
        size="medium"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Coin</TableCell>
            <TableCell className="tableCell">CoinPrice</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coinsData?.map((row: CoinsType) => (
            <TableRow
              onClick={() => handleClick(row[0])}
              className="symbollRow"
              key={row[0]}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={
                coinIndex === row[0] || selectedCoin === row[0]
                  ? { backgroundColor: "aqua" }
                  : {}
              }
            >
              <TableCell className="tableCell" component="th" scope="row">
                {row[0].slice(1, 4)}
              </TableCell>
              <TableCell className="tableCell" component="th" scope="row">
                {row[1]} {row[0].slice(4, row[0].length)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
