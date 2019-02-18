let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    age: Number,
    lastName: String
},
{
    collection: "first"
});

module.exports = mongoose.model('test', contactSchema);