import readline from "readline";

var rl = readline.createInterface(process.stdin, process.stdout);
// console.log('vai ai bro');
const ordena = () => {
  let props = [];

  rl.question(`Digite uma propriedade a ser ordenada: `, (answer) => {
    if (answer.trim().toUpperCase() == "SAIR") {
      rl.close();
    } else {
      props.push(answer);
      rl.setPrompt(
        `Digite outra propriedade a ser ordenada (Digite 'sair' para encerrar): `
      );
      rl.prompt();

      rl.on("line", (answer) => {
        if (answer.trim().toUpperCase() == "SAIR") {
          rl.close();
        } else {
          props.push(answer);
          rl.setPrompt(`Digite outra propriedade a ser ordenada: `);
          rl.prompt();
        }
      });
    }
  });
  rl.on("close", () => {
    console.log("%s", props.sort());
    process.exit();
  });
};

ordena();
