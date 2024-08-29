//const JsUser=new Object()
//const JsUser={}

const tinderUser={
    email:"142018@gmail.com",
    name:"Maadhavaa",
    isLoggedIn:false
}

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
//console.log(obj3)

const users=[
    {
        name:"Keshava",
        id:1
    },
    {
        name:"Vaasudeva",
        id:2
    }
]
// console.log(users[1].name)

// console.log(tinderUser);
// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));

const course={
    coursename:"JavaScript",
    price:300,
    instructor:"Krishna"
}
//object de-structring [we cannot write repeatedly to access values of object by writing course.coursename or course.price etc]
//in such cases this object-destructring is helpful

const {coursename}=course
console.log(coursename);



























