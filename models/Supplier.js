const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema(
  {
    name: String,
    contact: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Supplier", supplierSchema);
