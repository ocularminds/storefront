const assert = require('assert');

const isValidLogin = (userList, user) => {
	return userList.indexOf(user) >= 0;
};

const isValidUserIdAsync = (userList, user, callback) => {
    setTimeout(function(){
      callback(userList.indexOf(user) >= 0)
    }, 1);
};

const isAuthorizedPromise = (user) => {
	var userList = ['12444','abc123'];
    return new Promise(function(resolve){
        setTimeout(function(){resolve(userList.indexOf(user) >= 0)}, 10);
    });
};

describe('Storefront unit tests', function(){
	it('Should return same length of string', function(){
		assert.equal('should'.length, 6);
	});

	it('Should start with letter S', function(){
		assert.equal('Should'.charAt(0), 'S');
	});

	it('Should be a valid user', function(){
		const valid = isValidLogin(['12444','abc123'],'abc123');
		assert.equal(valid, true);
	});

	it('should return true if valid user id', function(done){
		isValidUserIdAsync(['12444','abc123'],'abc123',function(isValid){
		  assert.equal(isValid, true);
		  done();
		});
	});
});

var chai = require('chai');
var should = require('chai').should();
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();
describe('isAuthorizedPromise', function(){
  it('should return true if valid user id', function(){
      return isAuthorizedPromise('abc123').should.eventually.be.true;
    });
});

it('should have property name with value Figo', function(){
    var car = {name:'Figo', Maker:'Ford'};
    car.should.have.property('name').equal('Figo');
});

it('Checking for null', function(){
    var car = null;
    //car.should.not.exist; (Cannot read property 'should' of null)
    should.not.exist(car);
});

it.skip('should return false if invalid user id', function(){

 });