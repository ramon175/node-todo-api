const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {ObjectID} = require('mongodb');

let {Todo} = require('./models/todo');
let {USer} = require('./models/user');

let PORT = process.env.PORT || '3000';
let app = express();

app.use(bodyParser.json());


app.post('/todos', (req,res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => res.status(400).send({err}))
    
});

app.get('/todos', (req,res) => {

    Todo.find().then((todos) => {
       
        res.send({todos});

    },(e) => res.status(401).send(e));

}); 

app.get('/todos/:id', (req,res) => {
    let id = req.params.id;

    if(!ObjectID.isValid(id)) return res.status(404).send();

    Todo.findById(id).then((todo) => {
        if(!todo) return res.status(404).send();

        res.send({todo})
    },(err) => res.status(400).send(err))
});

app.delete('/todos/:id', (req,res) => {
    let id  = req.params.id;

    if(!ObjectID.isValid(id)) return res.status(404).send();

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo) res.status(404).send();

        res.send({todo});
    }).catch(e => res.status(400).send())
})

app.listen(PORT, () => {
    console.log("Started on port " + PORT);
});

module.exports = {
    app
}