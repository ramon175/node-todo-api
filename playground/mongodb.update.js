const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err) return console.log("Unable to connect to mongodb server", err);
    
    console.log("Connected to mongodb server");

    const db = client.db('TodoApp');

    //findOneAndUpdate
    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("5baa73c4574242e64e98e5d5")
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }, { returnOriginal: false }).then(result => {
    //     console.log(result);
    // })

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5baa8ce0c41c6f0bf8d72121")
    },{
        $set:{
            name:"Vrau"
        },
        $inc:{
            age: -2
        }
    }, { returnOriginal: false }).then(result => {
        console.log(result);
    })

    client.close();
    
});