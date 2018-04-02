// const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if (err) return console.log('Unable to connect to mongodb server');

    console.log('Connected to mongodb server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed:false
    // },(err, res)=>{
    //     if (err) return console.log('Unable to insert todo', err);

    //     console.log(JSON.stringify(res.ops,undefined,2));
        
    // });

    //Insert new doc into Users collection {name,age,location}

    // db.collection('Users').insertOne({
    //     name:'Ramon',
    //     age:20,
    //     location:'Brazil'
    // }, (err,res) => {
    //     if(err) return console.log('Unable to insert User');

    //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp(),undefined,2));
    // })
    
    db.close();
});