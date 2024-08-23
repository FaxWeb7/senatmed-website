import { createTransport } from 'nodemailer'
import { IMailInfo, IMailOptions } from './mail.types'

export class MailService {
  getMailInfo(message: string): IMailInfo {
    let transporter = createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    const mailOptions: IMailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'Заявка с сайта senatmed.ru',
      text: message
    }

    return { transporter, mailOptions }
  }
}
