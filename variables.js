//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 
let sep = `------------------`
console.log(sep)
console.log(`Problem 1:`)

let myName = `kayleen`
console.log(`myName = ${myName}`)

console.log(sep)

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE
console.log(`Problem 2:`)
let faveNum = '12345'
console.log(`faveNum = ${faveNum}`)

console.log(sep)

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE
console.log(`Problem 3:`)
let lovesCode = true
console.log(`lovesCode = ${lovesCode}`)

console.log(sep)

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE
console.log(`Problem 4:`)
if (faveNum === 13) {
  console.log(`lucky 13!`)
} else {
  console.log(`not lucky 13`)
}

console.log(sep)

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE
console.log(`Problem 5:`)
for (let i = 0; i < 5; i++) {
  console.log(faveNum)
}

console.log(sep)