#! /usr/bin/env node

const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "todo.json");

function readTodos() {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

function writeTodos(data) {
  fs.writeFileSync(filePath, JSON.stringify(data));
}

const command = process.argv[2];
const argument = process.argv[3];
switch (command) {
  case "add":
    const todos = readTodos();
    todos.push({ task: argument });
    writeTodos(todos);
    console.log(`Added: ${argument}`);
    break;
  case "list":
    const currentTodos = readTodos();
    console.log("To-Do List:");
    currentTodos.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo.task}`);
    });
    break;
  case "delete":
    const todosList = readTodos();
    const updatedTodos = todosList.filter(
      (todo, index) => index !== parseInt(argument) - 1
    );
    writeTodos(updatedTodos);
    console.log(`Deleted task ${argument}`);
    break;
  default:
    console.log("Usage: cli-tool <command> <argument>");
    console.log("Commands:");
    console.log(" add <task> Add a new task");
    console.log(" list List all tasks");
    console.log(" delete <number> Delete a task by its number");
    break;
}
