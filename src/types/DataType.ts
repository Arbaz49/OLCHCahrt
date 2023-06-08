export interface Chartdata {
  x: Date;
  y: [number, number, number, number];
}

export type CoinsType = [
  string,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

export interface ChartProps {
  loading?:boolean,
  setloading?:React.Dispatch<React.SetStateAction<boolean>>;
  timeFrame: string;
  selectedCoin: string ;
  setTimeFrame: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCoin: React.Dispatch<React.SetStateAction<string>>;
  // updateSelectedCoin?:()=>:void{}
}
export interface CandleStickDataType {
  name: string;
  data: Chartdata[];
}
export interface ButtonsType {
  lable: string;
  value: string;
}
export interface CoinsProps {
  coinsTableData?: CoinsType[];
  setselcetedCoin: React.Dispatch<React.SetStateAction<string>>;
}
export interface OrderProps {
  selectedCoin: string|undefined;
}