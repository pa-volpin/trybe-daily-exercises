const { questionFloat } = require('readline-sync')
const calculateIMC = require('./imc');

const readlineCalculator = () => {
  const userWeight = questionFloat('May I have your weight? ').toFixed(2);
  console.log(`Weight ${userWeight} kg received!\n`);
  
  const userHeight = questionFloat('May I have your height? ').toFixed(2);
  console.log(`Height ${userHeight} m received!\n`);

  const IMCresults = calculateIMC(userWeight, userHeight);
  const { IMC, situation } = IMCresults;

  console.log(`The IMC is ${IMC}. It's classified as ${situation}`);
}

module.exports = readlineCalculator;