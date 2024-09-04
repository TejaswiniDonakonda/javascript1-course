const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network

    setTimeout(function(){
        console.log("Async task completed")
        resolve()
        
    }, 1000);
});

promiseOne.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Task2 got completed')
        resolve()
    },1000) 
}).then(function(){
    console.log("Async 2 got resolved")
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Krishna", password:'1234'})
        }else{
            resolve({"ERROR: Something went wrong"})
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("Finaly something has done"))