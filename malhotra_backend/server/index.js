const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, email, company, message } = req.body;

  try {
    // Create the transporter using Gmail's SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS  // Your App Password
      },
      tls: {
        rejectUnauthorized: false  // Disable strict SSL certificate validation
      }
    });

    // Define the email options
    const mailOptions = {
      from: email, // Sender's email address
      to: process.env.EMAIL_USER, // Your Gmail address
      subject: 'New contact from ' + name, // Email subject
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `  // Using template literals to create the HTML body
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    // Log the error and return a 500 status with the error message
    console.error('Error:', err);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);  // Log server start
});
