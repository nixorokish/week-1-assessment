console.log(`\nWelcome to the Password Validator Tool`)

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// constraint1 = uppercase
// constraint2 = lowercase
// constraint3 = at least 10 char
// constraint4 = at least 1 num
// constraint5 = special char

let constraint1 = false
let constraint2 = false
let constraint3 = false
let constraint4 = false
let constraint5 = false

specialChar = [`!@#$%^&*()-+.'"?<>+_`]

reader.question("\nPassword Requirements:\n"
+ "1. At least one uppercase char\n"
+ "2. At least one lowercase char\n"
+ "3. At least 10 characters\n"
+ "4. At least one number\n\n"
+ "Set your password:", function(input){
    for (i = 0; i < input.length; i++) {
        // console.log(input[i])
        // console.log(input[i].toUpperCase())
        if (input[i] === input[i].toUpperCase()) {
            constraint1 = true
        }
        if (input[i] === input[i].toLowerCase()) {
            constraint2 = true
        }
        if (input.length >= 10) {
            constraint3 = true
        }
        if (isNaN(input[i]) === false) {
            constraint4 = true
        }

        // console.log(`constraint1 = ${constraint1}\nconstraint2 = ${constraint2}\nconstraint3 = ${constraint3}`)
    } 
    if (constraint1 === true && constraint2 === true && constraint3 === true && constraint4 === true) {
        console.log(`\nSuccess`)
    } else {
        console.log(`\n`)
    } if (constraint1 === false) {
        console.log(`Error setting password: You need an uppercase letter in your password.`)
    } if (constraint2 === false) {
        console.log(`Error setting password: You need a lowercase letter in your password.`)
    } if (constraint3 === false) {
        console.log(`Error setting password: Your password must be at least 10 characters.`)
    } if (constraint4 === false) {
        console.log(`Error setting password: Your password needs a number.`)
    }
    console.log(`\n`)
    
    // if (input.length >= 10 && ) {
    //     console.log(`Success`)
    // } else {
    //     console.log(`\nError: Password needs to be at least 10 characters long`)
    // }
 
    reader.close()
})

// let hello = `Hello`
// console.log(hello)
// let upperHello = hello.toUpperCase
// console.log(upperHello)

// let x = 'f'
// let y = isNaN(x)
// console.log(y)