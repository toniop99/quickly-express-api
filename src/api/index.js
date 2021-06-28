import { Router } from 'express'
import { HelloAPI } from './hello.js'

const router = Router()

router.use('/hello', HelloAPI)

export { router as Api }
