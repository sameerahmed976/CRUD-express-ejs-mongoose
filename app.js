const express = require("express");
const dbConnect = require("./db/dbConnect");
require("dotenv").config();
const ejs = require("ejs");
const { join } = require("path");
const studentRouter = require("./routes/studentRoutes");

const app = express();

const port = process.env.PORT;
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/student", express.static(join(process.cwd(), "public")));
app.use("/student/edit", express.static(join(process.cwd(), "public")));

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/student", studentRouter);

const start = () => {
  try {
    dbConnect(process.env.MONGO_URI);
    console.log(`Connect succesfully`);
    app.listen(port, () => {
      console.log(`port is listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
