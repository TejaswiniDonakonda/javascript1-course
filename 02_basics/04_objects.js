//const JsUser=new Object()
//const JsUser={}

const UserInfo={
    email:"abc@gmail.com",
    username:{
        fullname:{
            firstname:"Donakonda",
            lastname:"Tejaswini"
        }
    }
}
//to access nested values of object
// console.log(UserInfo.username.fullname.firstname); //it will print first name
// console.log(UserInfo)//it will print all info
// console.log(UserInfo.username.fullname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3={obj1,obj2} //it will print object under object

//const obj3=Object.assign(obj1,obj2) 

/*

    (target,source) source will getinto target and give whole in one object
    (obj1,obj2) here obj2 values will combine into obj1 object
    ({},obj1,obj2)here {} act as target and remaining will act as source so source will go under the target
*/
//other way to  combine objects is using spresd operator

const obj3={...obj1,...obj2}


console.log(obj3)


















