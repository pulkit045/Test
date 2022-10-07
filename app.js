const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/animals');

const Dog = mongoose.model('Dog', { name: String });

const item = new Dog({ name: 'German Sheperd' });
item.save().then(() => console.log('bow'));

app.get("/",(req,res)=>{
    res.send("<h1>Hello World!</h1>");
});
app.post(res,)
app.listen(3000, ()=>{
    console.log("Server has started on port 3000!, welcome back");
});