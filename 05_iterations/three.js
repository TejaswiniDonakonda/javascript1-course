//for of

const greetings="Hello People";

for (const greet of greetings) {
    //console.log(greet)
}


const array=[1,2,3,4,6,5,7,8]

for (const num of array){
    //console.log(num)
}

//maps

const map=new Map();
map.set('IN',"India");
map.set('Fr','France');
map.set('K','Korea');
map.set('E',"Europe") //map doesnot print duplicate values it will print unique values.

console.log(map);
