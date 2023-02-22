// primitive datatype

let name ='pratyush';



// string
console.log('My name is '+ name);
console.log('Data type is ' + (typeof name));

// numbers
let marks = 34;
console.log('datatype is ' + (typeof marks));

// boolean
let isDriver = true;
console.log('datatype is ' + (typeof isDriver));

// null 
let nullVar = null;
console.log('datatype is ' + (typeof nullVar));

// undefined
let unDef = undefined;
console.log('datatype is ' + (typeof unDef));


// reference datatype

myArr =[12,25,5,47];
console.log('datatype is ' + (typeof myArr));

// object literrals
let stMarks={
    harr:3,
    subha:23,
    angshu:4
}
// console.table(stMarks)

function findName() {
    
}
console.log(typeof stMarks)
console.log(typeof findName)

let date = new Date();
console.log(typeof date)