
let a=133;
const b=30;

if(true){
    let a=10;
    const b=30;
}
//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const userFullname="Tejaswini"
    function two(){
        const website=" Google";
        console.log(userFullname + website)
    }
    //console.log(website);
    two()
}
//console.log(userFullname)
one()  //child can access parent elements but parent cannot access child's elements/values.

console.log(addOne(5)) //for this kind of functions we can access before declaration too

function addOne(num1){
    return num1+1
}
//addOne(5) //we can call here or can call top of the function


//console.log(addTwo(6)) //in this cases Cannot access 'addTwo' before initialization
const addTwo=function (num2){
    return num2+1
}
addTwo(5) //only can access after initializing



