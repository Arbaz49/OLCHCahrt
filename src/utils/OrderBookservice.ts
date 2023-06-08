export const bidsMap=new Map<number,[number,number,number,number]>();

 export const asksMap=new Map<number,[number,number,number,number]>();
 export const bidsArray:unknown[]=[];
 export const asksArray:unknown[]=[];


const Initial_Total=0;

 export  const updateMap=(itemTobeAdd:[number,number,number]):void=>{
    const [price,count,amount]=itemTobeAdd
    if(count !==0){
        if(amount< 0){

            asksArray.push([count,amount,Initial_Total,price]);
        } 
        else{

            bidsArray.push([count,amount,Initial_Total,price]);   
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


 export const calculateAsksTotal=(index:number,bidsMapItem:[number,number,number,number])=>{
    return "hehv";
 }


export  const updateSelectedCoin=(value:string,updateSelecteCoin:React.Dispatch<React.SetStateAction<string>>)=>{

   value && updateSelecteCoin(value)
}