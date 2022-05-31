import { AvailableTimesModel } from "../model/AvailableTimesModel.model";
import { availableTimesSchema, IAvailableTimes, AvTime } from "../schema/schemaAvailableTimes";

function padTo2Digits(num : Number) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date : Date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }

const calcAvailableTime=(day:IAvailableTimes)=>{

}

  const rangeHour = (arrayRange : Array<AvTime>)=>{
    const newArray =[]
    if (arrayRange.length == 1){
      return arrayRange[0]
    } 
    if (arrayRange.length == 0){
      return 
    } 

    let index = 0
    let minTime = Number(arrayRange[0].startHour.split(":")[0])
    for (const i in arrayRange){
      let time = Number(arrayRange[i].startHour.split(":")[0])
      if( minTime > time){
          minTime = time
          index = Number(i)
      }
      else if( minTime == time && Number(arrayRange[index].endHour.split(":")[0])  < Number(arrayRange[i].endHour.split(":")[0])){
        minTime = time
        index = Number(i)
    }
    }
    


  }