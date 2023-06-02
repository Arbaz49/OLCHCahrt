import * as React from 'react';
import "../styles/CoinsTable.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CoinsType } from '../types/dataType';

interface IProps {
  data:CoinsType[],
  setselcetedCoin:React.Dispatch<React.SetStateAction<string>>
}
export default function CoinsTable({data,setselcetedCoin}:IProps) {
  console.log("coinsList",data)
  return (
    <TableContainer className='table' component={Paper} >
      <Table className='ListTable' sx={{ maxWidth: 100, minHeight: 300 }}  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell  className='tableCell'>Coin</TableCell>
            <TableCell  className='tableCell'>CoinPrice</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row:CoinsType) => (
            <TableRow  onClick={()=>setselcetedCoin(row[0])}
            className='symbollRow'
              key={row[0]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  className='tableCell' component="th" scope="row">
                {row[0]}
              </TableCell>
              <TableCell  className='tableCell' component="th" scope="row">
                {row[1]}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}