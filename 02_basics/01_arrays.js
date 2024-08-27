//arrays
const myArr=[2,3,4,"SG",6,7,"TT"];

const myArr2=new Array(1,2,2,3,4);

//console.log(myArr[1]);

//Array Methods

myArr.push("Kanha");
//console.log(myArr); 

const newArray=myArr.join();
//console.log(newArray);

//splice,slice

//with slice(1,3) it will not include third element
//with splice(1,3)it will omit upto three and will print other

console.log("A",myArr);

let n1=myArr.slice(0,3);

console.log(n1)
console.log("B",myArr);

let n2=myArr.splice(0,3);

console.log(n2);
console.log("C",myArr);


