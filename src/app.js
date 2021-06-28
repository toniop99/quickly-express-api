import express, { json } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import { Home } from './routes/home.js'
import { Api } from './api/index.js'
import { Middlewares } from './middlewares/index.js'

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(json())

app.use('/', Home)
app.use('/api/v1/', Api)

app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

export { app }
