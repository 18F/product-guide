'use strict';
const fs = require('fs');
const fileUrl = require('file-url');
const prependHttp = require('prepend-http');

module.exports = function (url) {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof url}`);
	}

	return fs.existsSync(url) ? fileUrl(url) : prependHttp(url);
};
