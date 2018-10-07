const chai = require('chai');
const should = chai.should();

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var message = generateMessage('amir', 'hello from test suite');
        message.should.include({from: 'amir', text: 'hello from test suite'});
        message.createdAt.should.be.a('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'amir';
        var latitude = 4;
        var longitude = 4;
        var url = 'https://www.google.com/maps?q=4,4';
        var locationMessage = generateLocationMessage(from, latitude, longitude);

        locationMessage.createdAt.should.be.a('number');
        locationMessage.should.deep.include({from, url});
    });
})