const INITIAL_TOTAL = 0;
export type OrderBookPayload = {
    event: string;
    channel: string;
    symbol: string;
};
export type UpdatedValuesFromWs = [number, number, number];

export const bidsMap: Map<number, [number, number, number, number]> = new Map();
export const asksMap: Map<number, [number, number, number, number]> = new Map();
// const bookPayload: OrderBookPayload;
let minBid: number;
let maxBid: number;
let minAsk: number;
let maxAsk: number;
//   let  INDEX_OF = {
//   COUNT: 0,
//   AMOUNT: 1,
//   TOTAL: 2,
//   PRICE: 3
// }
//  let  LAST_INDEX = 18;


// export const calcTotalBid=(index: any, itemValue: [number, number, number, number], list: typeof bidsMap): void=> {
//     if (index == 0) {
//       minBid = itemValue[INDEX_OF.AMOUNT];
//       itemValue[INDEX_OF.TOTAL] = itemValue[INDEX_OF.AMOUNT];
//     } else {
//       itemValue[INDEX_OF.TOTAL] = list[index - 1].value[INDEX_OF.TOTAL] + itemValue[INDEX_OF.AMOUNT];
//       if (index == LAST_INDEX)
//         maxBid = itemValue[INDEX_OF.TOTAL];
//     }
//   }


  export const  updateBookMap=(updatedValue: UpdatedValuesFromWs ): void=> {
    const [price, count, amount] = [...updatedValue];
      if (count != 0) {
        if (amount < 0) {
          asksMap.set(price, [count, Math.abs(amount), INITIAL_TOTAL, price]);
        } else {
          bidsMap.set(price, [count, Math.abs(amount), INITIAL_TOTAL, price]);
        }
      } else {
        asksMap.delete(price);
        bidsMap.delete(price);
      }
     if (updatedValue ) {
      updatedValue.forEach(([price, count, amount]: any) => {
        if (amount < 0) {
          asksMap.set(price, [count, Math.abs(amount), INITIAL_TOTAL, price]);
        } else {
          bidsMap.set(price, [count, amount, INITIAL_TOTAL, price])
        }
      });
    }
  } 


  // export const calcTotalBid=(index: number, itemValue: [number, number, number, number], list: Map<number, [number, number, number, number]>[]): void=> {
  //   if (index == 0) {
  //     minBid = itemValue[INDEX_OF.AMOUNT];
  //     itemValue[INDEX_OF.TOTAL] = itemValue[INDEX_OF.AMOUNT];
  //   } else {
  //     itemValue[INDEX_OF.TOTAL] = list[index - 1].value[INDEX_OF.TOTAL] + itemValue[INDEX_OF.AMOUNT];
  //     if (index == LAST_INDEX)
  //       maxBid = itemValue[INDEX_OF.TOTAL];
  //   }
  // }

//  const  calcTotalAsk=(index: number, itemValue: [number, number, number, number], list: KeyValue<number, [number, number, number, number]>[]): void =>{
//     if (index == 0) {
//       this.minAsk = itemValue[this.INDEX_OF.AMOUNT];
//       itemValue[this.INDEX_OF.TOTAL] = itemValue[this.INDEX_OF.AMOUNT];
//     } else {
//       itemValue[this.INDEX_OF.TOTAL] = list[index - 1].value[this.INDEX_OF.TOTAL] + itemValue[this.INDEX_OF.AMOUNT];
//       if (index == this.LAST_INDEX)
//         this.maxAsk = itemValue[this.INDEX_OF.TOTAL];
//     }
//   }