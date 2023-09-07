const express = require("express");
const listViewRouter = express.Router();
const taskList = require("../taskList.json");

listViewRouter
.route("/list_view_completed")
.get((req, res) => {
  let newTaskList = taskList.filter(task => task.status !== "Not completed");
  res.status(200).send({taskListCompleted : newTaskList})
})

listViewRouter
.route("/list_view_not_completed")
.get((req, res) => {
  let newTaskList = taskList.filter(task => task.status === "Not completed");
  res.status(200).send({taskListNotCompleted : newTaskList})
})

module.exports = listViewRouter;