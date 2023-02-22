let myVar;
myVar = 23;
console.log(myVar, (typeof myVar));

myVar= String(23)
console.log(myVar, (typeof myVar));

let booleanValue;
booleanValue = true;
console.log(booleanValue, (typeof booleanValue));
booleanValue = String(true);
console.log(booleanValue, (typeof booleanValue));

let date = String(new Date());
console.log(date, (typeof date));

let arr= String([2,4,4,56]);
console.log(arr.length, (typeof arr));

let i = 2;
// console.log(i.toString());

let strI= Number("2334")
strI= Number('2343')
console.log(strI, (typeof strI));

let number= parseFloat('34.2457');
// to show number after rounded decimel
console.log(number.toFixed(100), (typeof number));


// type coersion

let myStr='23';
let myNum= 658;

console.log(myNum + myStr);