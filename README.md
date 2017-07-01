This is the API of bitly.com

[![Build Status](https://travis-ci.org/kishanmadhesiya/bitly.svg?branch=master)](https://travis-ci.org/kishanmadhesiya/bitly/)
[![npm version](https://badge.fury.io/js/bitlyapi.png)](https://badge.fury.io/js/bitlyapi)

## Installation

To install via NPM type the following: `npm install bitlyapi`

You can also install via git by cloning: `git clone https://github.com/kishanmadhesiya/bitly.git /path/to/bitly`

## Usage

This library uses the API provided by bitly and requires an OAuth token to use.
To get your access token, visit https://bitly.com/a/oauth_apps (under Generic Access Token)

See http://dev.bitly.com/ for format of returned objects from the API

#### Code

```js
// For ES2015/ES6

import Bitly from 'bitlyapi';

let bitly = new Bitly('<YOUR ACCESS TOKEN>');

bitly.shorten('http://nodejs.org', (response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});


// For ES5

var Bitly = require('bitlyapi');
var bitly = new Bitly('<YOUR ACCESS TOKEN>');

bitly.shorten('https://github.com/kishanmadhesiya/bitly')
  .then(function(response) {
    var short_url = response.data.url
    // Do something with data
  }, function(error) {
    throw error;
  });
```

## Tests
To run tests type `npm test`. For coverage type `npm run coverage`

### Bit.ly Features

This module is limited to the following API methods:

* shorten
* expand
* clicks / clicks_by_minute / clicks_by_day
* referrers
* countries
* bitly_pro_domain
* lookup
* info
* history
* link_edit

## This is updated version of https://www.npmjs.com/package/bitly
