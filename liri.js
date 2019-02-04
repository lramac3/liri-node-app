// require("dotenv").config();

const inquirer = require('inquirer');

const questions = [
    {type: 'input', name: 'name', message:'What is your name'}
    ]

inquirer
  .prompt(questions)
    /* Pass your questions in here */
  .then(answers => {
    // Use user feedback for... whatever!!

    console.log('Answers: ', answers)
  });
