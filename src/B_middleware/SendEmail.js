import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: process.env.secure == 'true', // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendMail = async ({ email, message, name }) => {
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: email, // sender address
      to: process.env.SMTP_USER, // list of receivers
      subject: message.slice(0, 50), // Subject line
      text: "email", // plain text body
      html: `<div style="background: #f9f9f9; padding: 35px; color: #2c3e50; margin : 50px 0">
            //     <div
            //         style="
            //   max-width: 600px;
            //   margin: auto;
            //   padding: 30px;
            //   background-color: #ffffff;
            //   border-radius: 3px;
            //   border-bottom: 1px solid #dadada;
            //   border-top: 1px solid #eaeaea;
            // "
            //     >

            //         <div style="margin: 5px 0 20px">
            //             <a
            //                 style="text-decoration: none; outline: none"
            //                 href="#"
            //                 target="_blank"
            //                 data-saferedirecturl="#"
            //             >
            //                 <img
            //                     style="height: 30px"
            //                     src="https://raw.githubusercontent.com/ansanonymo/nanco/fix-next-hero/src/asset/nanco-logo-black.png"
            //                     alt="logo"
            //                     class="CToWUd"
            //                     data-bit="iit"
            //                 /></a>
            //         </div>
            //         <p style="font-family : 'Roboto'; font-size:20px">Hi <span style="color: #ff5e14;">${name}</span>,</p>

            //         <pre style="font-family : 'Roboto'; font-size:18px;">${message}</pre>
            //         <hr
            //             style="
            //     margin: 40px 0;
            //     border-color: #dadada;
            //     border-style: solid;
            //     border-width: 1px 0 0 0;
            //     height: 0;
            //   "
            //         />


            //         <p style="font-family : 'Roboto'; font-size:18px;">
            //             All the best,<br /><strong style="color: #ff5e14"
            //             >The Nanco Org</strong
            //             >
            //         </p>
            //     </div>
            // </div>`, // html body

    });

    if (info.rejected.length !== 0) {
      return Response.json({ error: 'email send failed, try again' }, { status: 400 })
    }
    return true;
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  catch (err) {
    console.log(err)
    return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
  }
};
