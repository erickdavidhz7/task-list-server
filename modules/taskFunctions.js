const addTask = require("./addTask");
const deleteTask = require("./deleteTask");
const completeTask = require("./completeTask");
const displayTasks = require("./displayTasks");

async function taskFunctions(userInput, taskList){

  switch (userInput) {
    case "1":
      return await addTask(taskList);
  
    case "2":
      return await deleteTask(taskList);
  
    case "3":
      return await completeTask(taskList);
  
    case "4":
      return await displayTasks(taskList);
  
    case "5":
      return taskList;
  
    default:
      console.log("Invalid Input");
      console.log("Please Enter a valid input");
      return taskList;
  }

}

module.exports = taskFunctions;