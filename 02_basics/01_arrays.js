// array
//How to declare

const myArr = [0, 1, 2, 3, 4, 5,]
const myHeros = ["superman", "Shaktiman"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// //myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()  // join will bind the array and convert it into string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // 1st and second is included 3rd is not/last range is npot included.
console.log(myn1)
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // Splice manipulate orignal array as it removes the portion from orignal array.
console.log("C ", myArr);
console.log(myn2);











