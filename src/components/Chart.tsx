import React, { useEffect, useState } from 'react';
import { getCandlesdata } from '../utils/services';
import { ToolTip } from '../types/tooltipTypes';
import { Button } from '@mui/material';
import { processChartData } from '../utils/processData';
import ReactApexChart from 'react-apexcharts';
import { buttonsData } from '../utils/constants';
import { ChartOption } from '../utils/ChartOptions';
import { IProps } from '../types/dataType';



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
  const  options :any = ChartOption(setTooltip);

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
