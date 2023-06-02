import React, { useEffect, useState } from 'react';
import "../styles/Chart.css";
import { getCandlesData } from '../utils/services';
import { ToolTip } from '../types/tooltipTypes';
import { Button } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import { buttonsData } from '../utils/constants';
import { ChartOption } from '../utils/ChartOptions';
import { IProps, NewType } from '../types/dataType';
// import { ChartOptionsType } from '../types/ChartOptionsType';



const Chart = (props: IProps) => {

  // type NewType = {
  //   name: string;
  //   data: Chartdata[];
  // };


 //   (async () => {
  //     const data = await getCandlesData(props.timeFrame, props.selectedCoin);
  //     const processedData = processChartData(data);
  //     setApiData({ name: "candleData", data: [...processedData] });
  //   })()
  const [apiData, setApiData] = useState<NewType>({ name: "", data: [] });
  useEffect(() => {
    getCandlesData(props.timeFrame,props.selectedCoin,setApiData)
 
  }, [props.selectedCoin, props.timeFrame]);

  const [tooltip, setTooltip] = useState<ToolTip>({
    h: 0.00,
    l: 0.00,
    o: 0.00,
    c: 0.00
  });
  const options: any = ChartOption(setTooltip);


  return (
    <div className='chartContainer' >
      <h2>
        chart component

      </h2>
      <div className="holcDiv" >
        <span>
          H:{tooltip.h}</span><span>L:{tooltip.l}</span><span>O:{tooltip.o}</span><span>C:{tooltip.c}</span>
      </div>
      <div id="chart">
        <ReactApexChart options={options}
          series={[apiData]}
          type="candlestick" height={600} />
      </div>

      <div className="ChartFilterButtons" >
        {
          buttonsData?.map((ele) => {
            return (
              <Button className='chartButton' onClick={() => props.setTimeFrame(ele.value)} key={ele.lable} variant="outlined">{ele.lable}</Button>
            )
          })
        }
      </div>
    </div>
  )
}
export default Chart
