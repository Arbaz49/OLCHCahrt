import { getTooltipdeatails } from "./getTToltipDetails";

export const  options :any ={
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
            let obj={
                c:w.globals.seriesCandleC[seriesIndex][dataPointIndex],
                h:w.globals.seriesCandleH[seriesIndex][dataPointIndex],
               o: w.globals.seriesCandleO[seriesIndex][dataPointIndex],
               l:w.globals.seriesCandleL[seriesIndex][dataPointIndex]
            }
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