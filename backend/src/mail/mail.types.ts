import { SentMessageInfo, Transporter } from 'nodemailer'

export interface IMailInfo {
  transporter: Transporter<SentMessageInfo>
  mailOptions: IMailOptions
}

export interface IMailOptions {
  from: string | undefined
  to: string | undefined
  subject: string
  text: string
}
