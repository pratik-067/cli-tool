#! /usr/bin/env node

const process = require("node:process");

// calculator with cmd
let argv = process.argv.slice(2);

const helpOption = {
  add: "for addition",
  sub: "for subtraction",
  mul: "for multiplication",
  div: "for division",
};

let command = argv[0];

function calculate() {
  if (isCorrectCommand(command)) {
    let a = +argv[1];
    let b = +argv[2];
    switch (command) {
      case "add":
        console.log(operation.add(a,b));
        break;

      case "mul":
        console.log(operation.sub(a,b));
        break;

      case "sub":
       console.log( operation.mul(a,b));
        break;

      case "div": 
         console.log(operation.div(a,b));
        break;

      default:
        console.log(
          `"${command}" is not operation, \n Please Enter correct operation`
        );
        console.log(helpOption);
        break;
    }

    process.exit(0);
  } else {
    process.exit(1);
  }
}

const operation = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
};

function isCorrectCommand(operation) {
  if (argv.length === 0) {
    console.log("Usage: cal <command> [option]");
    return 0;
  }
  if (argv.length < 3) {
    console.log(`Usage: cal ${operation} <num1> <num2>`);
    return 0;
  }
  return 1;
}

calculate();