//Dates

let myDate=new Date();

// console.log(myDate);//2024-08-27T10:37:41.886Z

// console.log(myDate.toISOString());//2024-08-27T10:37:41.886Z
// console.log(myDate.toJSON()); //2024-08-27T10:37:41.886Z
// console.log(myDate.toLocaleString());//8/27/2024, 10:37:41 AM
// console.log(myDate.toString());//Tue Aug 27 2024 10:37:41 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Tue Aug 27 2024

//let createDate=new Date(2024,0,23);//mon jan 23 2024
let createDate=new Date("01-14-2024");
//console.log(createDate.toLocaleString());//1/14/2024, 12:00:00 AM


let timeStamp=Date.now()
console.log(timeStamp);
