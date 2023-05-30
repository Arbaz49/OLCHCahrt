import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function CoinsTable({ data ,setselcetedCoin}: any) {
  return (
    <TableContainer className='table' component={Paper} style={{width:"30vw",height:"60vh",textAlign:"center"}}>
      <Table sx={{ maxWidth: 100, minHeight: 300 }} style={{width:"30vw"}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell  className='tablecell'>Coin</TableCell>
            <TableCell  className='tablecell'>CoinPrice</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow onClick={()=>setselcetedCoin(row[0])}
            className='symbollRow'
              key={row[0]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  className='tablecell' component="th" scope="row">
                {row[0]}
              </TableCell>
              <TableCell  className='tablecell' component="th" scope="row">
                {row[1]}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}