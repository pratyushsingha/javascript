var str = 'this is a string';
console.log(str.indexOf('a'));
console.log(str.indexOf('is'));
console.log(str.lastIndexOf('is'));

// substring from a string
var substr = str.slice(1,7)
console.log(substr);

var substr1 = str.substr(1,7);
console.log(substr1);

var replaced = str.replace('string','pratyush')
// console.log(str);
console.log(replaced);

// upper case
console.log(str.toUpperCase())
// lowercase
console.log(str.toLowerCase())
// for concatination
var newString = str.concat(' bu harry')
console.log(newString)

// to trim white spaces
var strWithWhiteSpaces ='                   this contents white spaces       ';
console.log(strWithWhiteSpaces);
console.log(strWithWhiteSpaces.trim());
// TO EXTRACT CHARRACTERS
var char3 = str.charAt(3)
console.log(char3);


var char3 = str.charCodeAt(3)
console.log(char3);

