import React, { useState } from "react";
import TooltipDetails from "./TooltipDetails";
import Chart from "./Chart";
import { ToolTip } from "../types/TooltipTypes";
import { Initial_TooltipValue } from "../utils/Constants";
interface ChartProps {
  loading?:boolean,
  setloading?:React.Dispatch<React.SetStateAction<boolean>>;
  timeFrame: string;
  selectedCoin: string ;
  setTimeFrame: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCoin: React.Dispatch<React.SetStateAction<string>>;
}
const ChartContainer = (props: ChartProps) => {
  const [tooltip, setTooltip] = useState<ToolTip>({
    h: Initial_TooltipValue,
    l: Initial_TooltipValue,
    o: Initial_TooltipValue,
    c: Initial_TooltipValue,
  });
  return (
    <div id="chart">
      <Chart
        loading={props.loading}
        setloading={props.setloading}
        setToolTip={setTooltip}
        timeFrame={props.timeFrame}
        selectedCoin={props.selectedCoin}
        setTimeFrame={props.setTimeFrame}
        setSelectedCoin={props.setSelectedCoin}
      />
      <TooltipDetails tooltip={tooltip} />
    </div>
  );
};

export default ChartContainer;
