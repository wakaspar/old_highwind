var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String,
  details: Array,
  role: String,
  tech: Array,
  image: String
});

Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
