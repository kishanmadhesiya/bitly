This is the API of bitly.com

[![Build Status](https://travis-ci.org/kishanmadhesiya/bitly.svg?branch=master)](https://travis-ci.org/kishanmadhesiya/bitly/)
[![npm version](https://badge.fury.io/js/bitlyapi.png)](https://badge.fury.io/js/bitlyapi)

## Installation

Using NPM `npm install bitlyapi`

Using GIT `git clone https://github.com/kishanmadhesiya/bitly.git`

## Usage

You need 'ACCESS TOKEN' from bitly.com. Visit: https://bitly.com/a/oauth_apps

Check http://dev.bitly.com/ for more info.

#### Code

```js
// For ES2015/ES6

import Bitly from 'bitlyapi';

let bitly = new Bitly('<ACCESS TOKEN>');

bitly.shorten('http://nodejs.org', (response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});


// For ES5

var Bitly = require('bitlyapi');
var bitly = new Bitly('<ACCESS TOKEN>');

bitly.shorten('https://github.com/kishanmadhesiya/bitly')
  .then(function(response) {
    console.log(response);
  }, function(error) {
    console.log(error);
  });
```

### Bit.ly Api Features

* shorten
* expand
* clicks
* clicks_by_minute
* clicks_by_day
* referrers
* countries
* bitly_pro_domain
* lookup
* info
* history
* link_edit

## Tests
To run tests type `npm test`.
For coverage type `npm run coverage`
