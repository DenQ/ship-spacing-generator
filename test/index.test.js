var expect  = require('chai').expect;

const app = require('../src/index');

describe('App', function () {

    it('case #1', function () {
        expect(app()).to.be.deep.equal([]);
    });

});