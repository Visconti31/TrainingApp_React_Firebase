import express from 'express'
import cors from 'cors'

import config from './config.js'
import exerciseRouter from './routes/exerciseRoute.js'

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use('/api', exerciseRouter)

app.listen(config.port, () => console.log(`Server running @ ${config.hostURL}`))
