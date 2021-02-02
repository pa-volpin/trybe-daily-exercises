function calculate(par1, par2, par3) {
  return new Promise((resolve, reject) => {
    if (typeof par1 !== "number" || typeof par2 !== "number" || typeof par3 !== "number") reject(Error("Digite apenas números"));
    const result = (par1 + par2) * par3;
    if (result < 50) reject(Error("Valor muito baixo"));
    resolve(result);
  });
}

calculate(10, 2, 5)
.then(result => console.log(result))
.catch(error => console.log(error.message));
