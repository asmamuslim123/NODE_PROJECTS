import inquirer from "inquirer";
const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt([
         {
        type: "list",
        name: "question_1",
        message: "Q1.What is TypeScript?",
        choices: ["A) A type of JavaScript framework", "B) A strongly typed superset of JavaScript", "C) A version of HTML", "D) A type of database"]
        },
        {
        type: "list",
        name: "question_2",
        message: "Q2.Which company developed TypeScript?",
        choices: ["A) Google", "B) Microsoft", "C) Adobe", "D) Amazon"]
        },
        {
        type: "list",
        name: "question_3",
        message: "Q3.Which of the following is a key feature of TypeScript?",
        choices: ["A) Static typing", "B) Dynamic typing", "C) Weak typing", "D) Type checking"]
       },
       {
        type: "list",
        name: "question_4",
        message: "Q4.Can TypeScript code be directly executed by browsers?",
        choices: ["A) Yes", "B) No", "C) Sometimes", "D) Only in specific browsers"]
        },
        {
        type: "list",
        name: "question_5",
        message: "Q5.What is the file extension for TypeScript files?",
        choices: ["A) .js", "B) .ts", "C) .jsx", "D) .tsx"]
        }
    ]);
    let score: number = 0;

switch(quiz.question_1){
    case "B) A strongly typed superset of JavaScript":
        console.log("1. Correct!");
        ++score;
        break;
        default:
            console.log("1. incorrect!");
}
switch(quiz.question_2){
    case "B) Microsoft":
        console.log("2. Correct!");
        ++score;
        break;
        default:
            console.log("2. incorrect!");
}
switch(quiz.question_3){
    case "A) Static typing":
        console.log("3. Correct!");
        ++score;
        break;
        default:
            console.log("3. incorrect!");
}
switch(quiz.question_4){
    case "A) Yes":
        console.log("4. Correct!");
        ++score;
        break;
        default:
            console.log("4. incorrect!");
}
switch(quiz.question_5){
    case "B) .ts":
        console.log("5. Correct!");
        ++score;
        break;
        default:
            console.log("5. incorrect!");
}

console.log(`Your score is: ${score}`);