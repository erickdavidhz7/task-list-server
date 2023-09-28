const express = require("express");
const app = express();
const port = 8000;
const listViewRouter = require("./routes/list-view-router");
const listEditRouter = require("./routes/list-edit-router");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const usersArrayDB = require("./utils/usersArrayDB");
const validateJWT = require("./middlewares/validateJWT");
const validRole = require("./middlewares/validRole");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(listViewRouter);
app.use(listEditRouter);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", ["GET", "POST", "PUT", "DELETE"]);
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my task list server!");
});

app.get("/this-should-exists", (req, res) => {
  res.status(404).send({ error: "Not found" });
});

app.post("/login", (req, res) => {
  const dataUser = req.body;

  const validateUser = usersArrayDB.some(
    userDB =>
      userDB.email === dataUser.email && userDB.password === dataUser.password
  );

  if (!validateUser) {
    return res.status(400).send({ error: "User invalid" });
  }
  const payLoad = {
    email: dataUser.email,
    role: dataUser.role,
  };
  const token = jwt.sign(payLoad, process.env.SECRET);
  return res
    .status(200)
    .send({ message: `Welcome ${dataUser.email}`, token: token });
});

app.get("/auth", validateJWT, validRole, (req, res) => {});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
