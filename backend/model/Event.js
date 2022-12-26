const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    eventTitle: { type: String, required: true, uppercase: true, trim: true }, // String is shorthand for {type: String}
  image: { type: String },
  discription: { type: String, trim: true },
  Category: { type: Number, trim: true },
  createdOn: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },

});
module.exports = Event = mongoose.model("event", eventSchema);
