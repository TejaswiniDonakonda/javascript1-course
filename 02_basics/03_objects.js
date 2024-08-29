//singleton
//object.create


//literal
const mySym=Symbol("key1");

const JsUser={
    name:"Tejaswini",
    age:20,
    [mySym]:"myKey1",
    mail:"abc@gmail.com",
    "fullname":"D Tejaswini"
}
//console.log(JsUser.mail);//can access in two methods
//console.log(JsUser["name"]);
//console.log(JsUser["fullname"])
//we cannot access fullname in other method cause key has declared within quotes.
//we can access symbol only in one way
//console.log(JsUser[mySym])


JsUser.mail="abc@gmail.com";
//console.log(JsUser.mail);
//Object.freeze(JsUser)//it will freez default values of JsUser. cannot override
JsUser.mail="142018@gmail.com";
//console.log(JsUser.mail);


JsUser.greeting=function(){
    console.log("Hello World")
}
console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log(`Hello Js User ${this.fullname}`)
}
console.log(JsUser.greetingTwo());












