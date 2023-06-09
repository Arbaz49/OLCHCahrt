import React from 'react'
import OrderBook from '../components/OrderBook'
import { useNavigate, useParams } from 'react-router-dom'
import CoinsTable from '../components/CoinsTable'
import Header from '../components/Header'
interface IProps{
  setSelectedCoin:React.Dispatch<React.SetStateAction<string>>
}
const OrderBookPage = (props:IProps) => {
  const {coinid}=useParams()
  // alert(coinid);
  const navigate=useNavigate()
const navigateToOrderPage=()=>{
  navigate(`/`)
}
  return (
    <>
    <Header/>

    <div style={{display:"flex",width:"70vw",margin:"auto"}}>
      <CoinsTable setselcetedCoin={props.setSelectedCoin
    }/>
      <OrderBook selectedCoin={coinid}/> 
    </div>
    <button onClick={navigateToOrderPage} className='redirectBtn'>Go To Home</button>
    </>
  )
}
export default OrderBookPage
