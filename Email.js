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

const sendOTP = async (email, name, otp) => {
  const info = await transporter.sendMail({
    from: "poojakhese8@gmail.com",
    to: email,

    subject: "OTP Verification",
    text: "Hello world?",
    html: `
      <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
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
            <h1>OTP Verification</h1>
        </div>

        <div class="content">
            <h2> Thanks for  Login !</h2>
            <p>Hello, ${name},</p>
            <p>Your One-Time Password (OTP) for verification is:</p>
            <div class="details">
            ${otp}
            </div>
            <p>Please use this OTP to complete your verification. The OTP is valid for the next 10 minutes.</p>
            <a href="#" class="btn-verify">Verify Now</a>
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

// sendOTP("poojakhese@gmail.com","Prachi",1234);

module.exports = sendOTP;
