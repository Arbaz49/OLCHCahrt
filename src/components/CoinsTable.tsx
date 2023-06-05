import * as React from "react";
import "../styles/CoinsTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CoinsProps, CoinsType } from "../types/DataType";

export default function CoinsTable({
  coinsTableData,
  setselcetedCoin,
}: CoinsProps) {
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
          {coinsTableData?.map((row: CoinsType) => (
            <TableRow
              onClick={() => setselcetedCoin(row[0])}
              className="symbollRow"
              key={row[0]}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="tableCell" component="th" scope="row">
                {row[0].slice(1,4)}
              </TableCell>
              <TableCell className="tableCell" component="th" scope="row">
                {row[1]}  {row[0].slice(4,row[0].length)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
