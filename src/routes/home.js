import { Router } from 'express'

const router = Router()

router.get('/', (_, res) => {
  res.send('Welcome to quickly API')
})

export { router as Home }
