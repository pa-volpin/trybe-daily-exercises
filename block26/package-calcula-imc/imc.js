const calculateIMC = (weight, height) => {
  const IMC = (weight / height**2).toFixed(2);

  let situation;
  if (IMC < 18.5) { situation = "Underweight" }
  else if (IMC >= 18.5 && IMC <= 24.9) { situation = "Normal" }
  else if (IMC >= 25 && IMC <= 29.9) { situation = "Overweight" }
  else if (IMC >= 30 && IMC <= 34.9) { situation = "Obese I" }
  else if (IMC >= 35 && IMC <= 39.9) { situation = "Obese II" }
  else { situation = "Extremely Obese" }

  return ({ IMC, situation });
}

module.exports = calculateIMC;