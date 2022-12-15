const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ShopSchema = new Schema({
  name: {
    type: String
  },
  logoUrl: {
    type: String
  },
  address: {
    type: String
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});
module.exports = mongoose.model("Shop", ShopSchema);