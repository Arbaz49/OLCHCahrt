export interface Chartdata{
    x:Date;
    y:[number,number,number,number]
}

// type CoinType = string;

export type CoinsType=[string,number,number,number,number,number,number,number,number,number,number];

export interface IProps {
    timeFrame: string;
    selectedCoin: string;
    setTimeFrame: React.Dispatch<React.SetStateAction<string>>;
    setSelectedCoin: React.Dispatch<React.SetStateAction<string>>;
  }
  export   type NewType = {
    name: string;
    data: Chartdata[];
  };