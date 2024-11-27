const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://admin:passkey@cluster0.gxjh1st.mongodb.net/');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo ;
