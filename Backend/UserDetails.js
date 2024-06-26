const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    placesVisited: [
      {
        type: String,
      },
    ],
    placesToVisit: [
      {
        type: String,
      },
    ],
  },
  {
    collection: "UserInfo", // Specify the collection name as "userinfo"
  }
);

module.exports = mongoose.model("UserInfo", UserDetailsSchema);
