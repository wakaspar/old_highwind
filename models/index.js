var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/highwind");

module.exports.Image = require("./image.js");
module.exports.Project = require("./project.js");
