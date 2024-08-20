const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
 // output as [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ], itconsider dc heros as 3 element.


// const allHeros= marvel_heros.concat(dc_heros)
// console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros] // concat and spread operator works as same, spread is used nowadays.
//console.log(all_new_heros);

const another_array = [1, 2, 3, 4, [6,3,8], 5, [8, 5,[6,4, 6]]]
const real_another_array = another_array.flat(Infinity) // flat works as to concat all the arrays within arrays.
console.log(real_another_array);


console.log(Array.isArray("Animesh"))
console.log(Array.from("Animesh")); // it will convert the into array [    'A', 'n', 'i',    'm', 'e', 's',    'h'  ] 
console.log(Array.from({name: "Animesh"}));  // it will give empty array ** interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // output as [ 100, 200, 300 ]





