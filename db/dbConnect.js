const mongoose = require("mongoose");

const dbConnect = async (DB_NAME) => {
  return mongoose.connect(DB_NAME);
};

module.exports = dbConnect;
