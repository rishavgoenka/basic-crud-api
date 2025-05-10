const mongoose = require('mongoose');

const TravellerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

module.exports = mongoose.model('Traveller', TravellerSchema);