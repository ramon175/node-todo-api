const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err) return console.log("Unable to connect to mongodb server", err);
    
    console.log("Connected to mongodb server");

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed:false
    // }, (err, result) => {
    //     if (err) return console.log("Unable to insert todo", err);

    //     console.log(JSON.stringify(result.ops, undefined, 2));
        
    // })

    //Insert new doc into users collection(name,age,location)
    db.collection('Users').insertOne({
        name: 'Ramon',
        age:21,
        location: "BR"
    }, (err, result) => {
        if (err) return console.log("Unable to insert todo", err);

        console.log(JSON.stringify(result.ops, undefined, 2));
        
    })
    
    client.close();
    
});