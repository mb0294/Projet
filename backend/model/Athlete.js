const mongoose = require("mongoose");

const atheletSchema = new mongoose.Schema({
    atheletName: { type: String, required: true, uppercase: true, trim: true }, // String is shorthand for {type: String}
  image: { type: String },
  serieNumber: { type: Number, required: true, trim: true },
  grade: { type: String, trim: true },
  Category: { type: Number, trim: true },
  createdOn: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },

});
module.exports = Athelet = mongoose.model("athelet", atheletSchema);
