import { Router } from 'express'

const router = Router()

router.get('/', (_, res) => {
  res.sendFile('public/index.html', { root: 'src' })
})

export { router as Home }
