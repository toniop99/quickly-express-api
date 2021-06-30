import { app } from '../src/app.js'
import supertest from 'supertest'

const request = supertest(app)

test('Gets the main page', async () => {
  const response = await request.get('/')
  expect(response.status).toBe(200)
  expect(response.headers).toMatchObject({ 'content-type': /html/ })
  expect(response.text).toContain('Welcome to quickly API')
})
