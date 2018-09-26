const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');

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
});

app.patch('/todos/:id', (req,res) => {
    let id = req.params.id;

    let body = _.pick(req.body, ['text', "completed"]);

    if(!ObjectID.isValid(id)) return res.status(404).send();

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt = null; 
    }

    Todo.findByIdAndUpdate(id,{$set:body}, {new: true}).then(todo => {
        if(!todo) return res.status(404).send();

        res.send({todo});
    }).catch(e => res.status(400).send(e));
})

app.listen(PORT, () => {
    console.log("Started on port " + PORT);
});

module.exports = {
    app
}