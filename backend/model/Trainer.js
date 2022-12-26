const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
    trainerName: { type: String, required: true, uppercase: true, trim: true }, // String is shorthand for {type: String}
  image: { type: String },
  serieNumber: { type: Number, required: true, trim: true },
  grade: { type: String, trim: true },
  discription: { type: String, trim: true },
  
  createdOn: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },

});
module.exports = Trainer = mongoose.model("trainer", trainerSchema);
