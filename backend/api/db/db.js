const mongoose =require('mongoose');
const{Provider}=require('../models/providerss');

// connection uri to mongoDB
// URL at which MongoDB service is running
const uri = 'mongodb://localhost:27017/test';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(result=>{
    console.log("Successfully connected!!!!!!");
})
.catch(error=>console.log(error));

// Provider.create({
//     "name": "rohn",
//     "age": 26,
//     "hobby": {
//         "reading": true,
//         "gaming": false,
//         "sport": "football"
//     }
// })

module.exports =Provider;
