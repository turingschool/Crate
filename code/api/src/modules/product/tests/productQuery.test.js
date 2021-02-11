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

  it('can successfully query all products', async (done) => {
    const response = await request(server)
      .post('/')
      .send({query: '{products {name} }'})
      .expect(200)

    expect(response.body.data.products.length).toBe(8)
    done();
  })
  it('can successfully query all product attributes', async (done) => {
    const response = await request(server)
      .post('/')
      .send({query: '{products {name, slug, description, type, gender, image} }'})
      .expect(200)

    expect(response.body.data.products[0]).toHaveProperty('name')
    expect(response.body.data.products[0]).toHaveProperty('slug')
    expect(response.body.data.products[0]).toHaveProperty('description')
    expect(response.body.data.products[0]).toHaveProperty('type')
    expect(response.body.data.products[0]).toHaveProperty('gender')
    expect(response.body.data.products[0]).toHaveProperty('image')
    // expect(response.body.data.products[0]).toHaveProperty('orderStatus')
    // expect(response.body.data.products[0]).toHaveProperty('crateId')
    done();
  })
})
