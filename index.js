const askQuestion = require("./modules/askQuestion");
const displayMenu = require("./modules/displayMenu");
const taskFunctions = require("./modules/taskFunctions")
const fs = require("fs");


async function main() {
  let userInput = "";
  let taskList = [];

  while (userInput != "5") {
    displayMenu();
    userInput = await askQuestion("Enter a menu selection:\n");
    console.log("----------------------------------------");
    taskList = await taskFunctions(userInput, taskList);

    let taskListJsonString = JSON.stringify(taskList);
    fs.writeFileSync('./taskList.json' , taskListJsonString, error => {
      if (error) console.log("Error writing file: " + error);
      else console.log("Succesfully wrote file");
    })
  }
  console.log("Thanks for using the program!");
}
main();