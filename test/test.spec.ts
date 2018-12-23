'use strict';

import _ from 'lodash';
import { expect } from 'chai';
import * as index from '../lib/index';

describe('interface test', () => {

	it('should reflect correct constant', () => {
		expect(index).to.be.an('object');
		_.forEach(index, (type, name) => {
		  expect(name).to.be.a('string');
		  expect(type).to.be.ok;
		});
	});

});
