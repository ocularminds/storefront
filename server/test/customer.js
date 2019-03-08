process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

describe('customers', () => {
  describe('/GET api/customers', () => {

	 it('should return Bad Request', (done) => {
	      chai.request(server)
	        .post('/api/customers')
	        .type('form')
	        .send({email: 'YELLOW@hotmail.com', address: 'Banjoke lane', age: 24})
	        .end((err, res) => {
	          res.should.have.status(400);
	          done();
	        });
     });

      it('it should GET all the customers', (done) => {
        chai.request(server).get('/api/customers').end((err, res) => {
			  res.should.have.status(200);
			  res.body.should.be.a('array');
			  res.body.should.have.length.at.least(0);
			  done();
		});
     });
  });
  /*
  * Test the /POST route
  */
  describe('/POST api/customers', () => {
      it('it should not POST a customer without password field', (done) => {
		  var tag = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
          let customer = {
              name: `Babatope ${tag} Festus`,
              email: `mail.${tag}@gmail.com`,
          }
        chai.request(server).post('/api/customers').send(customer).end((err, res) => {
				console.log('response -> '+ JSON.stringify(res.body));
                  res.should.have.status(400);
                  res.body.should.be.a('object');
                  res.body.should.have.property('errors');
              done();
          });
      });

  });
});

/*
  * Test the /GET/:id route from already populated customers
  */
  describe('/GET/:id customers', () => {
      it('it should GET a customer by the given id', (done) => {
		  var tag = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
		  var tag2 = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
		     const customer = {
				 name: `Baba Festus ${tag}`,
                 email: `${tag}.${tag2}@turing.com`,
                 password: `${tag}`,
                 address_1: 'Plot 44 Faoniki, Magodo, Lagos',
                 city: 'Lagos',
                 mob_phone: '08091234567'
             };
		     chai.request(server).post('/api/customers').send(customer).end((err, res) => {
				 console.log('create from get/:id -response '+JSON.stringify(res.body));
				 chai.request(server).get('/api/customers/'+res.body.id)
				.end((err, res) => {
					  res.should.have.status(200);
					  res.body.should.be.a('object');
					  res.body.should.have.property('name');
					  res.body.should.have.property('email');
					  res.body.should.have.property('password');
					  res.body.should.have.property('email').eql(customer.email);
				  done();
			   });
         });
     });
});

/*
  * Test the /PUT/:id route
  */
  describe('/PUT/:id customers', () => {
      it('it should UPDATE a customer given the id', (done) => {
		  var tag = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
          let customer = {name: `Babatope Jejelowo ${tag}`, email: `mail.${tag}@gmail.com`, password: `${tag}`};
          chai.request(server).post('/api/customers/').send(customer).end((err, res) => {
			  customer.name = `Jejelowo ${tag} Babatope`;
			  chai.request(server).put(`/api/customers/${res.body.id}`).send(customer).end((err, res) => {
				  console.log('put response -> '+ JSON.stringify(res.body));
				  res.should.have.status(200);
				  res.body.should.be.a('object');
				  res.body.should.have.property('name').eql(customer.name);
				  res.body.should.have.property('email').eql(customer.email);
			  done();
			});
      });
   });
});

/*
  * Test the /DELETE/:id route
  */
  describe('/DELETE/:id customer', () => {
      it('it should DELETE a customer given the id', (done) => {
		  var tag = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
          let customer = {name: `Nike Narnia ${tag}`, email: `text_${tag}@hotmail.com`, password: "@d0nij@h"};
          chai.request(server).post('/api/customers/').send(customer).end((err, res) => {
                chai.request(server)
                .delete('/api/customers/' + res.body.id)
                .end((err, res) => {
					  console.log('delete response -> '+ JSON.stringify(res.body));
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                  done();
                });
          });
     });
});


