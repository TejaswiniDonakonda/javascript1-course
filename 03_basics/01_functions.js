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
        console.log(`please enter username`);
        return
    }
    return ` ${username} just logged in`
}
console.log(loginUserMessage("Teju "));// if we give value here it will override default value.



