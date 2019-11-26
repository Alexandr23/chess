'use strict';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./client.prod.js');
} else {
  module.exports = require('./client.dev.js');
}
