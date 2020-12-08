import request from 'supertest';
import testServer from '../../utils/testing/server';

describe('User Queries', () => {
  let server;
  beforeAll(() => {
    server = testServer;
  })

  it('returns all users', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{users { email } }`})
      .expect(200)
    expect(response.body.data.users.length).toBe(2);
    done();
  });

  it('returns a user based on id', async(done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{user(id:1) { email name role createdAt} }`})
      .expect(200)
    expect(response.body).toMatchObject({
      data:{
        user: {
          email: 'admin@crate.com',
          name: 'The Admin',
          role: 'ADMIN',
          createdAt: '1607445458849'
        }
      }
    })
    expect(response.body.data.user.email).toBe('admin@crate.com');
    done();
  })
})
