const mongoose = require('mongoose');

const processSchema = new mongoose.Schema({
  step: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,  // Optional field for an icon URL
    required: false,
  }
});

const Process = mongoose.model('Process', processSchema);
module.exports = Process;
