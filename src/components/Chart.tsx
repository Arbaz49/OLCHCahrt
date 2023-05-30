import React, { useEffect, useState } from 'react';
// import { options } from '../utils/data';
import ApexCharts from 'apexcharts';
import { chartdata } from '../types/dataType';
import { getCandlesdata, processChartData } from '../utils/services';
import { toolTip } from '../types/tooltipTypes';
import { Button } from '@mui/material';

const Chart = () => {
  const [apiData, setApiData] = useState<chartdata[]>([]);
  const [tooltip,setTooltip]=useState<toolTip>({ h: 0.00,
    l: 0.00,
    o: 0.00,
    c: 0.00})
  useEffect(() => {
    getCandlesdata("1m", "tBTCUSD").then((data) => {
      console.log("apidata", data)
      const processedData = processChartData(data);
      console.log("processed", processedData)
      setApiData(processedData);
    });
  }, [])



  useEffect(() => {
    const options = {
      series: [{
        data: apiData,
      }],
      chart: {
        toolbar: {
          show: false,
          tools: {
            download: false,
            selection: false,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: false,
          },
        },
        zoom: {
          enabled: true,
          type: "x",
          autoScaleYaxis: true,
          autoScaleXaxis: true
        },
        type: "candlestick",
      },
      tooltip: {
        cssClass: "my-tooltip",
        custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
          setTooltip({
            c: w.globals.seriesCandleC[0][dataPointIndex],
            o: w.globals.seriesCandleO[0][dataPointIndex],
            h: w.globals.seriesCandleH[0][dataPointIndex],
            l: w.globals.seriesCandleL[0][dataPointIndex],

          });
        }
      },
      title: {
        text: 'OLCH Chart',
        align: 'left'
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    };
    const chart = new ApexCharts(document.getElementById("chart"), options);
    apiData.length >1 && chart.render();
  },[apiData])
  return (
    <div>
      chart component
      <div className="holc" style={{ position: "relative", top: "0px", left: "50px" }}>
            <span>
              H:{tooltip.h}</span><span>L:{tooltip.l}</span><span>O:{tooltip.o}</span><span>C:{tooltip.c}</span>
          </div>
      <div id="chart" >

      </div>
      <div className="buttons">
        {
          ["1h","1d","1w","1m","1y"].map((ele,index)=>{
            return (
              <Button onClick={()=>alert(ele)} style={{border:"1px solid black",color:"black",padding:"0px",margin:"0px 5px"}} key={index} variant="outlined">{ele}</Button>
            )
          })
        }
      </div>
    
    </div>
  )
}
export default Chart
