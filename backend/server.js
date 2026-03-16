require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Contact = require("./models/Contact");


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running properly 🚀");
});
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
app.post("/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "yourcompanyemail@gmail.com", // where you want enquiry
      subject: "New Enquiry Received",
      html: `
        <h3>New Enquiry Details</h3>
        <p><strong>Name:</strong> ${req.body.fullName}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Phone:</strong> ${req.body.phone}</p>
        <p><strong>City:</strong> ${req.body.city}</p>
        <p><strong>Type:</strong> ${req.body.enquiryType}</p>
        <p><strong>Product:</strong> ${req.body.product || "-"}</p>
        <p><strong>Service:</strong> ${req.body.service || "-"}</p>
        <p><strong>Message:</strong> ${req.body.message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
console.log("Email response:", info.response);

    res.status(201).json({
      message: "Enquiry saved and email sent successfully",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
});
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
