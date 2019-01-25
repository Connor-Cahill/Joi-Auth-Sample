
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

// chai.config.includeStack = true;

// describe('User Auth', () => {
//   after((done) => {
//     User.findOneAndRemove(sampleUser)
//     .then(() => done())
//     .catch(err => done(err));
//   });
//   //  Testing sign-up route
//   it('Should create a new user, add to DB and sign in at POST: /api/auth/sign-up', (done) => {
//     User.find({})
//     .then((users) => {
//       const userCount = users.length || 0;

//       agent
//       .post('/api/auth/sign-up')
//       .send(sampleUser)
//       .then((res) => {
//         User.find({})
//         .then((updatedUsers) => {
//           res.status.should.be.equal(200);
//           expect(userCount).to.be.equal(updatedUsers.length - 1);
//           expect(res).to.have.cookie('Token');
//           return done();
//         })
//         .catch(err => done(err));
//       })
//       .catch(err => done(err));
//     })
//     .catch(err => done(err));
//   });

//   it('Should sign a user out at GET: /api/auth/sign-out', (done) => {
//     agent
//     .get('/api/auth/sign-out')
//     .end((err, res) => {
//       if (err) { done(err); }
//       res.status.should.be.equal(200);
//       expect(res).to.not.have.cookie('Token');
//       return done();
//     });
//   });

//   it('Should sign in existing user and return a token at POST: /api/auth/sign-in', (done) => {
//     agent
//     .post('/api/auth/sign-in')
//     .send(sampleUser)
//     .end((err, res) => {
//       if (err) { done(err); }
//       res.status.should.be.equal(200);
//       expect(res).to.have.cookie('Token');
//       return done();
//     });
//   });
// });
