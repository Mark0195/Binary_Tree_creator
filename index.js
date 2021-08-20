//required for this project
const express = require('express');
const path = require('path');
const treeify = require('treeify');
const fun = require('./input')

//port number
const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, 'main.html'))
});

//app post to grab number inputs which add to binary search tree
app.post("/", fun.inputs)

//to get port
app.listen(port, () => {
    console.log(`Listened at http://localhost:${port}`)
});