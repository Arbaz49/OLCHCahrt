import React, {  useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import { Chartdata } from '../types/dataType';
import { getCandlesdata} from '../utils/services';
import { toolTip } from '../types/tooltipTypes';
import { Button } from '@mui/material';
import { processChartData } from '../utils/processData';
import ReactApexChart from 'react-apexcharts';

interface IProps {
  timeFrame : string;
  selectedCoin : string;
  setTimeFrame :  React.Dispatch<React.SetStateAction<string>>; 
  setSelectedCoin :  React.Dispatch<React.SetStateAction<string>>; 
}
const Chart= (props:IProps)=> {

  const [apiData, setApiData] = useState<any>([]);
  const [tooltip,setTooltip]=useState<toolTip>({ h: 0.00,
    l: 0.00,
    o: 0.00,
    c: 0.00});



  useEffect(() => {
    getCandlesdata(props.timeFrame, props.selectedCoin).then((data) => {
      console.log("apidata", data)
      const processedData = processChartData(data);
      console.log("processed", processedData)
      setApiData({name:"candledata" , data : [...processedData]});
      console.log("updated data", processedData.length)
    });

  }, [props.selectedCoin,props.timeFrame])



const  options :any ={
    chart: {
      height: 350,
      type: 'candlestick',
    },
    title: {
      text: 'CandleStick Chart - Category X-axis',
      align: 'left'
    },
    annotations: {
      xaxis: [
        {
          x: 'Oct 06 14:00',
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              fontSize: '12px',
              color: '#fff',
              background: '#00E396'
            },
            orientation: 'horizontal',
            offsetY: 7,
            text: 'Annotation Test'
          }
        }
      ]
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: 'category',
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  }

  return (
    <div>
      chart component
      <div className="holc" style={{ position: "relative", top: "0px", left: "50px" }}>
            <span>
              H:{tooltip.h}</span><span>L:{tooltip.l}</span><span>O:{tooltip.o}</span><span>C:{tooltip.c}</span>
          </div>
<ReactApexChart options={options} 
           
           series={[
                 apiData           
              ]
            } 
            type="candlestick" height={350}  />
      <div className="buttons">
        {
          ["1h","1d","1w","1m","1y"].map((ele,index)=>{
            return (
              <Button onClick={()=>props.setTimeFrame(ele)} style={{border:"1px solid black",color:"black",padding:"0px",margin:"0px 5px"}} key={index} variant="outlined">{ele}</Button>
            )
          })
        }
      </div>
    
    </div>
  )
}
export default Chart
