// const myFunc = (a, b) => {
//     console.log(a + b)
// }
// myFunc(2, 5) // 3
const arr = [20, 4, 5, 8, 9]

// const myFunc = (value, index) => {
//     if (value === 8) {
//         console.log("8 exists")
//     }
// }

// const result = arr.filter((value, index) => {
//     if (value > 4) {
//         return value
//     }
// // console.log(index)
// })
// console.log(result) // 5

// const result=arr.filter((value,index)=>{
// if(value>4){
//     return value
// }
// })
// console.log(result)
// every retuens true or false
// const result = arr.every((value, index) => {
//     return value > 1
// })
// console.log(result)

// for of loop to show all the values of array
// for (let result of arr) {
//     result = result + 3
//     console.log(result+3)
// }
// console.log(arr)
// for each loop to show all the values of array
// let total = 0
// arr.forEach((value, index) => {
//     // console.table(value)
//     total += value
// })
// console.log(total)
// map returns new array with new values
// const result = arr.map((value, index) => {
//     return value + 3
// })
// console.log(result)
// console.log(arr)

const result=arr.reduce((previousValue,value,index)=>{
return previousValue+value
})
console.log(result)
// console.log(previousValue)