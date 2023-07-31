/* eslint-disable react/react-in-jsx-scope */
import "../styles/CoinsTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CoinsType } from "../types/DataType";
import { useEffect, useState } from "react";
import {Index_Of_Price, Index_Of_Symbol, WS_URL } from "../utils/Constants";
import { getSymbolsData } from "../utils/Services";
import { asksMap, bidsMap } from "../utils/OrderBookservice";

export const w = new WebSocket(WS_URL);
interface CoinsProps {
  selectedCoin: string;
  coinsTableData?: CoinsType[];
  setSelectedCoin: React.Dispatch<React.SetStateAction<string>>;
  chanId: number;
}
export default function CoinsTable({
  selectedCoin,
  setSelectedCoin,
  chanId,
}: CoinsProps) {
  const coin = selectedCoin;

  const handleClick = (symbol: string) => {
    setSelectedCoin(symbol);
    handleWsMessage(chanId, symbol);
  };

  const handleWsMessage = (chanId: number, coin: string) => {
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
  const [coinsData, setCoinsData] = useState<CoinsType[]>([]);

  useEffect(() => {
    handleSymbolsData();
  }, []);

  const handleSymbolsData = async () => {
    try {
      const response = await getSymbolsData();
      setCoinsData(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TableContainer
      className="table"
      sx={{
        boxShadow: "14px 16px 15px 2px rgba(0,0,0,0.75)",
        border: "1px solid black",
        "&::-webkit-scrollbar": {
          width: 7,
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "grey",
          borderRadius: "12px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#171312",
          height: 100,
          borderRadius: 2,
        },
      }}
      style={{ maxHeight: 550, maxWidth: 300 }}
      component={Paper}
    >
      <Table
        stickyHeader
        className="ListTable"
        component={Paper}
        size="medium"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center"
              style={{
                backgroundColor: "aqua",
                borderBottom: "1px solid black",
                fontWeight:"bold",
                fontSize:"17px"
              }}
              className="tableCell"
            >
              Coin
            </TableCell>
            <TableCell align="center"
              style={{
                backgroundColor: "aqua",
                borderBottom: "1px solid black",
                fontWeight:"bold",
                fontSize:"17px"
              }}
              className="tableCell"
            >
              CoinPrice
            </TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {coinsData?.map((row: CoinsType) => (
            <TableRow
              onClick={() => handleClick(row[Index_Of_Symbol])}
              className="symbollRow"
              key={row[Index_Of_Symbol]}
              style={row[Index_Of_Symbol] === coin ? { backgroundColor: "#a5e5e5" } : {}}
            >
              <TableCell align="center" className="tableCell" component="th" scope="row">
                {row[Index_Of_Symbol].slice(1, 4)}
              </TableCell>
              <TableCell align="center" className="tableCell" component="th" scope="row">
                {row[Index_Of_Price]} {row[Index_Of_Symbol].slice(4, row[Index_Of_Symbol].length)}
              </TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
