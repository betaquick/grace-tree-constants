'use strict';

const expect = require('chai').expect;
const index = require('../dist/index.js');

describe('interface test', () => {

	it('should reflect correct constant', () => {
		const result = index.UserTypes.General;
		expect(result).to.equal('General');
	});

});
