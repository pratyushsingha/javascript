console.log(Math.round(4.6)) //round of the float

console.log(Math.floor(4.8)) //lowest number return kore

console.log(Math.ceil(4.2)) //highest number return kore

console.log(Math.trunc(34.223442)) //decimal r pr jai thakuk na kno return korbe nah

console.log(Math.sign(-2)) //0 hole 0 return korbe, positive hole 1 return korbe, negative hole -1 return korbe

console.log(Math.pow(2, 3)) //power of a number

console.log(Math.sqrt(25)) //square root of a number

console.log(Math.abs(-5)) //absolute value of a number

const abs = (a, b) => {
    return Math.abs(a - b);
}
console.log(abs(5, 100))


const angleInDegree = 30 * Math.PI / 180
const a = Math.sin(angleInDegree)
console.log(a) //value of sin 30


console.log((Math.random() * 10).toFixed(0)) //random number generate kore

console.log(Math.log2(8)) //log of a number




const b = new Date(4,4,12,5)
console.log(b) //current date and time

