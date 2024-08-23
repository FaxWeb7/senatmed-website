import express, { NextFunction, Request, Response } from 'express'
import compression from 'compression'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'
import { mailRouter } from './mail/mail.controller'
import { logger } from './utils/log'

dotenv.config()
const app = express()

async function main() {
  app.use(helmet())
  app.use(cors({ origin: 'https://senatmed.ru' }))
  app.use(express.json())
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
  app.use(compression())

  app.get('/api/ping', (req, res) => res.status(200).json({ message: 'pong' }))
  app.use('/api/mail', mailRouter)

  app.all('*', (req, res) => {
    res.status(404).json({ message: 'Not found' })
  })

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.stack)
    res.status(500).send('Что-то пошло не так!')
  })

  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`)
  })
}

main()
