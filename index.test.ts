import responser from './index'
import express from 'express'
import request from 'supertest'
import { Response } from 'express'

test('it returns the right response', async () => {
  
  const app = express()

  app.use(responser)

  const planets = [ 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune' ]

  app.get('/planets', (_, response: Response) => 
    response.send_ok('Planets were found successfully!', { 
      planets
    })
  )

  const response = await request(app).get('/planets')

  expect(response.body).toEqual({
    status: 'OK',
    code: 200,
    message: 'Planets were found successfully!',
    success: true,
      data: {
        planets: [
         'Mercury', 
         'Venus',
         'Earth',
         'Mars',
         'Jupiter',
         'Saturn',
         'Uranus',
         'Neptune'
       ]
    }
  })

  expect(response.status).toBe(200)

})

test('it returns the right status', async () => {
  
  const app = express()

  app.use(responser)

  app.post('/planets', (_, response: Response) => 
    response.send_conflict('This planet already exists!')
  )

  const response = await request(app).post('/planets')

  expect(response.body).toEqual({
    status: 'CONFLICT',
    code: 409,
    message: 'This planet already exists!',
    success: false
  })

  expect(response.status).toBe(409)

})