const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/animals");

const Dog = mongoose.model("Dog", { name: String });

const item = new Dog({ name: "German Sheperd" });
item.save().then(() => console.log("bow"));

app.get("/", (req, res) => {
  res.send("<h1>Shivam mc bhanwda</h1>");
});

app.get("/about", (req, res) => {
  res.send("Hello World");
});
app.get("/contact", (req, res) => {
  res.send("Contact at shivam@randi.mc");
});
app.listen(3000, () => {
  console.log("Server has started on port 3000!, welcome back");
});
