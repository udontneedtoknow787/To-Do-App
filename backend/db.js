const mongoose = require('mongoose')
const DBurl = require('./config')

mongoose.connect(DBurl);
console.log("database connected");
const ToDoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const ToDo = mongoose.model('ToDo', ToDoSchema);
// const querySchema = mongoose.model('querySchema', QuerySchema);

module.exports = {
    ToDo
}