// .......................................JavaScript 100 Questions..................................................................

// 1 Write a program to check if a number is even or odd.

// .................................. with out method  using the loop ...............................................................

let arr = [2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(`even number ${arr[i]}`);
  } else {
    console.log(`odd number ${arr[i]}`);
  }
}

// .................................. method ........................................................................................
let res = arr.filter((itme) => itme % 2 === 0);
let res1 = arr.filter((a) => a % 2 !== 0);
console.log(`Even number ${res}`);
console.log(`odd number ${res1}`);

// 2 Find the largest of three numbers.
let a = 15;
let b = 20;
let c = 30;

// .................................. Math.max() ...............................................................................

console.log("largest number is:", Math.max(a, b, c));


// .................................. uning with out method usnig the loop if else if..........................................

if(a >= b && a >= c){
   console.log("a is big number");
   
}else if(b >= a && b>c){
   console.log("b is big number");

} else{
    console.log("C is big number");
    
}
// ..................................  Using Ternary Operator  ...................................................

let largest = a > b ? (a > c ? a : c ) : (b > c ? b : c);
console.log(largest);

// 3 Swap two numbers without using a third variable.


// 4 Reverse a string without using built-in functions.


// ..................................  Using reverse , split , join method .........................................

let str = "SAGAR";

let res2 = str.split("").reverse().join("");
console.log(res2);



// 5 Count vowels and consonants in a string.
// 6 Check if a string is a palindrome.
// 7 Find the factorial of a number using recursion.
// 8 Print Fibonacci series up to n terms.
// 9 Check if a number is prime.
// 10 Find the sum of digits of a number.
