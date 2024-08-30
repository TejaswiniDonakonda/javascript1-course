//IIFE-Imediately Invoked Function Expressions

(function chai(){
    console.log(`DB Connected`)
})();

(()=>{
    console.log(`This too got connected`)

})();

//if we required to pass parameters....

(function code(name){
    console.log(`${name}, it is connected`)
})('Teju');
((number)=>{
    console.log(`Hey,Data got connected on ${number} port`)

})(1420);