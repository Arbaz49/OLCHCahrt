import React, { useEffect, useState } from "react";
import { getSymbollsData } from "../utils/Services";
import CoinsTable from "./CoinsTable";
import {CoinsType } from "../types/DataType";
import { Initial_Number } from "../utils/Constants";
interface ChartProps {
  loading?:boolean,
  setloading?:React.Dispatch<React.SetStateAction<boolean>>;
  timeFrame: string;
  selectedCoin: string ;
  setTimeFrame: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCoin: React.Dispatch<React.SetStateAction<string>>;
}
const SymbollsList = (props: ChartProps) => {
  const [coinsList, setCoinsList] = useState<CoinsType[]>([
    [
      "",
      Initial_Number,
      Initial_Number,
      Initial_Number,
      Initial_Number,
      Initial_Number,
      Initial_Number,
      Initial_Number,
      Initial_Number,
      Initial_Number,
      Initial_Number,
    ],
  ]);

  useEffect(() => {
    handleSymbolsData();
  }, []);

  const handleSymbolsData = async () => {
    try {
      const response = await getSymbollsData();
      console.log("Symbolsdata", response);
      setCoinsList(response);
    } catch (e: unknown) {
      console.log(e);
    }
  };
  return (
    <div>
      <CoinsTable
        selectedCoin={props.selectedCoin}
        setSelectedCoin={props.setSelectedCoin}
        coinsTableData={coinsList}
        chanId={0}
      />
    </div>
  );
};

export default SymbollsList;
