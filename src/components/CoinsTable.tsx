import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface IProps {
  data:any[],
  setselcetedCoin:React.Dispatch<React.SetStateAction<string>>
}
export default function CoinsTable({data,setselcetedCoin}:IProps) {
  return (
    <TableContainer className='table' component={Paper} style={{width:"30vw",height:"95vh",textAlign:"center"}}>
      <Table className='table' sx={{ maxWidth: 100, minHeight: 300 }} style={{width:"30vw"}} size="small" aria-label="a dense table">
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