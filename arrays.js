// const array2 = [1,2,3,"true","om"];

//Note - arrays in Js create shallow copy means same reference points

// const array = new Array(1,2,3,"true","om");
// console.log(array2[0])

//methods in arrays
// array2.push(6);
// array2.pop()

//unshift add element to the 1st position
// array2.unshift(2) 


//shift removes the first element of the array
// array2.shift()

//array2.include(9)
//array2.indexof("om")

//join adds all element of an array into a string
// const newArr = array2.join()    //1,2,3,true,om

//slice, splice
//diff -> 1. slice don't manipulate orif=ginal array but splice do
    //    2. splice include =s the 2nd value but slice don't like (1,3) 3 will be included in splice
// const myArr = array2.slice(1,3)
// console.log("slice ", myArr)  //slice  [ 2, 3 ]
// console.log("original", array2) //original [ 1, 2, 3, 'true', 'om' ]


// const myArr1 = array2.splice(1,3)
// console.log("splice", myArr1)   //splice [ 2, 3, 'true' ]
// console.log("original", array2) // original [ 1, 'om' ]

const array1 = [1,2,3]
const array2 = [4,5,6]
// array1.push(array2);  //[ 1, 2, 3, [ 4, 5, 6 ] ]
// const newArr = array1.concat(array2) //[ 1, 2, 3, 4, 5, 6 ]
const allArr = [...array1, ...array2]  //[ 1, 2, 3, 4, 5, 6 ]
// console.log(allArr);

//flat - this flats an arry based onn the depth parameter it takes
// const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const flatArr = anotherArr.flat(Infinity)
// console.log(flatArr)

// To covert anything into the arra helpful  when getting the rsponse in any form like object
// but we can iterate only on the array  so
// console.log(Array.isArray("shubham"))  //false
// console.log(Array.from("shubham"))  // ['s', 'h', 'u','b', 'h', 'a','m']
console.log(Array.from({name: "shubham"}));  // []
// let a1 = 100
// let a2 = 200
// console.log(Array.of(a11,a2)) // [100,200]




















