const userEmail=[]

if(userEmail){
    console.log("Got it");
    
}else{
    console.log("Not yet got it");
    
}

//falsy values
// false,0,-0,Bigint (0n),"",null,undefined,NaN

//Truthy values
//true, "0",'false'," ",[],{},function(){}

//Nullish coalescing operator(??):null undefined

let val1;
//val1=5??10 //will print 5

val1= null ?? 80 //will print 20



//Ternary Operator

const ice=100
ice<=80 ? console.log("Less"):console.log("More")


console.log(val1)