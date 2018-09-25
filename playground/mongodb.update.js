const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err) return console.log("Unable to connect to mongodb server", err);
    
    console.log("Connected to mongodb server");

    const db = client.db('TodoApp');

    //findOneAndUpdate
    

    client.close();
    
});