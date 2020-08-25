import request from 'supertest'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from '../../setup/schema'


describe('user queries',  () => {
  let server;

  beforeAll(() => {
    server = express();

    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false,
      })
    )
  })

  it('returns all users', async () =>{
    const response = await request(server)
      .get('/')
      .send({ query: '{ users { name email }}'})
      // we can send a mutation here instead of a query
      .expect(200)

    expect(response.body.data.users.length).toEqual(2)
    expect(response.body.data.users[0].email).toBe('admin@crate.com')
    expect(response.body.data.users[0].name).toBe('The Admin')
  })

  it('returns user by id', async () => {
    const response = await request(server)
    .get('/')
    .send({ query: '{user(id: 2) {email name} }'})
    .expect(200)

  expect(response.body.data.user.name).toBe('The User')
  expect(response.body.data.user.email).toBe('user@crate.com')
  })

  it('is true', () => {
    expect(true).toBe(true)
  })
})
