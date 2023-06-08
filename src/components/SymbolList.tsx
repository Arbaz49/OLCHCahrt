import React, { useEffect, useState } from "react";
import { getSymbollsData } from "../utils/Services";
import CoinsTable from "./CoinsTable";
import { ChartProps, CoinsType } from "../types/DataType";
import { Initial_Number } from "../utils/Constants";

const SymbollsList = (props: ChartProps) => {
  const [coinsList, setCoinsList] = useState<CoinsType[]>([
    ["", Initial_Number, Initial_Number, Initial_Number, Initial_Number, Initial_Number,Initial_Number, Initial_Number, Initial_Number, Initial_Number, Initial_Number],
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
        setselcetedCoin={props.setSelectedCoin}
        coinsTableData={coinsList}
      />
    </div>
  );
};

export default SymbollsList;
