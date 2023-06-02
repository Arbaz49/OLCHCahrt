export interface Chartdata{
    x:Date;
    y:[number,number,number,number]
}

export type CoinsType=[string,number,number,number,number,number,number,number,number,number,number];

export interface IProps {
    timeFrame: string;
    selectedCoin: string;
    setTimeFrame: React.Dispatch<React.SetStateAction<string>>;
    setSelectedCoin: React.Dispatch<React.SetStateAction<string>>;
  }