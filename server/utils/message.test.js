const chai = require('chai');
const should = chai.should();

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct object', () => {
        var message = generateMessage('amir', 'hello from test suite');
        message.should.include({from: 'amir', text: 'hello from test suite'});
        message.createdAt.should.be.a('number');
    });
});