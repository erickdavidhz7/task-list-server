const express = require("express");
const listViewRouter = express.Router();
const taskList = require("../taskList.json");

listViewRouter.route("/list_view").get((req, res) => {
  res.status(200).send({ taskList: taskList });
});

listViewRouter.route("/list_view/:type").get((req, res) => {
  const type = req.params.type;
  if (type === "completed") {
    res.redirect("/list_view_completed");
  } else if (type === "not_completed") {
    res.redirect("/list_view_not_completed");
  } else {
    res.status(400).send({ error: "Invalid path name!" });
  }
});

listViewRouter.route("/list_view_completed").get((req, res) => {
  let newTaskList = taskList.filter(task => task.status !== "Not completed");
  res.status(200).send({ taskListCompleted: newTaskList });
});

listViewRouter.route("/list_view_not_completed").get((req, res) => {
  let newTaskList = taskList.filter(task => task.status === "Not completed");
  res.status(200).send({ taskListNotCompleted: newTaskList });
});

module.exports = listViewRouter;
