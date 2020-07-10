import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

describe ("user queries", () => {
  let server;
  
  beforeAll(() => {
    server = express();
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  });
  
  it("is true", () => {
    expect(true).toBe(true)
  })

  it("returns all users", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ users { name email stylePreferences } }'})
      .expect(200)

      expect(response.body.data.users.length).toEqual(2)
  })

  it("returns a user by id", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ user(id: 1) { name } }'})
      .expect(200)
    
    expect(response.body.data.user.name).toEqual("The Admin");
    expect(response.body.data.user.name).not.toEqual("The User");
  })
})
