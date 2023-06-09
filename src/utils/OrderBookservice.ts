import { Index_Of_Amount, Index_Of_Total } from "../types/DataType";

// export const bidsMap=new Map<number,[number,number,number,number]>();
// export const asksMap=new Map<number,[number,number,number,number]>();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let minBid = 0;
//  const maxBid = 0;

const Initial_Total = 0;

export const updateMap = (
  itemTobeAdd: [number, number, number],
  asksMap: Map<number, [number, number, number, number]>,
  bidsMap: Map<number, [number, number, number, number]>
) => {
  const [price, count, amount] = itemTobeAdd;
  if (count !== 0) {
    if (amount < 0) {
      asksMap.set(price, [count, amount, Initial_Total, price]);
    } else {
      bidsMap.set(price, [count, amount, Initial_Total, price]);
    }
  }
};

//  export const calcTotalBid(index: number, itemValue: [number, number, number, number], list: KeyValue<number, [number, number, number, number]>[]): void {
//     if (index == 0) {
//       this.minBid = itemValue[this.INDEX_OF.AMOUNT];
//       itemValue[this.INDEX_OF.TOTAL] = itemValue[this.INDEX_OF.AMOUNT];
//     } else {
//       itemValue[this.INDEX_OF.TOTAL] = list[index - 1].value[this.INDEX_OF.TOTAL] + itemValue[this.INDEX_OF.AMOUNT];
//       if (index == this.LAST_INDEX)
//         this.maxBid = itemValue[this.INDEX_OF.TOTAL];
//     }
//   }

//  export const calcTotalAsk(index: number, itemValue: [number, number, number, number], list: KeyValue<number, [number, number, number, number]>[]): void {
//     if (index == 0) {
//       this.minAsk = itemValue[this.INDEX_OF.AMOUNT];
//       itemValue[this.INDEX_OF.TOTAL] = itemValue[this.INDEX_OF.AMOUNT];
//     } else {
//       itemValue[this.INDEX_OF.TOTAL] = list[index - 1].value[this.INDEX_OF.TOTAL] + itemValue[this.INDEX_OF.AMOUNT];
//       if (index == this.LAST_INDEX)
//         this.maxAsk = itemValue[this.INDEX_OF.TOTAL];
//     }
//   }

// export const calculateAsksTotal = (
//   index: number,
//   bidsMapItem: [number, number, number, number]
// ) => {
//   return "hehv";
// };
type KeyValue = {
  key: number;
  value: [number, number, number, number];
};

// export const updateBidsMap=(setBidsMapData:React.Dispatch<React.SetStateAction<Map<number, [number, number, number, number]>>>)=>{
//     setBidsMapData(bidsMap)
// }

export const calcTotalBid = (
  index: number,
  itemValue: [number, number, number, number],
  list: KeyValue[]
): void => {
  if (index === 0) {
    minBid = itemValue[Index_Of_Amount];
    itemValue[Index_Of_Total] = itemValue[Index_Of_Amount];
  } else {
    itemValue[Index_Of_Total] =
      list[index - 1].value[Index_Of_Total] + itemValue[Index_Of_Amount];
    //   if (index === LAST_INDEX) {
    //     maxBid = itemValue[INDEX_OF.TOTAL];
    //   }
  }
};
