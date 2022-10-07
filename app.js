const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Shivam mc bhanwda</h1>");
});

app.get("/about", (req, res) => {
  res.send("Hello World");
});
app.get("/contact", (req, res) => {
  res.send("Contact at shivam@randi.mc");
});

app.get("/shivam", (req, res) => {
  res.send("Contact at shivam@randi.mc");
});

app.listen(3000, () => {
  console.log("Server has started on port 3000!, welcome back");
});
