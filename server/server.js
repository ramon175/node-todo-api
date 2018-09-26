const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');

let {Todo} = require('./models/todo');
let {USer} = require('./models/user');

let PORT = 3000;
let app = express();

app.use(bodyParser.json());


app.post('/todos', (req,res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => res.status(400).json({err}))
    
});


app.listen(PORT, () => {
    console.log("Started on port " + PORT);
});

module.exports = {
    app
}