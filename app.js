const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Shivam mc bhanwda</h1>");
});

app.get("/about", (req, res) => {
  res.send("Hello");
});
app.listen(3000, () => {
  console.log("Server has started on port 3000!, welcome back");
});
