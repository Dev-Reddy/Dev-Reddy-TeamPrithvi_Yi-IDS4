import nodemailer from "nodemailer";

export async function sendAlertMessage(user) {
  // --------------------------------------------------------
  //Gather the details of the applicant and the resume file

  //get the email of the applicant
  const email = user.email;

  // --------------------------------------------------------

  //Setting up the email to be sent to the applicant

  //create a transporter object using the default SMTP transport
  //using the gmail service to send the email

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "thedevreddy@gmail.com",
      pass: "zuuxyokbrkwuoyvz",
    },
  });

  //send mail with defined transport object

  const mailOptions = {
    //sender's email
    from: "thedevreddy@gmail.com",

    //recipient's email
    to: email,

    //subject of the email
    subject: `HIGH RAIN ALERT IN YOUR AREA!`,

    //body of the email html

    html: `<!DOCTYPE html>
    <html>
      <head>
        <title>High Rain Alert</title>
      </head>
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
        <div style="background-color: #007bff; padding: 20px; text-align:center">
          <h1 style="color: white; margin: 0;">High Rain Alert</h1>
        </div>
        <div style="padding: 20px;">
          <p>Dear user,</p>
          <p>We are writing to inform you that there is a <b>high rain alert in your area.</b> Please take necessary precautions to ensure your safety and the safety of those around you.</p>
          <p>We recommend that you stay indoors and avoid traveling if possible. If you must travel, please be extra cautious on the roads and follow all traffic rules.</p>
          <p>We will continue to monitor the situation and provide updates as necessary. Thank you for your attention.</p>

            <p>For more information, please visit our website or contact us at [xxxxxxxxxx].</p>
          <p>Sincerely,</p>
          <p>The Prithvi Team</p>
        </div>
      </body>
    </html>`,
  };
  // --------------------------------------------------------

  //Send the email and catch errors if any

  //send the email
  try {
    //send the email and log the success message
    const result = await transporter.sendMail(mailOptions);
    console.log("Success: Email sent to " + email);
  } catch (error) {
    //catch any errors and log them
    console.log("Error: Email sent fail with error: " + error);
  }
}
