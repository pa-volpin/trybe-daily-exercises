const { prompt } = require('inquirer');
const calculateIMC = require('./imc');

console.log('Hi, welcome to IMC calculator!\n');

const questions = [
  {
    type: 'input',
    name: 'userWeight',
    message: 'May I have your weight?',
    validate: function (value) {
      var valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'input',
    name: 'userHeight',
    message: '\nMay I have your height?',
    validate: function (value) {
      var valid = !isNaN(parseFloat(value));
      if (valid) value = ""
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
];

function inquireCalculator() {
  prompt(questions).then((answers) => {
    const { userWeight, userHeight } = answers;
    const IMCresults = calculateIMC(userWeight, userHeight);
    const { IMC, situation } = IMCresults;
    console.log(`\nThe IMC is ${IMC}. It's classified as ${situation}`);
  });
}

module.exports = inquireCalculator;