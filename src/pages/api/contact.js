const nodemailer = require('nodemailer');
const { config } = require('../../config/');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { data } = req.body;
    const info = {
      from: `👨‍💻 `, // sender address
      to: `${config.nmEmail}`, // list of receivers
      subject: `Portfolio message`, // Subject line
      html: `<p> <b>name: </b>${data.name} </p>
            <p> <b>email: </b>${data.email} </p>
            <p> <b>message: </b>${data.message} </p>`, // html body
    };
    const rta = await sendMail(info);
    res.status(200).json(rta);
  } else {
    res.status(405).json({ message: 'Not Allowed' });
  }
}

async function sendMail(mail) {
  const transporter = nodemailer.createTransport({
    host: config.nmSMTP,
    port: 465, //default port 587
    secure: true, // true for 465, false for other ports
    auth: {
      user: config.nmEmail, // generated ethereal user, testAccount.user
      pass: config.nmPassword, // generated ethereal password, testAccount.pass
    },
  });

  await transporter.sendMail(mail);

  return { message: 'mail sent' };
}
