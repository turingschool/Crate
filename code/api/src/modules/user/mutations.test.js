import request from 'supertest'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from '../../setup/schema'
import models from '../../setup/models'
import bcrypt from 'bcrypt';
import db from '../../setup/database';

describe('user mutations',  () => {
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

 //  beforeEach(async() => {
 //   const rubeusHagrid = {
 //     id: 1,
 //     name: "Rubeus Hagrid",
 //     email: "grounds@hogwarts.com",
 //     password: bcrypt.hashSync('buckbeak', 10),
 //     role: "USER",
 //     createdAt: new Date(),
 //     updatedAt: new Date(),
 //   };
 //
 //   await models.User.create(rubeusHagrid);
 // })

 afterEach(async() => {
   await models.User.destroy({ where: {}})
 })

 afterAll(() => {
   db.close()
 })

  it('can create new user', async () => {
      const response = await request(server)
        .post('/')
        .send({query: 'mutation { userSignup(name: "Hermione Granger", email: "granger@hogwarts.com", password: "crookshanks"){id}}'})
        .expect(200)
  expect(response.body.data.userSignup.id).toBeNumber()
  })

  it('can remove a user', async () => {
      const response = await request(server)
        .post('/')
        .send({query: 'mutation { userRemove (id: 1) {id}}'})
        .expect(200)

  expect(response.body.data.userRemove.id).toBeNull()
  })
})
