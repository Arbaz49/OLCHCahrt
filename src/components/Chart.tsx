/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useState } from "react";
import "../styles/Chart.css";
import { getCandlesData } from "../utils/Services";
import { ToolTip } from "../types/TooltipTypes";
import { Button } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import {
  ButtonsType,
  ChartProps,
} from "../types/DataType";
import { buttonsData, candleStickChartHeight } from "../utils/Constants";
import { chartOption } from "../utils/ChartOptions";

interface IProps extends ChartProps {
  setToolTip: React.Dispatch<React.SetStateAction<ToolTip>>;
}

const Chart = (props: IProps) => {
  const [CandleSticChartData, setCandleSticChartData] = useState<any>({
    name: "",
    data: [],
  });

  const handleCandlesData = async () => {
    const response = await getCandlesData(
      props.timeFrame,
      props.selectedCoin,
    );
    setCandleSticChartData(response);
  };

  useEffect(() => {
    handleCandlesData();
  }, [props.selectedCoin, props.timeFrame]);
  const options: any = chartOption(props.setToolTip);

  return (
    <>
      <div id="chartId"  className="chartContainer">
        <h4>
          {props.selectedCoin.slice(1, 4)} /{" "}
          {props.selectedCoin.slice(4, props.selectedCoin.length)}{" "}
        </h4>

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
    </>
  );
};
export default memo(Chart);
