import { app } from '../src/app.js'
import supertest from 'supertest'

const request = supertest(app)

it('Gets the hello endpoint', async () => {
  const res = await request.get('/api/v1/hello')
  expect(res.status).toBe(200)
  expect(res.body.message).toBe('Hello world!')
})
