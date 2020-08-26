import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql'
import schema from '../../setup/schema'

describe('user mutations', () => {
  let server;

  beforeAll(async() => {
    server = express();

    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    )
  })

  it('can create new user', async () => {
      const response = await request(server)
        .post('/')
        .send({query: 'mutation { userSignup(name: "Dude", email: "dude@dude.com", password: "IamDUDE"){id}}'})
        .expect(200)

  expect(response.body.data.userSignup.id).toBe(Int)

  it('can remove a user', async () => {
      const response = await request(server)
        .post('/')
        .send({query: 'mutation { userSignup(name: "Dude", email: "dude@dude.com", password: "IamDUDE"){id}}'})
        .expect(200)

  console.log(response.body)
  })
})
