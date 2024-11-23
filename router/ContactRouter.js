const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require("dotenv").config({ path: './mail.env' });

router.post("", async (req, res) => {
  const { Name, Email, Message } = req.body;
  console.log("Received data:", { Name, Email, Message });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Loaded from .env
      pass: process.env.GMAIL_PASS, // Loaded from .env (App password)
    },
    secure: true,  // Ensure secure connection using TLS
    tls: {
    rejectUnauthorized: false,  // Use this option if you encounter SSL issues
    }
  });

  const mailOptions = {
    from: Email, // Sender's email address
    to: process.env.GMAIL_USER, // Your Gmail address (to receive the form data)
    subject: "New Form Submission",
    text: `You have received a new form submission from your portfolio website named Vikashofficialresearcher:\n
        Name: ${Name}\n
        Email: ${Email}\n
        Message: ${Message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    // Respond only once, after the email is sent
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    console.error("Error details:", error); // Logs the full error object for debugging
    res.status(500).json({ message: `Failed to send email: ${error.message}` });
  }
});

module.exports = router;
