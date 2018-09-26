const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');

let id = "5babd46453a0030f22b8c6b1";

ObjectID.isValid(id);

Todo.find({
    _id: id
}).then((todos) => console.log("todos: ", todos))

Todo.findOne({
    _id: id
}).then((todo) => console.log("todo: ", todo))

Todo.findById(id).then((todo) => {
    if(!todo) return console.log("id not found");
    
    console.log("todo by id:", todo);
})