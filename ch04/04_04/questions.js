const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
});


const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with NodeJS?"
];

const collectAnswers = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            done(answers);
        }
    };
    
    rl.question(firstQuestion, questionAnswered);
};

collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});
