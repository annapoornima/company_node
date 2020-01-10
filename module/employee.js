const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var useremployeeSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    Lastname: {
        type: String
    },
    Email: {
        type: String
    },
    Password: {
        type: String
    },
    Confirm_Password: {
        type: String
    }
});

module.exports = mongoose.model('companyst', useremployeeSchema);


