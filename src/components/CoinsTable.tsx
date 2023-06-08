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
import { Initial_Number } from "../utils/Constants";
import { getSymbollsData } from "../utils/Services";
import { useLocation, useNavigate } from "react-router-dom";

export default function CoinsTable({
  
  setselcetedCoin,
}: CoinsProps) {
  const navigate=useNavigate()
  const [coinIndex, setCoinIndex] = useState<string>("tBTCUSD");
  const location=useLocation()
  // <h1>{location.pathname}</h1>
  const handleClick=(coin:string)=>{
    setselcetedCoin(coin);
    setCoinIndex(coin)
    if(location.pathname !=="/"){

      navigate(`/orderbook/${coin}`)
    }
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
      const response = await getSymbollsData();
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
          {coinsData?.map((row: CoinsType, index) => (
            <TableRow
              onClick={() => handleClick(row[0])}
              className="symbollRow"
              key={row[0]}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={coinIndex === row[0] ? { backgroundColor: "aqua" } : {}}
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
