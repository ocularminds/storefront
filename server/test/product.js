process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

describe('products', () => {
    /*beforeEach.skip((done) => {
        product.remove({}, (err) => {
           done();
        });
    });*/
  describe('/GET api/products', () => {
      it('it should GET all the products', (done) => {
        chai.request(server).get('/api/products').end((err, res) => {
			  res.should.have.status(200);
			  res.body.should.be.a('array');
			  res.body.should.have.length.at.least(10);
		      done();
		});
     });
  });
  /*
  * Test the /POST route
  */
  describe('/POST api/products', () => {
      it('it should not POST a product without price field', (done) => {
          const product = {
              name: "Lord of The Rings",
              description: "The Lord of the Rings J.R.R. Tolkien TSHirt",
          }
        chai.request(server).post('/api/products').send(product).end((err, res) => {
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
  * Test the /GET/:id route from already populated products
  */
  describe('/GET/:id products', () => {
      it('it should GET a product by the given id', (done) => {
	  var tag = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
	  const product = {
			 name: `Round Neck ${tag}`,
			 description: `White Round Neck ${tag} Size 16, 18, 24`,
			 price: 750,
			 discount_price: 720
	   };
	 chai.request(server).post('/api/products').send(product).end((err, res) => {
             chai.request(server).get(`/api/products/${res.body.id}`).end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('name');
                  res.body.should.have.property('description');
                  res.body.should.have.property('price');
                  res.body.should.have.property('discounted_price');
              done();
            });
      });
  });
});

/*
  * Test the /PUT/:id route
  */
  describe('/PUT/:id products', () => {
      it('it should UPDATE a product given the id', (done) => {
	  var tag = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
	  const produkt = {
			 name: `Round Neck ${tag}`,
			 description: `White Round Neck ${tag} Size 16, 18, 24`,
			 price: 750,
			 discount_price: 720
	   };
	 chai.request(server).post('/api/products').send(produkt).end((err, res) => {
            let prod = {name: `Addidas Boxers ${tag}`, description: "Addidas Boxers C.S. Lewis", price: 1948, discounted_price: 778}
			chai.request(server)
			.put(`/api/products/${res.body.id}`).send(prod).end((err, res) => {
				  console.log('put response -> '+ JSON.stringify(res.body));
				  res.should.have.status(200);
				  res.body.should.be.a('object');
				  res.body.should.have.property('name').eql(prod.name);
				  res.body.should.have.property('price').eql(prod.price);
			  done();
			});
      });
    });
});

/*
  * Test the /DELETE/:id route
  */
  describe('/DELETE/:id product', () => {
      it('it should DELETE a product given the id', (done) => {
		  var tag = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
          let product = {name: `Nike Narnia ${tag}`, description: "Nike Narnia for young girls", price: 1948, discount_price: 778};
          chai.request(server).post('/api/products/').send(product).end((err, res) => {
                chai.request(server)
                .delete('/api/products/' + res.body.id)
                .end((err, res) => {
					  console.log('delete response -> '+ JSON.stringify(res.body));
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                  done();
                });
          });
     });
});
