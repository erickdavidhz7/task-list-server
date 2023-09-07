const askQuestion = require("./askQuestion");

async function completeTask(taskList) {
  let idInput = parseInt(await askQuestion("Please enter the id of the task that you would like complete: "),10);
  for (const task of taskList) {
    if (task.id === idInput) {
      task.status = "Completed";
      console.log(
        `The task of id: ${idInput}\nHas been assigned as completed.`
      );
      return new Promise((resolve) => {
        console.log("Loading...");
        setTimeout(()=> resolve(taskList), 500)
      })
    }
  }
  console.log("The id that you have entered was not found");
  return new Promise((resolve) => {
    console.log("Loading...");
    setTimeout(()=> resolve(taskList), 500)
  })
}

module.exports = completeTask;
