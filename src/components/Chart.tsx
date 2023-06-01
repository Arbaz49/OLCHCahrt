import React, { useEffect, useState } from 'react';
import { getCandlesdata } from '../utils/services';
import { ToolTip } from '../types/tooltipTypes';
import { Button } from '@mui/material';
import { processChartData } from '../utils/processData';
import ReactApexChart from 'react-apexcharts';
import { buttonsData } from '../utils/constants';

interface IProps {
  timeFrame: string;
  selectedCoin: string;
  setTimeFrame: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCoin: React.Dispatch<React.SetStateAction<string>>;
}

const Chart = (props: IProps) => {

  const [apiData, setApiData] = useState<any>([]);
  useEffect(() => {
    (async()=>{
const data=await getCandlesdata(props.timeFrame, props.selectedCoin);
const processedData = processChartData(data);
setApiData({ name: "candleData", data: [...processedData] });
    })()
  }, [props.selectedCoin, props.timeFrame])

  const [tooltip, setTooltip] = useState<ToolTip>({
    h: 0.00,
    l: 0.00,
    o: 0.00,
    c: 0.00
  });
  const  options :any ={
    chart: {
      height: 450,
      type: 'candlestick',
      
    },
    title: {
      text: 'OLCH Chart',
      align: 'left'
    },
    annotations: {
      xaxis: [
        {
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
        cssClass:"my-tooltip",
        enabled: true,
        custom: function({ series, seriesIndex, dataPointIndex, w }:any) {
          setTooltip({
                c:w.globals.seriesCandleC[seriesIndex][dataPointIndex],
                h:w.globals.seriesCandleH[seriesIndex][dataPointIndex],
               o: w.globals.seriesCandleO[seriesIndex][dataPointIndex],
               l:w.globals.seriesCandleL[seriesIndex][dataPointIndex]
            })
         console.log( "tooltip",w.globals.seriesCandleC[seriesIndex][dataPointIndex])
        }
      },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      chart component
      <div className="holc" style={{ position: "relative", top: "0px", left: "50px" }}>
        <span>
          H:{tooltip.h}</span><span>L:{tooltip.l}</span><span>O:{tooltip.o}</span><span>C:{tooltip.c}</span>
      </div>
      <div id="chart">
        <ReactApexChart options={options}
          series={[apiData]}
          type="candlestick" height={600} />
      </div>

      <div className="buttons" style={{ position: "absolute", bottom: "10px",marginLeft:"20px" }}>
        {
          buttonsData?.map((ele, index) => {
            return (
              <Button onClick={() => props.setTimeFrame(ele.value)} style={{ border: "1px solid black", color: "black", padding: "0px", margin: "0px 5px" }} key={index} variant="outlined">{ele.lable}</Button>
            )
          })
        }
      </div>
    </div>
  )
}
export default Chart
