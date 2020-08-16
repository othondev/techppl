import FibonacciFinder from "./service/fibonacciFinder";
import inquirer from "inquirer";

(async () => {
  const questions = [
    {
      type: "number",
      message: "Input the frequency",
      name: "frequency",
    },
    {
      type: "number",
      message: "Input first value",
      name: "firstValue",
    },
    {
      type: "input",
      message: "Input next value",
      name: "nextValue",
    },
  ];
  const { frequency } = await inquirer.prompt([questions[0]]);
  console.log(frequency);
  const fibonacciFinder = new FibonacciFinder(+frequency, console.log);
  const { firstValue } = await inquirer.prompt([questions[1]]);
  fibonacciFinder.addNumber(+firstValue);

  let status: "halt" | "quit" | "pause" | "resume" = "resume";
  do {
    const { nextValue } = await inquirer.prompt([questions[2]]);
    switch (nextValue.toLowerCase()) {
      case "quit":
        status = "quit";
        break;
      case "halt":
        status = "halt";
        fibonacciFinder.pauseTimer();
        break;
      case "resume":
        status = "resume";
        fibonacciFinder.resumeTimer();
        break;
    }
    if (status === "resume") {
      const value = parseInt(nextValue);
      if (!isNaN(value)) {
        fibonacciFinder.addNumber(value);
      }
    }
  } while (status !== "quit");
  process.exit(0);
})();
