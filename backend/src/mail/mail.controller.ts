import { Request, Response, Router } from 'express'
import { MailService } from './mail.service'
import { logger } from '../utils/log'

const router = Router()
const mailService = new MailService()

router.post('/send-mail', (req: Request, res: Response) => {
  const { message } = req.body
  const { transporter, mailOptions } = mailService.getMailInfo(message)
  transporter
    .sendMail(mailOptions)
    .then(() => res.status(200).json({ message: 'Email sent successfully' }))
    .catch(e => {
      logger.error(e)
      res.status(500).json({ message: 'Error sending email' })
    })
})

export const mailRouter = router
