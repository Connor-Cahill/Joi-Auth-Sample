// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../../index');
// const User = require('../user/user.model');
// // eslint-disable-next-line no-unused-vars
// const should = chai.should();
// const expect = chai.expect;
// chai.use(chaiHttp);
// const agent = chai.request.agent(server);

// const sampleUser = {
//   firstName: 'Test',
//   lastName: 'Dude',
//   email: 'testdude@test.com',
//   username: 'testertest',
//   password: 'test',
//   phoneNumber: '9131231231',
//   birthday: '06-21-2003',
// };

// describe('User Routes', () => {
//   before((done) => {
//     agent
//     .post('/api/auth/sign-up')
//     .send(sampleUser)
//     .then(() => done())
//     .catch(err => done(err));
//   });
//   // after((done) => {
//   //   User.findOneAndRemove(sampleUser)
//   //   .then(() => done())
//   //   .catch(err => done(err));
//   // });
//   it('Should returns JSON List of all users in DB at GET: /api/users', (done) => {
//     agent
//     .get('/api/users')
//     .end((err, res) => {
//       if (err) { done(err); }
//       // eslint-disable-next-line
//       res.should.be.json;
//       res.status.should.be.equal(200);
//       return done();
//     });
//   });

//   it('Should return a single user at GET: /api/users/:id', (done) => {
//     agent
//     .get(`/api/users/${sampleUser._id}`)
//     .end((err, res) => {
//       if (err) { done(err); }
//       // eslint-disable-next-line
//       res.should.be.json;
//       res.status.should.be.equal(200);
//       return done();
//     });
//   });

//   it('Should remove a user from DB at DELETE: /api/users/:id', (done) => {
//     User.find({})
//     .then((users) => {
//       const userCount = users.length || 0;

//       agent
//       .delete(`/api/users/${sampleUser._id}`)
//       .then((res) => {
//         User.find({})
//         .then((updatedUsers) => {
//           expect(userCount).to.be.equal(updatedUsers.length + 1);
//           res.status.should.be.equal(200);
//           return done();
//         })
//         .catch(err => done(err));
//       })
//       .catch(err => done(err));
//     })
//     .catch(err => done(err));
//   });
//   it('Should update clients information at PATCH: /api/users/:id', (done) => {
//     agent
//     .patch(`/api/users/${sampleUser._id}`)
//     .send({ firstName: 'Bobby' })
//     .end((err, res) => {
//       if (err) { done(err); }
//       res.status.should.be(200);
//       res.should.be.json();
//       return done();
//     });
//   });
// });
