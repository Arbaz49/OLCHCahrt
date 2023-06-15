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
  selectedCoin?:string,
  coinsTableData?: CoinsType[];
  setSelectedCoin: React.Dispatch<React.SetStateAction<string>>;
  chanId:number
}
export interface OrderProps {
  selectedCoin: string|undefined;
  setChanId:React.Dispatch<React.SetStateAction<number>>;
}

export const Index_Of_Amount=1
export const Index_Of_Count=0
export const Index_Of_Price=3
export const Index_Of_Total=2