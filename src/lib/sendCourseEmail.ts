import nodemailer from 'nodemailer'

export async function sendCourseEmail({ to, paymentID }: { to: string; paymentID: string }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const courseVideosLink =
    'https://drive.google.com/drive/folders/1W2Vy8A2SNI3RSR0HtHqHTNYIPmxLYWEl?usp=sharing'
  const ebooksLink =
    'https://drive.google.com/drive/folders/1W2Vy8A2SNI3RSR0HtHqHTNYIPmxLYWEl?usp=sharing'

  const html = `
    <h2>🎉 Payment Successful!</h2>
    <p>Your payment ID: <b>${paymentID}</b></p>

    <p>Here are your resources:</p>

    <ul>
      <li>📹 <a href="${courseVideosLink}" target="_blank">Course Videos</a></li>
      <li>📘 <a href="${ebooksLink}" target="_blank">Ebooks</a></li>
    </ul>

    <p>Thank you for your purchase ❤️</p>
  `

  await transporter.sendMail({
    from: `"Healthy Intimate Life" <${process.env.SMTP_USER}>`,
    to,
    subject: 'Your Course Access – Payment Successful',
    html,
  })
}
