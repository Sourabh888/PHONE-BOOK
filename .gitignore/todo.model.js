const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    contact_name: {
        type: String
    },
    contact_number: {
        type: Number
    },
    contact_email: {
        type: String
    },
    contact_Dob: {
        type:Date
    },
    contact_priority: {
        type: String
    },
    contact_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Todo', Todo);