'use strict';

const test = require('ava');
const jsdom = require('jsdom');

global.document = jsdom.jsdom();
global.window = document.defaultView;

const dataset = require('./src/index.js');

const hasOwnProperty = Object.prototype.hasOwnProperty;

function toDashed(name) {
	return name.replace(/([A-Z])/g, u => {
		return `-${u.toLowerCase()}`;
	});
}

test('set multiple and compare', t => {
	const elem = document.createElement('div');
	const attrs = {
		unicorn: 'rainbows',
		dogsAreGreaterThan: 'cats',
		true: 'true'
	};

	for (const key in attrs) {
		if (hasOwnProperty.call(attrs, key)) {
			const name = toDashed(key);
			elem.setAttribute(`data-${name}`, attrs[key]);
		}
	}

	const result = dataset(elem);
	t.deepEqual(result, attrs);
});

test('set and overwrite', t => {
	const elem = document.createElement('div');
	elem.setAttribute('data-unicorn', 'rainbows');

	dataset(elem).unicorn = 'fireballs';
	const result = dataset(elem).unicorn;

	t.is(result, 'fireballs');
});

test('simple get', t => {
	const elem = document.createElement('div');
	elem.setAttribute('data-unicorn', 'rainbows');

	const result = dataset(elem).unicorn;
	t.is(result, 'rainbows');
});
