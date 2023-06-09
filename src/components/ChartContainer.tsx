import React, { useState } from 'react'
import TooltipDeatails from './TooltipDeatails'
import Chart from './Chart'
import { ToolTip } from '../types/TooltipTypes';
import { ChartProps } from '../types/DataType';

const ChartContainer = (props:ChartProps) => {
    const [tooltip, setTooltip] = useState<ToolTip>({
        h: 0.0,
        l: 0.0,
        o: 0.0,
        c: 0.0,
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
          setSelectedCoin={props.setSelectedCoin}/>
      <TooltipDeatails tooltip={tooltip}/>
    </div>
  )
}

export default ChartContainer