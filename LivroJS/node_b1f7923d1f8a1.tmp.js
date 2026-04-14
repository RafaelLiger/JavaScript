const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numero = Math.floor(Math.random() * 10);

rl.question("Adivinhe o número (0-9): ", (resposta) => {
  if (Number(resposta) === numero) {
    console.log("Acertou!");
  } else {
    console.log("Errou! Era " + numero);
  }
  rl.close();
});
