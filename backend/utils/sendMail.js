import nodemailer from 'nodemailer';

// Sending Mail function
const sendMail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 587,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
    }
    });
    await transporter.sendMail({
      from: {
        name: 'Gourmet Foods',
        address: process.env.NODEMAILER_EMAIL
      },
      to: email,
      subject: subject,
      text: text
    });
    console.log("Notification sent to customer successfully")
    
  } catch (error) {
    console.log(error.message);
  }
};

  export {sendMail};