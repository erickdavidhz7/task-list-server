const express = require("express");
const listEditRouter = express.Router();
const taskList = require("../taskList.json");

listEditRouter
.route("/list_edit")
.post((req, res) => {
  const newTask = req.body;
  taskList.push(newTask);
  res.send({taskList_edited : taskList});
})

listEditRouter
.route("/list_edit/:id")
.put((req, res) => {
  const id = req.params.id;
  const taskUpdate = req.body;
  console.log(taskUpdate);
  const newTaskList = taskList.map(task => {
    if(task.id == id) return { ...task, name: taskUpdate.name, description: taskUpdate.description, status: taskUpdate.status};
    else return task;
  })
  res.send({taskList_edited: newTaskList})
})
.delete((req, res) => {
  const id = req.params.id;
  const newTaskList = taskList.filter(task => task.id != id);
  res.send({taskList_edited : newTaskList});
})
module.exports = listEditRouter;