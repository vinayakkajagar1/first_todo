const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://vinayakofficial1112:vinayak2020@cluster0.hykf5zd.mongodb.net/todo');

// Define schemas
const todoSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    completed: Boolean
});




const todo = mongoose.model('todo', todoSchema);


module.exports = {
    todo
 
}