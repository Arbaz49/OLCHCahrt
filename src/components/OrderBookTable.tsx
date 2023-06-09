import React,{useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { WS_URL } from '../utils/constants';
const w = new WebSocket(WS_URL);
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
interface IProps{
  selectedCoin:string
}
export default function OrderBookTable({selectedCoin}:IProps) {
  const [bookData,setBookData] = useState<number[]>([])
  useEffect(()=>{
      let msg = JSON.stringify({ 
          event: 'subscribe', 
          channel: 'book', 
          symbol: selectedCoin 
        })
      w.onopen = ():void => {
              w.send(msg);
          };
          w.onmessage=(a:any):void=>{
              console.log("socket data",a.data)
           if(Array.isArray(a.data[1])){
            console.log("mydata",a.data[1])
           }
            }},[])
  return (
    <TableContainer component={Paper} style={{width:"1100px",margin:"auto"}}>
      <Table sx={{ minWidth: 250 }} style={{width:"600px",textAlign:"center"}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Price</TableCell>
            <TableCell >Count</TableCell>
            <TableCell >Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {bookData.map((order) => (
            <TableRow
              key={order[0]}
             
            >
              <TableCell component="th">
                {order[1]}
              </TableCell>
              <TableCell align="right">{order[2]}</TableCell>
       
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
