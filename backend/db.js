
const express=require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
dotenv.config({ path: "./config.env" });

console.log("Hello from the server file");

const db = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(db).then(() => {
  console.log("MonogoDB Connected");
});

const port = process.env.PORT || 3000;

app.listen(port, "127.0.0.1", () => {
  console.log(port);
});