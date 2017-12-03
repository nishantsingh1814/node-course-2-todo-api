// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
        return;
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID('5a2389a40e13f0be8a11eec0')
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result=>{
    //     console.log(result);
    // }));

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5a23746082e85938988f8c7d')
    },{
        $set:{
            name:'Singh'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((result=>{
        console.log(result);
    }));

   
    // db.close();
});