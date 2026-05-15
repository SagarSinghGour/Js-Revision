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


// ..................................  Using reverse , split , join method ..............................................

let str = "SAGAR";

let res2 = str.split("").reverse().join("");
console.log(res2);


// using loop 


let str = "hello";
let reverse = "";
for(let i=str.length-1; i>=0; i--){
    reverse += str[i]
}
console.log(reverse);


// function with return

function reverseString(str){
    let reverse = '';
    for(let i=str.length-1; i>=0; i--){
        reverse += str[i]
    }
    return reverse
}

let result = reverseString('sagar');
console.log(result);

// -----------------------------------------------Check if a string is a palindrome..-------------------------------------------
 
// using the loop but reverse loop using this 
let str = 'madam';
let reverse = "";
for(let i=str.length-1; i>=0; i--){
    reverse += str[i]
    
} 
if(str === reverse){
        console.log(true);
        
    }else {
        console.log(false);
        
    }

// using function 

    function checkPalindrome(str) {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    return str === reverse;
}

 let res = checkPalindrome("madam")
 console.log(res);
 

// using function 

let str = "madam"
let res = str === str.split("").reverse().join("")
console.log(res);

// Reverse a number (e.g., 123 → 321).

// using the loop formet
let num = 123 ;
let num2 = num.toString()
let reverse = '';
for(let i=num2.length-1; i>=0; i--){
    reverse += num2[i]
}
console.log(reverse);

// using  function and return

 function checkreverse(num){
    let num2 = num.toString()
    let reverse = "";
    for(let i=num2.length-1; i>=0;  i--){
        reverse += num2[i]
    }
    return reverse
 }
 let res = checkreverse(12345)
 console.log(res);

// using  method

let num = 12345;
let res = num.toString().split("").reverse().join("");
console.log(res);

// Find the factorial of a number using recursion.


// using the factorial with recursion
function factorial(n){
if(n === 0 || n === 1){
    return 1;
}
    return n * factorial(n-1)
}
let num = 5;
console.log(factorial(num))


// using the loop formet 

let num =5; 
let fac =1;
for(let i=1; i<=num; i++){
    fac *= i
}
console.log(fac);


// using the function and return 

function checkfactorial(num){
    let factorial = 1;
    for(let i=1; i<=num; i++){
        factorial *= i
    }
    return factorial
}

let main = checkfactorial(5)
console.log(main);


// using method
 let num =5 ;
 let factorial = [... Array(num).keys()].reduce((item, value ) =>item * (value + 1),1)
 console.log(factorial);
 
 




// 5 Count vowels and consonants in a string..........



// ..................................  Using vowels , split , join method .........................................
// 6 Check if a string is a palindrome.
// 7 Find the factorial of a number using recursion.
// 8 Print Fibonacci series up to n terms.
// 9 Check if a number is prime.
// 10 Find the sum of digits of a number.
