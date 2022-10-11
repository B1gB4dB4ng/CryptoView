const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const favcoinSchema = new Schema(
  {
    coinName: {
      type: String,
      required: true,
    },

    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Favcoin", favcoinSchema);
