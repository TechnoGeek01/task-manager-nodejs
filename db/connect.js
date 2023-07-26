const mongoose = require("mongoose");

const connectDB = async (url) => {
  return mongoose.connect(url, { dbName: "Task-Manager" });
};

module.exports = connectDB;
