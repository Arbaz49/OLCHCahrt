import { Index_Of_Amount, Index_Of_Total } from "../types/DataType";

// export const bidsMap=new Map<number,[number,number,number,number]>();
// export const asksMap=new Map<number,[number,number,number,number]>();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export let minBid = 0;
export let maxBid = 0;
export const bidsMap = new Map<number, [number, number, number, number]>();
export const asksMap = new Map<number, [number, number, number, number]>();
const Initial_Total = 0;

export const updateMap = (
  itemTobeAdd: [number, number, number],
  asksMap: Map<number, [number, number, number, number]>,
  bidsMap: Map<number, [number, number, number, number]>
) => {
  const [price, count, amount] = itemTobeAdd;
  if (
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
    } else {
      if (amount > 0) {
        bidsMap.delete(price);
      } else {
        asksMap.delete(price);
      }
    }
  }
};

export const calculateTotal = (
  index: number,
  list: any[][],
  item: [number, number, number, number],
  tableType: string
): void => {
  if (tableType == "bids") {
    if (index === 0) {
      minBid = item[Index_Of_Amount];
      item[2] = item[1];
    } else {
      if (index == 20) {
        maxBid = item[Index_Of_Total];
      }
      item[2] = item[1] + list[index][1][2];
    }
  } else {
    if (index === 0) {
      minBid = item[Index_Of_Amount];
      item[2] = item[1];
    } else {
      if (index == 20) {
        maxBid = item[Index_Of_Total];
      }
      item[2] = item[1] + list[index][1][2];
    }
  }
};
