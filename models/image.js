var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var ImageSchema = new Schema({
  name: String,
  date: Date,
  file: String,
  thumb: String
});

Image = mongoose.model("Image", ImageSchema);

module.exports = Image;
