import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';

describe('subscription queries', () => {
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

  it('can successfully query all subscriptions', async (done) => {
    const response = await request(server)
      .post('/')
      .send({query: '{subscriptions {deliveryDate} }'})
      .expect(200)

    expect(response.body.data.subscriptions.length).toBe(3)
    done();
  })
  it('can successfully query all subscription attributes', async (done) => {
    const response = await request(server)
      .post('/')
      .send({query: '{subscriptions {deliveryDate} }'})
      .expect(200)
  
    expect(response.body.data.subscriptions[0]).toHaveProperty('deliveryDate')

    done();
  })
})
