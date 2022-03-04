/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let sep = `------------------`
console.log(sep)
console.log(`Problem 1:`)
let gitDefinition = `git is a version control system for files`
console.log(`gitDefinition = ${gitDefinition}`)

console.log(sep)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
console.log(`Problem 2:`)
let gitHubDefinition = `GitHub is a hub for storing and making available the files that result from git version control`
console.log(`gitHubDefinition = ${gitHubDefinition}`)

console.log(sep)

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
console.log(`Problem 3:`)
let gitInitDefinition = `git init is a command that creats a local git repository`
console.log(`gitInitDefinition = ${gitInitDefinition}`)

console.log(sep)

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
console.log(`Problem 4:`)
let gitCloneDefinition = `git clone is a command that takes a URL as an argument and clones a repository from GitHub to your local machine`
console.log(`gitCloneDefinition = ${gitCloneDefinition}`)

console.log(sep)

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

console.log(`Problem 5:`)
let gitStatusDefinition = `git status is a command that describes the repository and any changes that have not yet been committed`
console.log(`gitStatusDefinition = ${gitStatusDefinition}`)

console.log(sep)

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
console.log(`Problem 6:`)
let gitAddDefinition = `git add adds files to be tracked in the local repository`
let gitAddCode = `git add .`
console.log(`gitAddDefinition = ${gitAddDefinition} \ngitAddCode = ${gitAddCode}`)

console.log(sep)

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
console.log(`Problem 7:`)
let gitCommitDefinition = `git commit creats a snapshot of the files that are being tracked`
let gitCommitCode = `git commit -am "initial commit"`
console.log(`gitCommitDefinition = ${gitCommitDefinition} \ngitCommitCode = ${gitCommitCode}`)

console.log(sep)

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
console.log(`Problem 8:`)
let gitPushDefinition = `git push pushes your committed changes from your local repository to your GitHub respository`
console.log(`gitPushDefinition = ${gitPushDefinition}`)

console.log(sep)