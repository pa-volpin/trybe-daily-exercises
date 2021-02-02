function calculate(par1, par2, par3) {
  return new Promise((resolve, reject) => {
    if (typeof par1 !== "number" || typeof par2 !== "number" || typeof par3 !== "number") reject("Digite apenas números");
    const result = (par1 + par2) * par3;
    if (result < 50) reject("Valor muito baixo");
    resolve(result);
  });
}

async function performCalcul(par1, par2, par3) {
  const result = await calculate(par1, par2, par3);
  console.log(result);
}


performCalcul(10, 2, 5)
