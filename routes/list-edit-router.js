const express = require("express");
const listEditRouter = express.Router();
const taskList = require("../taskList.json");

listViewRouter
.route("/list_edit")
.get((req, res) => {
  let newTaskList = taskList.filter(task => task.status !== "Not completed");
  res.status(200).send({taskListCompleted : newTaskList})
})

listViewRouter
.route("/list_edit")
.get((req, res) => {
  let newTaskList = taskList.filter(task => task.status === "Not completed");
  res.status(200).send({taskListNotCompleted : newTaskList})
})

module.exports = listEditRouter;