'use strict';

const url = require('url');
const isUri = require('valid-url').isUri;
const Boom = require('boom');
const fetch = require('node-fetch');


class Bitly {

  constructor(accessToken) {
    this.accessToken = accessToken;
    this.format = 'json';
    this.api_url = 'api-ssl.bitly.com';
    this.api_version = 'v3';
    this.domain = 'bit.ly';
  }

  generateNiceUrl(query, method){
    query['access_token'] = this.accessToken;

    return url.parse(url.format({
      protocol: 'https',
      hostname: this.api_url,
      pathname: '/' + this.api_version + '/' + method,
      query: query
    }));
  }

  doRequest (requestUri) {
    return new Promise((resolve, reject) => {
      return fetch(requestUri)
        .then((response) => {
        if (response.status >= 400){
            return reject(Boom.create(response.status, response.statusText, response));
          }else{
            return resolve(response.json());
          }
        });
    });
  }

  sortUrlsAndHash (items, query) {
    console.log(query)
    let shortUrl = [];
    let hash = [];

    // If only passed one item, put in array for url checking
    if (typeof items === 'string') {
      items = [items];
    }
    items.forEach((item) => {
      isUri(item) ? shortUrl.push(item) : hash.push(item);
    });

    if (shortUrl.length > 0) {
      query.shortUrl = shortUrl;
    }
    if (hash.length > 0) {
      query.hash = hash;
    }
  }

  shorten (longUrl, domain) {
    var query = {
      format: this.format,
      longUrl: longUrl,
      domain: domain ? domain : this.domain
    };

    return this.doRequest(this.generateNiceUrl(query, 'shorten'));
  }

}
module.exports = Bitly;
