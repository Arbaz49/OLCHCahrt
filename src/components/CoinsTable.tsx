/* eslint-disable react/react-in-jsx-scope */
import "../styles/CoinsTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {CoinsType } from "../types/DataType";
import { useEffect, useState } from "react";
import { Initial_Number, WS_URL } from "../utils/Constants";
import { getSymbollsData as getSymbolsData } from "../utils/Services";
import { useLocation, useNavigate} from "react-router-dom";
import { asksMap, bidsMap } from "../utils/OrderBookservice";
import {IoAnalytics} from "react-icons/io5";

export const w = new WebSocket(WS_URL);
interface CoinsProps {
  selectedCoin:string,
  coinsTableData?: CoinsType[];
  setSelectedCoin: React.Dispatch<React.SetStateAction<string>>;
  chanId:number
}
export default function CoinsTable({
  selectedCoin,
  setSelectedCoin,
  chanId,
}: CoinsProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const coin = selectedCoin 
  const [coinIndex, setCoinIndex] = useState<string>(coin);

  const handleClick = (symbol: string) => {
    setCoinIndex(symbol);
    setSelectedCoin(symbol);
    handleWsMessage(chanId,symbol);
    if(location.pathname!=="/"){
      navigate(`/orderbook`);
    }
  };

  const handleWsMessage =(chanId: number,coin:string) => {
    asksMap.clear();
    bidsMap.clear();
   w.send(
      JSON.stringify({
        event: "unsubscribe",
        channel: "book",
        symbol: coin,
        chanId: chanId,
      })
    );

    w.send(
      JSON.stringify({
        event: "subscribe",
        channel: "book",
        symbol: coin,
        chanId: 0,
      })
    );
  };
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
            <TableCell className="tableCell"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coinsData?.map((row: CoinsType) => (
            <TableRow
            onClick={() => handleClick(row[0])}

              className="symbollRow"
              key={row[0]}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={
                row[0] === coin 
                  ? { backgroundColor: "aqua" }
                  : {}
              }
            >
              <TableCell 
              className="tableCell" component="th" scope="row">
                {row[0].slice(1, 4)}
              </TableCell>
              <TableCell
              className="tableCell" component="th" scope="row">
                {row[1]} {row[0].slice(4, row[0].length)}
              </TableCell>
              <TableCell><IoAnalytics/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
