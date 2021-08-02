// variable

var myName = "Roman"; // string type variable.
var myAge = 17; // number type variable.
var inReltion = false; // boolen type variable.


// array

var myArray = [23, 43, 21, 13, 33, 35, 86, 37]; // number type array,,,

console.log(myArray.indexOf(23)); // array index... its start from 0.
console.log(myArray.length); // check array length.
myArray[1] = 34; // change array element.
myArray.pop(); // delete array element from last.
myArray.push(69); // add array element to last.
myArray.shift(); // delete array element from first.
myArray.unshift(21); // add array element to first.
console.log(myArray);


// condition

if(myAge >= 18){
    console.log("i love you");
}
else{
    console.log("come beck when you your age will be 18+");
}

// while loop

var i = 0;
while(i <= 10){
    console.log("love you bby");
    i++
}

// for loop
for(var i = 20; i >= 5; i--){
    console.log(i);
}