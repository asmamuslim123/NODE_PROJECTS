//this line is called a shebang, it tells the us to run it with node.js

// import the 'inquirer' module, which is a comand line interface for Node.js
import inquirer from "inquirer";

//declare a constant 'answers' and assign it to the result of inquirer.prompt function
const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
])
const words = answers.Sentence.trim().split(" ")

// print the array of words to the console
console.log(words)

// print the words count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);