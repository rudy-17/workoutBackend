const mongoose = require('mongoose');

// Define the schema
const userStepsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  steps: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Create the model
const UserSteps = mongoose.model('UserSteps', userStepsSchema);

module.exports = UserSteps;
