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

specialChar = `!@#$%^&*()-+.'"?<>+_~{}[]`

reader.question("\nPassword Requirements:\n"
+ "1. At least one uppercase char\n"
+ "2. At least one lowercase char\n"
+ "3. At least 10 characters\n"
+ "4. At least one number\n"
+ "5. At least one special character\n\n"
+ "Set your password: ", function(input){
    for (i = 0; i < input.length; i++) {
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
        for (let i = 0; i < input.length; i++) {
            if (specialChar.includes(input[i])) {
                constraint5 = true
            }
        }

        // console.log(`constraint1 = ${constraint1}\nconstraint2 = ${constraint2}\nconstraint3 = ${constraint3}`)
    } 
    if (constraint1 === true && constraint2 === true && constraint3 === true && constraint4 === true && constraint5 === true) {
        if (input.length < 15) {
            console.log(`\nSuccess`)
        } else {
            console.log(`\nSuccess. Your password is strong. Nice.`)
        }
    } else {
        console.log(`\n`)
        console.log(`ERROR SETTING PASSWORD. Your password still needs:`)
    } if (constraint1 === false) {
        console.log(`An uppercase letter`)
    } if (constraint2 === false) {
        console.log(`A lowercase letter`)
    } if (constraint3 === false) {
        console.log(`At least 10 characters`)
    } if (constraint4 === false) {
        console.log(`A number`)
    } if (constraint5 === false) {
        console.log(`A special character`)
    }
    console.log(`\n`)

    reader.close()
})