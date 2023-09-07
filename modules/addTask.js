const askQuestion = require("./askQuestion");

let idCounter = 0;

async function addTask(taskList) {
  idCounter += 1;
  let taskName = await askQuestion("Please enter the name of your task: ");
  let taskDescription = await askQuestion(`Please enter the description of your task ${taskName}: `);
  console.log(`The new task's ID is: ${idCounter}`);
  const newTask = {
    id: idCounter,
    name : taskName,
    description : taskDescription,
    status : "Not completed"
  }

  taskList = [...taskList, newTask];
  return new Promise((resolve) => {
    console.log("Loading...");
    setTimeout(()=> resolve(taskList), 500)
  })
}

module.exports = addTask;
