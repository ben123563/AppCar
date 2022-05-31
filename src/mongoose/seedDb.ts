import {CarModel} from '../model/CarModel.model'
import { ICar } from "../schema/schemaCar"
import { AvTime, IAvailableTimes } from "../schema/schemaAvailableTimes"
import {AvailableTimesModel} from '../model/AvailableTimesModel.model'
import { UserModel } from '../model/UserModel.model';
import { IUser } from '../schema/schemaUser';

const cars =[
{plate:20618987, type:'toyota', img:'https://www.icar.co.il/_media/images/models/new/toyota/c-hr/new/toyota-c-hr-new-Front.jpg'},
{plate:22163211, type:'hyundai', img:"https://www.hyundaimotors.co.il/wp-content/uploads/2021/10/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%A8%D7%90%D7%A9%D7%99%D7%AA-3.png"},
{plate:34129553, type:'mazda', img:'https://www.topgear.com/sites/default/files/cars-car/image/2021/02/cx-5-skyactiv-g-awd-gt-sport-auto-action-3.jpg'},
{plate:67413213, type:"audi", img:'https://www.audi.co.il/wp-content/uploads/2017/07/%D7%97%D7%99%D7%A6%D7%95%D7%A0%D7%99-%D7%A1%D7%93%D7%90%D7%9F-2-1.jpg'},
{plate:37032472, type:'siat', img:'https://scalethumb.leparking.fr/unsafe/331x248/smart/https://cloud.leparking.fr/2021/04/09/06/33/seat-ibiza-siat-ibiza-diesel-6cv-tdi_8060544250.jpg'},
{plate:64826310, type:'ford', img:'https://imgd.aeplcdn.com/642x336/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=75'},
{plate:52161209, type:'kia', img:'https://kia-israel.co.il/wp-content/uploads/2019/12/42637_a_320x164_sg.png'},
{plate:23010428, type:'nissan', img:'https://cars.usnews.com/static/images/Auto/izmo/i159614887/2022_nissan_altima_angularfront.jpg'},
{plate:53280102, type:'citroen', img:'https://cdn.motor1.com/images/mgl/rxmAx/s1/nuevo-citroen-c3-asi-es-la-version-brasilena-que-llegara-a-la-argentina.webp'},
{plate:10320456, type:'fiat', img:'https://cdn.motor1.com/images/mgl/Bqv64/s1/fiat-panda-2020.jpg'}
]


const defaultCar:ICar = {
    plate: 0,
    type: "",
    km: '0',
    diffects: [],
    img: "",
    booked: [],
  }

export const addCars = async()=>{
   // const arrayCar : Types.ObjectId[] =[]
    for (const car in cars){
        defaultCar.plate = cars[car].plate
        defaultCar.type = cars[car].type
        defaultCar.img = cars[car].img
        const newCar =new CarModel(defaultCar)
        
        try {
            await newCar.save()
            //arrayCar.push(newCar._id)
        } 
        catch (error) {
            console.log(error)
        }
    }
}

export const addAvailableTimes = async()=>{
    let availableHours:AvTime[][]=[]
    for (let i = 0; i<=10; i++){
        availableHours[i]=[]
        availableHours[i].push({startHour: "6:00" , endHour: "24:00"})
    }
    let defaultAvailable : IAvailableTimes = {
        date: new Date(),
        cars: await CarModel.find({}),
        availableHours:availableHours
    }
    try {
        for (let i = 0; i<=60; i++){
            const newAvailableTimes =new AvailableTimesModel(defaultAvailable)
            try {
                await newAvailableTimes.save()
            } 
            catch (error) {
                console.log(error)
            }
            defaultAvailable.date.setDate(defaultAvailable.date.getDate()+1)
        }
    } catch (error) {
        console.log("error with find cars"); 
    }
   
    
}

export const addUsers = async()=>{
    let defaultUser : IUser = {
        name: "ben",
        id: 213357478,
        password: "ben123456",
        "P.N":"0504557270",
        booked:[]
    }
    const newUser =new UserModel(defaultUser)
    try {
        await newUser.save()
    } 
    catch (error) {
        console.log("error with user")
    }
        
   
    
}

export const deleteDb=async()=>{
    try {
        await CarModel.deleteMany({})
        await AvailableTimesModel.deleteMany({})
        await UserModel.deleteMany({})
    } catch (error) {
        console.log("error while deleteing");
    }
}
