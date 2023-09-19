const express = require("express");
const app = express();
const port = 8000;
const listViewRouter = require("./routes/list-view-router");
const listEditRouter = require("./routes/list-edit-router");
const taskList = require("./taskList.json");

app.use(express.json());
app.use(listViewRouter);
app.use(listEditRouter);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin" , "*");
  res.header("Access-Control-Allow-Methods", ["GET", "POST", "PUT", "DELETE"])
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome!");
});

app.get("/this-should-exists", (req, res)=>{
  res.status(404).send({error: "Not found"});
});

app.get("/list_view", (req, res) => {
  res.status(200).send({ taskList: taskList });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
