import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';

describe('user queries', () => {
  let server = express();

  beforeAll(() => {
    server.use(
      "/",
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    )
  })

  it('can successfully query all users', async (done) => {
    const response = await request(server)
      .post('/')
      .send({query: '{users {name} }'})
      .expect(200)

    expect(response.body.data.users.length).toBe(2)
    done();
  })
  it('can successfully query all user attributes', async (done) => {
    const response = await request(server)
      .post('/')
      .send({query: '{users {name, email} }'})
      .expect(200)

    expect(response.body.data.users[0]).toHaveProperty('name')
    expect(response.body.data.users[0]).toHaveProperty('email')
    // expect(response.body.data.users[0]).toHaveProperty('image')
    // expect(response.body.data.users[0]).toHaveProperty('bio')
    // expect(response.body.data.users[0]).toHaveProperty('shippingAddress')
    done();
  })
})
