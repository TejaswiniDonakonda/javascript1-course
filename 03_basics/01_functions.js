function sumOfTwoNumbers(num1, num2){
    // let result=num1+ num2;
    // return result;

    return num1+num2;
}
let result=sumOfTwoNumbers(2,3);
//console.log(result);

function isLogged(username){
    return `${username} just logged in`
}
//console.log(isLogged("Nyshadhaa"));

//============other way=================

function loginUserMessage(username ="Vasista "){ //if it should not show undefine we can give default value by giving like username=="sam"
    if(!username){
        //console.log(`please enter username`);
        return
    }
    return ` ${username} just logged in`
}
//console.log(loginUserMessage("Teju "));// if we give value here it will override default value.

const person={
    name:"Kanha",
    item:"flute",
    price:500
}

function userCart(anyobject){
    //console.log(`${anyobject.name} has brought ${anyobject.item} for ${anyobject.price} rs/-`);
}
userCart(person)

//==================other way to pass objects=====================

function handleObject(anyobject){

    console.log(`${anyobject.username} is the king of ${anyobject.kingdom}`)
}
handleObject({
    username:"Sri Rama",
    kingdom:"Ayodhya"
})

//=====passing array into a function======

const myArray=[150,200,600,800]

function secondValueOfArray(getArray){ //here we can give any name parameter like getarray, arraynumber or etc..
    
    return `second value from array is ${getArray[1]}`

}
console.log(secondValueOfArray(myArray));

















