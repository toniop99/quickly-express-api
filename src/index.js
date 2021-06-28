import { app } from './app.js'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 1234

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
