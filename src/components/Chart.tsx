import React, { useEffect, useState } from "react";
import "../styles/Chart.css";
import { getCandlesData } from "../utils/Services";
import { ToolTip } from "../types/TooltipTypes";
import { Button } from "@mui/material";
import ReactApexChart from "react-apexcharts";

import {
  ButtonsType,
  CandleStickDataType,
  ChartProps,
} from "../types/DataType";
import { buttonsData, candleStickChartHeight } from "../utils/Constants";
import { chartOption } from "../utils/ChartOptions";

const Chart = (props: ChartProps) => {
  // const [CandleSticChartData, setCandleSticChartData] =
  //   useState<CandleStickDataType>({ name: "", data: [] });
  const [CandleSticChartData, setCandleSticChartData] =
  useState<any>({ name: "", data: [] });
  const [tooltip, setTooltip] = useState<ToolTip>({
    h: 0.0,
    l: 0.0,
    o: 0.0,
    c: 0.0,
  });

  const handleCandlesData = async () => {
    const response = await getCandlesData(props.timeFrame, props.selectedCoin);
    console.log("myData", response);
    // alert(typeof response)
    setCandleSticChartData(response);
  };

  useEffect(() => {
    handleCandlesData();
  }, [props.selectedCoin, props.timeFrame]);

  const options: any = chartOption(setTooltip);
  return (
    <div className="chartContainer">
      <h2>Chart component</h2>
      <div className="holcDiv">
        <span>H:{tooltip.h}</span>
        <span>L:{tooltip.l}</span>
        <span>O:{tooltip.o}</span>
        <span>C:{tooltip.c}</span>
      </div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={[CandleSticChartData]}
          type="candlestick"
          height={candleStickChartHeight}
        />
      </div>

      <div className="ChartFilterButtons">
        {buttonsData?.map((btn: ButtonsType) => {
          return (
            <Button
              className="chartButton"
              onClick={() => props.setTimeFrame(btn.value)}
              key={btn.lable}
              variant="outlined"
            >
              {btn.lable}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
export default Chart;
