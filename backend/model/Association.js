const mongoose = require("mongoose");

const associationSchema = new mongoose.Schema({
  associationName: { type: String, required: true, uppercase: true, trim: true }, // String is shorthand for {type: String}
  image: { type: String },
  serieNumber:{type:Number, required: true, trim: true},
  description: { type: String, trim: true },
  createdOn: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});
module.exports = Association = mongoose.model("association", associationSchema);
