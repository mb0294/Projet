const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, uppercase: true, trim: true }, // String is shorthand for {type: String}
  lastName: { type: String, required: true, uppercase: true, trim: true }, // String is shorthand for {type: String}
  image: { type: String },
  createdOn: { type: Date, default: Date.now },
  age: Number,
  serieNumber: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  role: {
    type: String,
    default: "association",
    enum: ["association", "superAdmin"],
  },
});
module.exports = User = mongoose.model("user", userSchema);
