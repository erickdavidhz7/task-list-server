const askQuestion = require("./askQuestion");

async function deleteTask(taskList) {
  let idInput = parseInt(await askQuestion("Please enter the id of the task that you would like delete: "),10);
  for (const task of taskList) {
    if (task.id === idInput) {
      const index = taskList.indexOf(task);
      taskList.splice(index, 1);
      console.log(`The task of id: ${idInput}\nWas deleted from the list.`);
      return new Promise((resolve) => {
        console.log("Loading...");
        setTimeout(() => resolve(taskList), 500);
      });
    }
  }
  console.log("The id that you have entered was not found");
  return new Promise((resolve) => {
    console.log("Loading...");
    setTimeout(() => resolve(taskList), 500);
  });
}

module.exports = deleteTask;
