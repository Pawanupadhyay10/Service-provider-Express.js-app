const mongoose = require('mongoose');
const { providerSchema}=require('../schemas/schemaprovider');

//creating model
const Provider = mongoose.model('Provider', providerSchema);

module.exports={Provider}