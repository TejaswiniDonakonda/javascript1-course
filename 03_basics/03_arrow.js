const person={
    username:"Hala",
    price:2020,

    welcomeMessage:function(){
       
        console.log( `${this.username}, welcome!!`);
        
        //console.log(this)
    }
    
  
}
//console.log(this)

// console.log(person.welcomeMessage());
// person.username="Hamza"
// console.log(person.welcomeMessage());

// function myfun(){
//     let username="Teju"

//     //console.log(this.username);
    
// }
// myfun();

// const myFun=()=>{
//     console.log(this)
// }
// myFun()

//arrow function
const sumOfTwo=(num1,num2)=>{
    return num1+num2
}
console.log(sumOfTwo(4,3));

//implicit return of arrow function in this, not required to write return
//const sumingOfTwo=(n1,n2)=> n1+n2
//console.log(sumingOfTwo(5,4));

const sumingOfTwo=(n1,n2)=> (n1+n2)
console.log(sumingOfTwo(5,4));













