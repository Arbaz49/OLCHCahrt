
export interface ChartOptionsType {
  chart?: {
    height: number,
    type: string,

  },
  title: ApexTitleSubtitle,
  annotations: ApexAnnotations,
  tooltip: ApexTooltip,
  xaxis: ApexXAxis,
  yaxis: ApexYAxis,
}