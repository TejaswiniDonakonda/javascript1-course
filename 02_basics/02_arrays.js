let my_heros=['batman','Thor','Hulk'];
let dc_heros=['superman','alien'];

//let all_heros=my_heros.concat(dc_heros);

let all_heros=[...my_heros,...dc_heros];
console.log(all_heros);
console.log(Array.isArray("Teju"));//false
console.log(Array.from("Teju"));//['T','e','j','u']

let newArray=[1,2,3,4,[5,6,7],7,8,[9,10,[1,2,3,4]]]

console.log(newArray.flat(Infinity)); //[1,2,3,4,5,6,7,7,8,9,10,1,2,3,4]

let score1=100;
let score2=300;
let score3=400;
console.log(Array.of(score1,score2,score3));//[100,300,400]
