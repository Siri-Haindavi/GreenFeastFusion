const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const ContactForm = require('../src/model');

const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'capstonexample@outlook.com',
    pass: '12345qwert'
  }
});


router.post('/contact', async (req, res) => {
  try {
    const contactFormData = new ContactForm({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });

    const savedContactForm = await contactFormData.save();

    const mailOptions = {
      from: 'capstonexample@outlook.com',
      to: req.body.email,
      subject: 'We Received Your Message!',
      text: `Hello ${req.body.name},\n\nWe have received your message: "${req.body.message}" and are working to get back to you as soon as possible.\n\nBest regards,\nYour Team`
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error while sending email' });
      } else {
        console.log('Email sent: ' + info.response);
        res.json({ savedContactForm, emailSent: true });
      }
    });
  } catch (error) {
    console.error('Error saving the contact form:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;