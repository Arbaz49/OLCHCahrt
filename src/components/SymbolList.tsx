import React, { useEffect, useState } from "react";
import { getSymbollsData } from "../utils/Services";
import CoinsTable from "./CoinsTable";
import { ChartProps, CoinsType } from "../types/DataType";

const SymbollsList = (props: ChartProps) => {
  const [coinsList, setCoinsList] = useState<CoinsType[]>([
    ["", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  useEffect(() => {
    handleSymbolsData();
  }, []);

  const handleSymbolsData = async () => {
    try {
      const response = await getSymbollsData();
      console.log("Symbolsdata", response);
      setCoinsList(response);
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <div>
      <h2>SymbolsList Component</h2>
      <div>
        <h4>Selected :{props.selectedCoin}</h4>
      </div>
      <CoinsTable
        setselcetedCoin={props.setSelectedCoin}
        coinsTableData={coinsList}
      />
    </div>
  );
};

export default SymbollsList;
