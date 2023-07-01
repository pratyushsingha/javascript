// // console.log("hello world")
// // let a = 24;
// // let b = 25;
// // let c = 26;
// // let result = (a * 10 + b * 10 + c * 10) / 10
// // console.log(result)
// function printTheValue(a,b,c) {
//     let result = (a * 10 + b * 10 + c * 10) / 10
//     result /= 20;
//     console.log(result)
// }
// printTheValue(1,2,3)
// printTheValue(4,5,6)
// printTheValue(7,8,9)
// printTheValue(10,11,12)
// printTheValue(13,14,15)
// printTheValue(16,17,18)
function intro(name, id) {
    console.log(`my name is ${name}. i am a great developer.please follow me on github.my github id is ${id}`)
}
intro("pratyush singha", "pratyushsingha")

function totalOfArray(arr = []) {
    let toral = 0;
    for (let i = 0; i < arr.length; ++i) {
        toral += arr[i];
    }
    return toral;
}
// const arr=[1,3,4,5];
// console.log(totalOfArray(arr))
let a = 21;
{
    let a = 30
    console.log(a)
}
console.log(a)

