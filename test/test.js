'use strict';

const Bitly = require('../src/bitly');
const bitly_token = 'eb1b99efe83c7d029e7600a6b38e32d1c9c2c6d9';
const LONG_URL = 'http://example.com';
const SHORT_URL = 'http://bit.ly/1KjIwXl';
const BITLY_HASH = 'VDcn';

describe('Shorten_URL', function() {
  describe('#shorten()', function() {
    it('should return a success', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.shorten(LONG_URL).then((result) => {
        done();
      }, done)
    });
  });
});
