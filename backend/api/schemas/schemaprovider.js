const mongoose=require('mongoose');

//define schema
const Schema = mongoose.Schema;

const hobbysport = new Schema({
    "reading": {Boolean},
    "gaming": {Boolean},
    "sport": { type: String, required: true }
 })

//create provider schema
 const providerSchema= new Schema({
     "name": { type: String ,required:true},
     "age": { type: String, required: true },
     "hobby": { hobbysport}
 });

 module.exports={providerSchema}