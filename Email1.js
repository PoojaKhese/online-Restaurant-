const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "poojakhese8@gmail.com",
    pass: "igyt gnyk zbxq mmqd",
  },
});

const sendBooking = async (values) => {
  const info = await transporter.sendMail({
    from: "poojakhese8@gmail.com",
    to: values[2],

    subject: "Booking information",
    text: "Hello world?",

    html: `
      <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Booking Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border: 1px solid #dddddd;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color:rgb(253, 201, 12);
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 20px;
            color: #333333;
        }
        .content h2 {
            margin-top: 0;
        }
        .content p {
            line-height: 1.6;
        }
        .details {
            margin: 20px 0;
            padding: 15px;
            background-color: #f1f1f1;
            border-radius: 5px;
        }
        .footer {
            background-color: #f9f9f9;
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #777777;
        }
        .footer a {
            color: rgb(253, 201, 12);
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="email-container">

        <div class="header">
            <h1>Booking Confirmation</h1>
        </div>

        <div class="content">
            <h2>Thank you for your reservation!</h2>
            <p>Dear ${values[1]},</p>
            <p>We are delighted to confirm your table booking at Restoran. Below are your booking details:</p>
            <div class="details">
                <p><strong>Booking Id:</strong> ${values[0]}</p>
                <p><strong>Date:</strong> ${values[3]}</p>
                <p><strong>Time:</strong> ${values[4]}</p>
                <p><strong>No of People:</strong> ${values[5]}</p>
            </div>
            <p>If you have any questions or need to make changes to your reservation, please contact us</p>
            <p>We look forward to welcoming you!</p>
        </div>

        <div class="footer">
            <p>&copy; 2024 Restoran. All Rights Reserved.</p>
        </div>
    </div>
</body>
</html>
    `,
  });

  console.log("Message sent: %s", info.messageId);
};



module.exports = sendBooking;
