import { Index_Of_Amount, Index_Of_Total } from "../types/DataType";

// export const bidsMap=new Map<number,[number,number,number,number]>();
// export const asksMap=new Map<number,[number,number,number,number]>();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// let minBid = 0;
//  const maxBid = 0;
  export const bidsMap = new Map<number, [number, number, number, number]>();
  export const asksMap = new Map<number, [number, number, number, number]>();
const Initial_Total = 0;

export const updateMap = (
  itemTobeAdd: [number, number, number],
  asksMap: Map<number, [number, number, number, number]>,
  bidsMap: Map<number, [number, number, number, number]>
) => {
  const [price, count, amount] = itemTobeAdd;
  if(typeof price==="number" && typeof count==="number" && typeof amount ==="number"){

    if (count !== 0) {
      if (amount < 0) {
        asksMap.set(price, [count, amount, Initial_Total, price]);
      } else {
        bidsMap.set(price, [count, amount, Initial_Total, price]);
      }
    }else {
      if (amount > 0) {
        bidsMap.delete(price);
      } else {
        asksMap.delete(price);
      }
    }
  }
};
[[1],[2],[3]]


export const calculateTotal=(index:number,list:any[],item:[number,number,number,number],tableType:string):void=>{
// const prev=list[index-1]
if(tableType=="bids"){

  if(index===0){
   item[2]=item[1]
  }else{
  item[2]=item[1]+list[index][1][2]

}
}else{
  if(index===0){
    item[2]=item[1]
   }else{
   item[2]=item[1]+list[index][1][2]
 
 }
}
}

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
