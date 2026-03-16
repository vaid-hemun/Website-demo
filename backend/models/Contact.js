const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  companyName: String,
  email: {
    type: String,
    required: true
  },
  phone: String,
  city: {
    type: String,
    required: true
  },
  enquiryType: {
    type: String,
    required: true
  },
  product: String,
  service: String,
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Contact", contactSchema);