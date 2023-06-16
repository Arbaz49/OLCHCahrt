/* eslint-disable @typescript-eslint/no-explicit-any */
import { Index_Of_Amount, Index_Of_Total } from "../types/DataType";

// export const bidsMap=new Map<number,[number,number,number,number]>();
// export const asksMap=new Map<number,[number,number,number,number]>();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const minBid = 0;
export const maxBid = 0;
export const bidsMap = new Map<number, [number, number, number, number]>();
export const asksMap = new Map<number, [number, number, number, number]>();
const Initial_Total = 0;
export const updateMap = (
  itemTobeAdd: [number, number, number],
  asksMap: Map<number, [number, number, number, number]>,
  bidsMap: Map<number, [number, number, number, number]>
) => {
  const [price, count, amount] = itemTobeAdd;
 if (itemTobeAdd.length >5 ) { 
    itemTobeAdd.forEach(([price, count, amount]:any) => {
      if (amount < 0) {

        asksMap.set(price, [count, Math.abs(amount), Initial_Total, price]);
      } 
      else{

        bidsMap.set(price, [count, amount, Initial_Total, price]);
      }
    });
  }else   if (
    typeof price === "number" && //sometime data is coming in weird format like "1.038399.73783.383" thats why checking type here
    typeof count === "number" &&
    typeof amount === "number"
  ) {
    if (count !== 0) {
      if (amount < 0) {
        asksMap.set(price, [count, Math.abs(amount), Initial_Total, price]);
      } else {
        bidsMap.set(price, [count, Math.abs(amount), Initial_Total, price]);
      }
    }
  }
};

export const calculateTotal = (
  index: number,
  list: any[][],
  item: [number, number, number, number],
  tableType: string //asks or bidsTable
): void => {
  if (tableType ==="bids") {
    if (index === 0) {
      item[Index_Of_Total] = item[Index_Of_Amount];
    } else {
     
      item[Index_Of_Total] = item[Index_Of_Amount] + list[index][1][Index_Of_Total];
    }
  } else {
    if (index === 0) {
      item[Index_Of_Total] = item[Index_Of_Amount];
    } else {
    
      item[Index_Of_Total] = item[Index_Of_Amount] + list[index][1][Index_Of_Total];
    }
  }
};
