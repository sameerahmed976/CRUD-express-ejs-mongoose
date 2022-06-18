const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter valid value"],
  },
  age: {
    type: Number,
    required: [true, "Please enter valid age"],
  },
  fees: {
    type: Number,
    required: [true, "Please enter valid value"],
  },
});

module.exports = mongoose.model("student", studentSchema);
