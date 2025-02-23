//no.1
let =a=4
let =b=3
//console.log(a>b);
//console.log(a>=b);
//console.log(a<b);
//console.log(a<=b);
//console.log(a==b);
//console.log(a===b);
//console.log(a!=b);
//console.log(a!==b);
//console.log(a!=`b`);
//console.log(a===`b`);


//no.2
let myAge = 250;
let yourAge = 25;

console.log("My age:", myAge);
console.log("Your age:", yourAge);

let MyAge = 250;
let YourAge = 25;
let ageDifference = myAge - yourAge;

console.log(`I am ${ageDifference} years older than you.`);

//no.2

let challenge = "30 Days Of JavaScript";
let string = "string";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLocaleLowerCase());
console.log(challenge.substring(0,2));
console.log(challenge.substring(3));
console.log(challenge.includes("script"));
console.log(challenge.split(""));
console.log(challenge.split(""));
let companies ="Google, Microsoft, Facebook, Twitter";
console.log(companies.split(","))
console.log(challenge.replace("javascript,python"))

//no.3

let str = "30 Days Of JavaScript";
let char = str.charAt(15);
console.log(char);

//no.4

let today = new Date();
let year = today.getFullYear();
console.log(year);

//no.5

let Today = new Date();
let month = today.getMonth() + 1; // Adding 1 because getMonth() returns months from 0-11
console.log(month);

//no.6

const toDay = new Date();
console.log(today.toDateString()); // Example output: "Sun Feb 23 2025"

//no.7

const TOday = new Date();
const dayNumber = today.getDay();
console.log(dayNumber); // Example output: 0 for Sunday, 1 for Monday, etc.

//no.8

const todAy = new Date();
const hours = today.getHours();
console.log(hours); // Output: Current hour in 24-hour format (0-23)

//no.9

const now = new Date();
const minutes = now.getMinutes();
console.log(minutes); // Output: Current minutes (0-59)

//no.10

const Now = Date.now(); // Get current time in milliseconds
const secondsElapsed = Math.floor(now / 1000); // Convert milliseconds to seconds
console.log(secondsElapsed);