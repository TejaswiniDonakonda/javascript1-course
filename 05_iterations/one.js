//for

for(let index=0;index<10;index++){
    const element=index;
    //console.log(element)
}

let array=["Krishna","Kanha","Keshava","Madhava","Achyutha","Vaasudeva"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //console.log(element)
    
}

//break and continue

for (let index = 0; index < 10; index++) {
    const element = index;
    if(index==5){
        console.log("Yes we Skipped it")
       continue  
        
    }else if(index==8){
        break
    }
    console.log(element)
    
}