const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./models/Todos'); // Adjust the path if needed
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test');

// Create Task
app.post('/add', (req, res) => {
    const { uid, task } = req.body;
    TodoModel.create({ uid, task })
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err)); // Improved error handling
});

// Get Tasks for a Specific User
app.get('/todos/:uid', (req, res) => {
    const { uid } = req.params;
    TodoModel.find({ uid })
        .then(todos => res.json(todos))
        .catch(err => res.json(err)); // Improved error handling
});

// Update Task
app.put('/update/:id', (req, res) => {
    const { id } = req.params; // Get the id parameter from the request URL
    TodoModel.findByIdAndUpdate({ _id: id }, { done: true })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

// Delete Task
app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    TodoModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.listen(3002, () => {
    console.log('Server is running on port 3002');
});
