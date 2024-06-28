// models/Todos.js
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true
  },
  task: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Todo', todoSchema);
