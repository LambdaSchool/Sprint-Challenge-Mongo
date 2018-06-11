import dotenv from 'dotenv'
import express from 'express'

import config from './config/config'

dotenv.config({ path: '.env' })

const app: express.Application = express()

require('./config/express')(app)
require('./config/mongoose')(config)

app.listen(config.port, () =>
  console.log(`🤖 listening: http://localhost:${config.port}/ in ${app.get('env')} mode`))
