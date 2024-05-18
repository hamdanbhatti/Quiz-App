import inquirer from "inquirer";
import chalk from "chalk";

// Quiz App Program
console.log(
   chalk.greenBright.bold(
      "\t=============================================",
   ),
);
console.log(
   chalk
      .bgRgb(24, 214, 65)
      .whiteBright.bold("\n\t\t WELCOME TO THE QUIZ APP \n"),
);
console.log(
   `${chalk.yellowBright.bold(
      "\t You can Test your TypeScript Knowledge Here!",
   )}`,
);

console.log(
   chalk.greenBright.bold(
      "\t=============================================",
   ),
);

const questions = [
   {
      type: "list",
      name: "q1",
      message: `${chalk.cyan(
         'What is the output of the following code?\nlet x = 5;\nif (x > 3) {\n    console.log("Hello");\n} else {\n    console.log("Goodbye");\n}',
      )}`,
      choices: ["Goodbye", "Hello", "Error", "None"],
      correctAnswer: "Hello",
   },
   {
      type: "list",
      name: "q2",
      message: `${chalk.cyan(
         "Which of the following operators is used for equality comparison in TypeScript?",
      )}`,
      choices: ["=", "==", "===", "!="],
      correctAnswer: "===",
   },
   {
      type: "list",
      name: "q3",
      message: `${chalk.cyan(
         "What will be the value of y after the execution of the following code?\nlet x = 10;\nlet y = x % 3;",
      )}`,
      choices: ["1", "2", "3", "10"],
      correctAnswer: "1",
   },
   {
      type: "list",
      name: "q4",
      message: `${chalk.cyan(
         'What will be printed after the execution of the following code?\nlet x = 7;\nif (x % 2 === 0) {\n    console.log("Even");\n} else {\n    console.log("Odd");\n}',
      )}`,
      choices: ["Even", "Odd", "Error", "None"],
      correctAnswer: "Odd",
   },
   {
      type: "list",
      name: "q5",
      message: `${chalk.cyan(
         "Which operator is used to add two variables in TypeScript?",
      )}`,
      choices: ["*", "+", "-", "/"],
      correctAnswer: "+",
   },
   {
      type: "list",
      name: "q6",
      message: `${chalk.cyan(
         'What is the output of the following code?\nlet x = 3;\nlet y = 4;\nif (x === y) {\n    console.log("Equal");\n} else {\n    console.log("Not Equal");\n}',
      )}`,
      choices: ["Equal", "Not Equal", "Error", "None"],
      correctAnswer: "Not Equal",
   },
   {
      type: "list",
      name: "q7",
      message: `${chalk.cyan(
         "What is the purpose of the else statement in an if-else structure?",
      )}`,
      choices: [
         "To repeat a block of code",
         "To execute a block of code if the if condition is false",
         "To end a loop",
         "To check multiple conditions",
      ],
      correctAnswer:
         "To execute a block of code if the if condition is false",
   },
   {
      type: "list",
      name: "q8",
      message: `${chalk.cyan(
         "What will be the value of z after executing the following code?\nlet x = 5;\nlet y = 3;\nlet z = x * y;",
      )}`,
      choices: ["2", "8", "15", "1.67"],
      correctAnswer: "15",
   },
   {
      type: "list",
      name: "q9",
      message: `${chalk.cyan(
         "Which of the following is a correct variable assignment in TypeScript?",
      )}`,
      choices: [
         "let x: int = 10",
         "let x := 10",
         "let x = 10",
         "let x == 10",
      ],
      correctAnswer: "let x = 10",
   },
   {
      type: "list",
      name: "q10",
      message: `${chalk.cyan(
         'What is the output of the following code snippet?\nlet x = 8;\nif (x >= 10) {\n    console.log("x is greater than or equal to 10");\n} else {\n    console.log("x is less than 10");\n}',
      )}`,
      choices: [
         "x is greater than or equal to 10",
         "x is less than 10",
         "Error",
         "None",
      ],
      correctAnswer: "x is less than 10",
   },
];

async function runQuiz() {
   let score = 0;

   for (const question of questions) {
      const answer = await inquirer.prompt([question]);
      if (answer[question.name] === question.correctAnswer) {
         score++;
         console.log(chalk.bgGreen.black("Correct!"));
      } else {
         console.log(
            chalk.red(
               `Wrong! The correct answer is: ${question.correctAnswer}`,
            ),
         );
      }
      console.log();
   }

   console.log(
      chalk.blue.bold(
         "\n\t===========================================\n",
      ),
   );
   console.log(
      chalk.greenBright.bold(
         `\tYour final score is ${chalk.red(score)}/${chalk.yellow(
            questions.length,
         )}`,
      ),
   );
   console.log(
      `\n\t${chalk.yellow.bold(
         "Thank you for Attempting the Quiz",
      )}\n\n\t${chalk.greenBright.bold(
         "This Quiz made by",
      )}  ${chalk.black.bold.bgRgb(
         50,
         117,
         62,
      )("Muhammad Hamdan Bhatti")}`,
   );

   console.log(
      chalk.blue.bold(
         "\n\t===========================================\n",
      ),
   );
}

runQuiz();
