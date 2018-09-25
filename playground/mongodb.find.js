// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err) return console.log("Unable to connect to mongodb server", err);
    
    console.log("Connected to mongodb server");

    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5baa73c4574242e64e98e5d5")
    // }).toArray().then((docs) => {

    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
        

    // }, (err) => console.log("Unable to fetch todos", err));

    // db.collection('Todos').find().count().then((count) => {

    //     console.log("Todos count: ", count);

    // }, (err) => console.log("Unable to count todos", err));

    db.collection('Users').find({
        name: "Ramon"
    }).toArray().then((docs) => {

        console.log("Users");
        console.log(JSON.stringify(docs, undefined, 2));
        

    }, (err) => console.log("Unable to fetch users", err));
    
    client.close();
    
});