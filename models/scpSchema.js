const mongoose = require("mongoose");

const ScpSchema = new mongoose.Schema({
  SCP: {
    type: String,
    required: [
      true,
      "please provide the name of the SCP that you are inputing into the database",
    ],
    maxlength: 20,
  },

  SCPID: {
    type: Number,
    required: [true, "please enter the ID number of the SCP phenomenon"],
    maxlength: 10000,
  },
  ObjectClass: {
      type: String,
      required: [true, "Please enter the object class"],
      maxlength: 1000,
      enum: ['Safe', 'Euclid', 'Keter', 'Thaumiel', 'Neutralized', 'Apollyon', 'Archon' ],
  },
  Description: {
      type:String,
      required: [true, "Please enter the anomalies description"]

  }

  
});