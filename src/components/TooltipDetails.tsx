import React, { memo } from 'react'
import { ToolTip } from '../types/TooltipTypes'
interface IProps{
    tooltip:ToolTip
}
const TooltipDeatails = (props:IProps) => {
  return (
    <div>
         <div className="holcDiv">
        <span id="high">H:{props.tooltip.h}</span>
        <span>L:{props.tooltip.l}</span>
        <span>O:{props.tooltip.o}</span>
        <span>C:{props.tooltip.c}</span>
      </div>
    </div>
  )
}

export default memo(TooltipDeatails)
