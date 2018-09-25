const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err) return console.log("Unable to connect to mongodb server", err);
    
    console.log("Connected to mongodb server");

    const db = client.db('TodoApp');

    //deleteMany
    db.collection('Users').deleteMany({name: "Ramon"}).then((result) => {
        console.log(result);
        
    })
    //deleteOne
    // db.collection('Todos').deleteOne({text:"Something to"}).then(result => {
    //     console.log(result);
        
    // })

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({_id:new ObjectID("5baa75c69b6c99e6b9f38d1e")}).then(result => {
        console.log(result);
        
    })

    client.close();
    
});