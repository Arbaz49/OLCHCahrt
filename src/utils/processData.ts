import { Chartdata } from "../types/dataType";

const processChartData=(dataArray:Array<[number,number,number,number,number]>):Chartdata[]=>{
    let array: Chartdata[] = [];
    let entry: Chartdata = {x:new Date(), y:[0,0,0,0]};
    for (let i = 0; i < dataArray.length; i++) {
      entry = {
        x: new Date(dataArray[i][0]),
        y: [dataArray[i][1], dataArray[i][2], dataArray[i][3], dataArray[i][4]],
      };
      array=[...array,entry];
    }
    return array;
  }
  export{processChartData}