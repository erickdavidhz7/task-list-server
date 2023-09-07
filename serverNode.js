const express = require("express");
const app = express();
const port = 8000;
const listViewRouter = require("./routes/list-view-router");
const taskList = require("./taskList.json");
app.use(express.json());
app.use(listViewRouter);

app.get("/", (req, res) => {
  res.status(200).send("Welcome!");
});
app.get("/list_view", (req, res) => {
  res.status(200).send({ taskList: taskList });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
