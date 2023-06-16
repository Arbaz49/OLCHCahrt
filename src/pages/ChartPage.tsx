import React from 'react'
import Header from '../components/Header'
import SymbolsList from '../components/SymbolList'
import ChartContainer from '../components/ChartContainer'

interface IProps{
    timeFrame:string,
    selectedCoin:string,
    setTimeFrame:React.Dispatch<React.SetStateAction<string>>,
    setSelectedCoin:React.Dispatch<React.SetStateAction<string>>,
}

const HomePage = (props:IProps) => {



  return (
    <>
              <Header selectedCoin={props.selectedCoin} />
              <div className="container">
                <SymbolsList
                  timeFrame={props.timeFrame}
                  selectedCoin={props.selectedCoin}
                  setTimeFrame={props.setTimeFrame}
                  setSelectedCoin={props.setSelectedCoin}
                />
                <ChartContainer
                  timeFrame={props.timeFrame}
                  selectedCoin={props.selectedCoin}
                  setTimeFrame={props.setTimeFrame}
                  setSelectedCoin={props.setSelectedCoin}
                />
              </div>
            </>
  )
}
export default HomePage